import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useRef, useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { tomorrow, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import uuid from 'uuid/v4';

import { FolderIcon, LogoIcon } from 'assets/images/icons';
import { useNotificationsContext, useSettingsContext } from 'contexts';
import Emoji from 'components/common/Emoji';
import FolderApp from 'components/folder/FolderApp';
import {
    customScrollbarExample,
    customScrollbarWithScrollTopExample,
    folderMenuExample,
    folderStructureExample,
    loadingLogoExample,
    notificationExample,
    spinnerExample,
    zIndexExample
} from './CodeExamples';
import CreateFolder from './CreateFolder';
import { Container } from './style';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const useStyles = makeStyles({
    successButton: {
        backgroundColor: '#43a047',
        border: 0,
        borderRadius: 3,
        color: 'white',
        padding: '.2rem 1rem',
        margin: 'auto 0',
        cursor: 'default',
        '&:hover': {
            backgroundColor: '#43a047'
        }
    },
    warnButton: {
        backgroundColor: '#ffa000',
        border: 0,
        borderRadius: 3,
        color: 'white',
        padding: '.2rem 1rem',
        margin: 'auto 0',
        cursor: 'default',
        '&:hover': {
            backgroundColor: '#ffa000'
        }
    },
    errorButton: {
        backgroundColor: '#d32f2f',
        border: 0,
        borderRadius: 3,
        color: 'white',
        padding: '.2rem 1rem',
        margin: 'auto 0',
        cursor: 'default',
        '&:hover': {
            backgroundColor: '#d32f2f'
        }
    },
    infoButton: {
        backgroundColor: '#2979ff',
        border: 0,
        borderRadius: 3,
        color: 'white',
        padding: '.2rem 1rem',
        margin: 'auto 0',
        cursor: 'default',
        '&:hover': {
            backgroundColor: '#2979ff'
        }
    }
});

const addWordBreak = (str) => {
    const regex = /(\/[a-zA-Z.]+)/g;
    let newStringArray = [];
    let m;

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        newStringArray = [
            ...newStringArray,
            <span key={uuid()} className='text-highlight'>
                {m[0]}
                <wbr />
            </span>
        ];
    }
    return newStringArray;
};

const toolbarMenu = () => {
    return [
        {
            name: 'Create a new folder',
            widgetIcon: <FolderIcon width='100%' height='100%' />,
            fontIcon: null,
            link: null,
            scrollToRef: 'createFolderRef',
            onClick: null
        },
        {
            name: 'Add a menu to the folder',
            widgetIcon: null,
            fontIcon: {
                icon: ['fas', 'ellipsis-v']
            },
            link: null,
            scrollToRef: 'addMenuToFolderRef',
            onClick: null
        },
        {
            name: 'Change loading logo',
            widgetIcon: <LogoIcon width='100%' height='100%' />,
            fontIcon: null,
            link: null,
            scrollToRef: 'changeLoadingLogoRef',
            onClick: null
        },
        {
            name: 'Create notifications',
            widgetIcon: null,
            fontIcon: {
                icon: ['far', 'comment-alt']
            },
            link: null,
            scrollToRef: 'createNotificationsRef',
            onClick: null
        },
        {
            name: 'z-index',
            widgetIcon: null,
            fontIcon: {
                icon: ['fas', 'layer-group']
            },
            link: null,
            scrollToRef: 'zIndexRef',
            onClick: null
        },
        {
            name: 'Folder Structure',
            widgetIcon: null,
            fontIcon: {
                icon: ['fas', 'sitemap']
            },
            link: null,
            scrollToRef: 'folderStructureRef',
            onClick: null
        },
        {
            name: 'Custom scrollbar',
            widgetIcon: null,
            fontIcon: {
                icon: ['fas', 'exchange-alt'],
                transform: { rotate: 90 }
            },
            link: null,
            scrollToRef: 'scrollbarRef',
            onClick: null
        },
        {
            name: 'Routing',
            widgetIcon: null,
            fontIcon: {
                icon: ['fas', 'route']
            },
            link: null,
            scrollToRef: 'routingRef',
            onClick: null
        },
        {
            name: 'Spinner',
            widgetIcon: null,
            fontIcon: {
                icon: ['fas', 'spinner'],
                pulse: true
            },
            link: null,
            scrollToRef: 'spinnerRef',
            onClick: null
        }
    ];
};

