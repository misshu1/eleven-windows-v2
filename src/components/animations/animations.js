export const logoAnimations = {
    open: {
        x: '-1rem',
        opacity: [1, 1, 0],

        transition: {
            duration: 0.1,
            ease: 'easeOut',
            times: [0, 0.9, 1],
        },
    },
    close: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.55,
            duration: 0.1,
            ease: 'easeOut',
        },
    },
};

export const iconsMenuAnimations = {
    open: {
        scaleY: 1,
        opacity: 1,

        transition: {
            delay: 0.1,
            duration: 0.3,
            ease: 'easeOut',
        },
    },
    close: {
        scaleY: 0,
        opacity: [1, 1, 0],
        transition: {
            delay: 0.25,
            duration: 0.3,
            ease: 'easeIn',
            times: [0, 0.9, 1],
        },
    },
};

export const expandedMenuAnimations = {
    open: {
        x: 0,
        opacity: 1,

        transition: {
            delay: 0.3,
            duration: 0.3,
            ease: 'easeOut',
        },
    },
    close: {
        x: 'calc(-100% - 3.5rem)',
        opacity: [1, 1, 0],
        transition: {
            duration: 0.3,
            ease: 'easeIn',
            times: [0, 0.9, 1],
        },
    },
};

export const SVGMenuAnimations = {
    initial: {
        y: '-100%',
        opacity: 0,
    },
    open: {
        y: 0,
        opacity: 1,

        transition: {
            delay: 0.55,
            duration: 0.2,
        },
    },
    close: {
        x: '-6rem',
        opacity: 0,
        transition: {
            duration: 0.1,
        },
    },
};

export const fadeAnimations = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.2,
            ease: 'easeOut',
        },
    },
    close: {
        opacity: 0,
        transition: {
            delay: 0.15,
            duration: 0.15,
            ease: 'easeOut',
        },
    },
};
