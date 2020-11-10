import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState
} from 'react';
import { useScript, status } from 'hooks';
import { useNotificationsContext } from 'contexts';

const params = {
    apiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API,
    clientId: process.env.REACT_APP_GOOGLE_CALENDAR_CLIENT_ID,
    discoveryDocs: JSON.parse(
        process.env.REACT_APP_GOOGLE_CALENDAR_DISCOVERY_DOCS
    ),
    scope: process.env.REACT_APP_GOOGLE_CALENDAR_SCOPES
};

const GapiContext = createContext(null);
export function GapiProvider({ children }) {
    const [isGapiConnected, setIsGapiConnected] = useState(false);
    const { scriptStatus } = useScript('https://apis.google.com/js/api.js');
    const { showError } = useNotificationsContext();

    const initGAPIClient = useCallback(async () => {
        const loadClient = new Promise((resolve, reject) => {
            window.gapi.load('client:auth2', resolve);
        });

        return loadClient.then(async () => {
            await window.gapi.client.init(params);
            await window.gapi.client.load('calendar', 'v3');
            const authInstance = await window.gapi.auth2.getAuthInstance();
            setIsGapiConnected(authInstance.isSignedIn.get());
        });
    }, []);

    useEffect(() => {
        if (scriptStatus === status.ready) {
            initGAPIClient();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scriptStatus]);

    const loginGapi = async () => {
        if (scriptStatus === status.ready) {
            return await window.gapi.auth2
                .getAuthInstance()
                .signIn()
                .then(() => setIsGapiConnected(true))
                .catch((err) => {
                    if (err.error === 'popup_closed_by_user') {
                        return;
                    }
                    showError(
                        'Error',
                        'Failed to connect Google Account!',
                        500
                    );
                });
        }
    };

    const logoutGapi = async () => {
        if (scriptStatus === status.ready) {
            return await window.gapi.auth2
                .getAuthInstance()
                .signOut()
                .then(() => setIsGapiConnected(false))
                .catch(() =>
                    showError(
                        'Error',
                        'Failed to disconnect Google Account!',
                        500
                    )
                );
        }
    };

    return (
        <GapiContext.Provider
            value={{ isGapiConnected, loginGapi, logoutGapi }}
        >
            {children}
        </GapiContext.Provider>
    );
}

export const useGapiContext = () => {
    return useContext(GapiContext);
};
