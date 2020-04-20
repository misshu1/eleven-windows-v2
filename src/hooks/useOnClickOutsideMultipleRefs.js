import { useCallback, useEffect } from 'react';

function useOnClickOutsideMultipleRefs([...refs], handler) {
    const calbackHandler = useCallback(
        (event) => {
            handler(event);
        },
        [handler]
    );

    useEffect(() => {
        const listener = (event) => {
            // Do nothing if clicking ref's elements or descendent elements
            const checkRefs = refs.map((ref) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return true;
                }
                return null;
            });
            let refExists = checkRefs.some((ref) => ref === true);

            if (!refExists) {
                calbackHandler(event);
            }
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [refs, handler, calbackHandler]);
}

export default useOnClickOutsideMultipleRefs;
