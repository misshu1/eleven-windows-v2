export const quickAccessToolbarAnimation = {
    initial: {
        x: 'calc(100% - 3rem)',
        opacity: 0,
    },
    open: {
        x: 0,
        opacity: [0, 1, 1],

        transition: {
            duration: 0.5,
            ease: 'easeOut',
            times: [0, 0.1, 1],
        },
    },
    close: {
        x: 'calc(100% - 3rem)',
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

export const quickAccessToolbarCloseBtnAnimation = {
    open: {
        opacity: 1,
        rotateZ: [180, 180, 0],
    },
    close: {
        rotateZ: [0, 180, 180],
        opacity: [1, 1, 0],
        transition: {
            times: [0, 0.4, 1],
            duration: 0.6,
            delay: 0.1,
        },
    },
};

export const quickAccessToolbarOpenBtnAnimation = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: [0, 0, 1],
        transition: {
            times: [0, 0.3, 1],
            duration: 0.3,
            delay: 0.7,
        },
    },
};

export const modalPageAnimation = {
    initial: {
        opacity: 0,
        scale: 0.7,
    },
    open: {
        opacity: 1,
        scale: 1,
    },
    close: {
        opacity: 0,
        scale: 0.7,
        transition: {
            duration: 0.2,
        },
    },
};
