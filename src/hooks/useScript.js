import { useEffect, useState } from 'react';

export const status = {
    idle: 'IDLE',
    loading: 'LOADING',
    ready: 'READY',
    error: 'ERROR'
};

export function useScript(src) {
    const [scriptStatus, setScriptStatus] = useState(
        src ? status.loading : status.idle
    );

    useEffect(() => {
        if (!src) {
            setScriptStatus(status.idle);
            return;
        }

        let script = document.querySelector(`script[src="${src}"]`);

        if (!script) {
            script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.setAttribute('data-status', status.loading);
            document.body.appendChild(script);

            const setAttributeFromEvent = (event) => {
                script.setAttribute(
                    'data-status',
                    event.type === 'load' ? status.ready : status.error
                );
            };

            script.addEventListener('load', setAttributeFromEvent);
            script.addEventListener('error', setAttributeFromEvent);
        } else {
            setScriptStatus(script.getAttribute('data-status'));
        }

        const setStateFromEvent = (event) => {
            setScriptStatus(
                event.type === 'load' ? status.ready : status.error
            );
        };

        script.addEventListener('load', setStateFromEvent);
        script.addEventListener('error', setStateFromEvent);

        return () => {
            if (script) {
                script.removeEventListener('load', setStateFromEvent);
                script.removeEventListener('error', setStateFromEvent);
            }
        };
    }, [src]);

    return { scriptStatus };
}
