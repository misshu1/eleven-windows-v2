import { useLayoutEffect, useState } from 'react';

export const useMediaQuery = (mediaQuery) => {
    const [matches, setMatches] = useState(
        () => window.matchMedia(mediaQuery).matches
    );

    useLayoutEffect(() => {
        const mediaQueryList = window.matchMedia(mediaQuery);
        const listener = (e) => setMatches(e.matches);

        mediaQueryList.addEventListener('change', listener);

        return () => mediaQueryList.removeEventListener('change', listener);
    }, [mediaQuery]);

    return matches;
};
