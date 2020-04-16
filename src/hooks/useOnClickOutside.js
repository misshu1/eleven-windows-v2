import { useCallback, useEffect } from 'react';

function useOnClickOutside(ref, handler) {
    const calbackHandler = useCallback(
        (event) => {
            handler(event);
        },
        [handler]
    );

    useEffect(() => {
        const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            calbackHandler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler, calbackHandler]);
}

export default useOnClickOutside;