const DocsApp = () => {
    const [highlightStyle, setHighlightStyle] = useState(tomorrow);
    const { isLightThemeSelected, isDarkThemeSelected } = useSettingsContext();
    const {
        showSuccess,
        showError,
        showWarning,
        showInfo
    } = useNotificationsContext();
    const classes = useStyles();
    const changeLoadingLogoRef = useRef(null);
    const createNotificationsRef = useRef(null);
    const createFolderRef = useRef(null);
    const addMenuToFolderRef = useRef(null);
    const zIndexRef = useRef(null);
    const folderStructureRef = useRef(null);
    const scrollbarRef = useRef(null);
    const routingRef = useRef(null);
    const spinnerRef = useRef(null);

    useEffect(() => {
        if (isDarkThemeSelected()) {
            setHighlightStyle(tomorrow);
        } else if (isLightThemeSelected()) {
            setHighlightStyle(vs);
        }
    }, [isDarkThemeSelected, isLightThemeSelected]);

    return (
        <FolderApp
            appId={2}
            toolbarMenu={toolbarMenu()}
            ref={{
                createFolderRef,
                changeLoadingLogoRef,
                createNotificationsRef,
                addMenuToFolderRef,
                zIndexRef,
                folderStructureRef,
                scrollbarRef,
                routingRef,
                spinnerRef
            }}
        >
            <Container>
                <h1>Documentation</h1>
                <p>
                    This folder is an overview of Eleven Windows documentation
                    and resources. Eleven Windows was built using
                    create-react-app with React Hooks and Context API.
                </p>
                <CreateFolder ref={createFolderRef} />
                <h2 ref={addMenuToFolderRef}>Add a menu to the folder</h2>
                <p>
                    Now, what if you need to add a menu to your folder, well it
                    turns out that's pretty easy as well. Just create a
                    <span className='required'>{` toolbarMenu `}</span>
                    function that returns an array of objects like the example
                    below.
                </p>

                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {folderMenuExample}
                </SyntaxHighlighter>

                <h2 ref={changeLoadingLogoRef}>Change loading logo</h2>
                <p>
                    To change the logo you see before the site loads just go to{' '}
                    {addWordBreak('/public/index.html')} and change the img from
                    inside the div with a{' '}
                    <span className='required'>loading</span> class.
                </p>
                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {loadingLogoExample}
                </SyntaxHighlighter>
                <h2 ref={createNotificationsRef}>Create notifications</h2>
                <div className='notification-btn-container'>
                    <Button
                        className={classes.infoButton}
                        onClick={() => {
                            showInfo(
                                'Info Title',
                                'Notification info contante.'
                            );
                        }}
                        aria-label='show info alert'
                    >
                        show info
                    </Button>

                    <Button
                        className={classes.successButton}
                        onClick={() => {
                            showSuccess(
                                'Success Title',
                                'Notification success info.'
                            );
                        }}
                        aria-label='show success alert'
                    >
                        show success
                    </Button>
                    <Button
                        className={classes.warnButton}
                        onClick={() => {
                            showWarning(
                                'Warn Title',
                                'Notification warn info.',
                                400
                            );
                        }}
                        aria-label='show warn allert'
                    >
                        show warn
                    </Button>
                    <Button
                        className={classes.errorButton}
                        onClick={() => {
                            showError(
                                'Error Title',
                                'Notification error info.',
                                503
                            );
                        }}
                        aria-label='show error alert'
                    >
                        show error
                    </Button>
                </div>
                <p>
                    To create a notification alert is really easy, all you have
                    to do is to import the alert type you need from
                    <span className='text-highlight'>{` useNotificationsContext `}</span>
                    , the function needs a title, and a message and if is an
                    error or warning you can specify a custom error code.
                </p>
                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {notificationExample}
                </SyntaxHighlighter>
                <h2 ref={zIndexRef}>z-index</h2>
                <p>Here are all the z-index values used.</p>
                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {zIndexExample}
                </SyntaxHighlighter>

                <h2 ref={folderStructureRef}>Folder Structure</h2>
                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {folderStructureExample}
                </SyntaxHighlighter>
                <h2 ref={scrollbarRef}>Custom scrollbar</h2>

                <p>
                    This project uses
                    <span className='text-highlight'>{` react-scrollbars-custom `}</span>
                    and was set up in the
                    <span className='text-highlight'>{` ScrollbarApp `}</span>
                    to avoid customization on every usage.
                </p>
                <p>
                    You can pass any props from the
                    <span className='text-highlight'>{` react-scrollbars-custom `}</span>
                    library to
                    <span className='text-highlight'>{` ScrollbarApp `}</span>
                </p>
                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {customScrollbarExample}
                </SyntaxHighlighter>

                <p>
                    When you need to track scroll position use the
                    <span className='text-highlight'>{` requireChildrenProps `}</span>
                    prop. Like the example below.
                </p>
                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {customScrollbarWithScrollTopExample}
                </SyntaxHighlighter>

                <h2 ref={routingRef}>Routing</h2>

                <p>
                    Every folder can be oppened when navigating to the
                    <span className='text-highlight'>{` link `}</span>property
                    declared in the
                    <span className='text-highlight'>{` APPS_STATE `}</span>from
                    <span className='text-highlight'>{` folderContext `}</span>.
                    If there is no matching folder route user will be redirected
                    to 404.
                </p>

                <p>
                    Some folders may require a login or admin role. Those icons
                    won't be visible if the user doesn't meet the requirements,
                    and accessing the folder directly from the address bar will
                    not work, it will be redirected to
                    <span className='text-highlight'>{` /login `}</span>or
                    <span className='text-highlight'>{` 401 `}</span>.
                </p>

                <h2 ref={spinnerRef}>Spinner</h2>

                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {spinnerExample}
                </SyntaxHighlighter>

                <p>
                    <Emoji symbol='📝' label='note' /> Note that The
                    <span className='text-highlight'>{` SpinnerApp `}</span>
                    props are not required.
                    <br />
                    <span className='text-highlight'>{` SpinnerApp `}</span>will
                    not be visible if the component loads faster than the
                    specified<span className='text-highlight'>{` delay `}</span>
                    prop.
                </p>
                <p>
                    When
                    <span className='text-highlight'>{` global `}</span>prop is
                    used the spinner will be rendered with
                    <span className='text-highlight'>{` React.createPortal() `}</span>
                    to the element with id
                    <span className='text-highlight'>{` desktop `}</span>, if
                    not specified the spinner will be visible inside the current
                    component.
                </p>
                {/* 
                // Folder scrolling
                //     - example how folder scrolling works
                //     - example how to add scrolling tracking to a component

                Folder pagination
                    - example how to add pages
                    - example how to switch pages  

                Folder permisions
                    - requireLogin: true,
                    - requireAdmin: true,
                    
                // Spinner 
                //     - example how to use local and global spinner

                // Routing
                //     - explain how routing works
                //     - also explain requireAuth routes               
                */}
            </Container>
        </FolderApp>
    );
};

export { addWordBreak };
export default DocsApp;
