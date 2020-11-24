import { useEffect, useState } from 'react';
import { SCRIPT_STATUS } from 'components/common';

export function useScript(src) {
    const [scriptStatus, setScriptStatus] = useState(
        src ? SCRIPT_STATUS.loading : SCRIPT_STATUS.idle
    );

    useEffect(() => {
        if (!src) {
            setScriptStatus(SCRIPT_STATUS.idle);
            return;
        }

        let script = document.querySelector(`script[src="${src}"]`);

        if (!script) {
            script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.setAttribute('data-status', SCRIPT_STATUS.loading);
            document.body.appendChild(script);

            const setAttributeFromEvent = (event) => {
                script.setAttribute(
                    'data-status',
                    event.type === 'load'
                        ? SCRIPT_STATUS.ready
                        : SCRIPT_STATUS.error
                );
            };

            script.addEventListener('load', setAttributeFromEvent);
            script.addEventListener('error', setAttributeFromEvent);
        } else {
            setScriptStatus(script.getAttribute('data-status'));
        }

        const setStateFromEvent = (event) => {
            setScriptStatus(
                event.type === 'load'
                    ? SCRIPT_STATUS.ready
                    : SCRIPT_STATUS.error
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
