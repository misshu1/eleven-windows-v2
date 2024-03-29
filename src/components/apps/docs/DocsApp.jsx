import React, { useEffect, useRef, useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { tomorrow, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { v4 as uuidv4 } from 'uuid';
import { LogoIcon } from 'assets/images/icons';
import { useNotificationsContext, useSettingsContext } from 'contexts';
import { Emoji } from 'components/common';
import FolderApp from 'components/folder/FolderApp';
import {
    customScrollbarExample,
    folderMenuExample,
    folderStructureExample,
    loadingLogoExample,
    notificationExample,
    spinnerExample,
    zIndexExample,
    folderPaginationExample,
    themingExample
} from './CodeExamples';
import CreateFolder from './CreateFolder';
import { Container } from './style';
import { GetStarted } from './GetStarted';
import { PrimaryButton } from 'components/common/Buttons';

SyntaxHighlighter.registerLanguage('jsx', jsx);

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
            <span key={uuidv4()} className='text-highlight'>
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
            name: 'Get started',
            widgetIcon: null,
            fontIcon: {
                icon: ['fas', 'rocket']
            },
            link: null,
            scrollToRef: 'getStartedRef',
            onClick: null
        },
        {
            name: 'Create a new folder',
            widgetIcon: null,
            fontIcon: {
                icon: ['fas', 'folder']
            },
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
            name: 'Add folder pagination',
            widgetIcon: null,
            fontIcon: {
                icon: ['fas', 'book-open']
            },
            link: null,
            scrollToRef: 'addFolderPagination',
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
            name: 'Folder structure',
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
        },
        {
            name: 'Theming',
            widgetIcon: null,
            fontIcon: {
                icon: ['fas', 'palette']
            },
            link: null,
            scrollToRef: 'themingRef',
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
    const getStartedRef = useRef(null);
    const changeLoadingLogoRef = useRef(null);
    const createNotificationsRef = useRef(null);
    const createFolderRef = useRef(null);
    const addFolderPagination = useRef(null);
    const addMenuToFolderRef = useRef(null);
    const zIndexRef = useRef(null);
    const folderStructureRef = useRef(null);
    const scrollbarRef = useRef(null);
    const routingRef = useRef(null);
    const spinnerRef = useRef(null);
    const themingRef = useRef(null);

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
                getStartedRef,
                createFolderRef,
                changeLoadingLogoRef,
                createNotificationsRef,
                addFolderPagination,
                addMenuToFolderRef,
                zIndexRef,
                folderStructureRef,
                scrollbarRef,
                routingRef,
                spinnerRef,
                themingRef
            }}
        >
            <Container>
                <h1>Documentation</h1>
                <p>
                    This folder is an overview of Eleven Windows documentation
                    and resources. Eleven Windows was built using
                    create-react-app with React Hooks and Context API.
                </p>
                <GetStarted ref={getStartedRef} />

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

                <h2 ref={addFolderPagination}>Add folder pagination</h2>
                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {folderPaginationExample}
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
                    <PrimaryButton
                        aria-label='show info alert'
                        onClick={() => {
                            showInfo(
                                'Info Title',
                                'Notification info contante.'
                            );
                        }}
                        backgroundColor='#2979ff'
                        backgroundHoverColor='#2979ff'
                    >
                        show info
                    </PrimaryButton>

                    <PrimaryButton
                        aria-label='show success alert'
                        onClick={() => {
                            showSuccess(
                                'Success Title',
                                'Notification success info.'
                            );
                        }}
                        backgroundColor='#43a047'
                        backgroundHoverColor='#43a047'
                    >
                        show success
                    </PrimaryButton>
                    <PrimaryButton
                        aria-label='show warn allert'
                        onClick={() => {
                            showWarning(
                                'Warn Title',
                                'Notification warn info.',
                                400
                            );
                        }}
                        backgroundColor='#ffa000'
                        backgroundHoverColor='#ffa000'
                    >
                        show warn
                    </PrimaryButton>
                    <PrimaryButton
                        aria-label='show error alert'
                        onClick={() => {
                            showError(
                                'Error Title',
                                'Notification error info.',
                                503
                            );
                        }}
                        backgroundColor='#d32f2f'
                        backgroundHoverColor='#d32f2f'
                    >
                        show error
                    </PrimaryButton>
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
                <p>
                    All z-index values are declared in a single file in
                    <span className='text-highlight'>{` components/theme/zIndex.js `}</span>
                </p>
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

                {/* <p>
                    When you need to track scroll position use the
                    <span className='text-highlight'>{` requireChildrenProps `}</span>
                    prop. Like the example below.
                    </p>
                    <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {customScrollbarWithScrollTopExample}
                </SyntaxHighlighter> */}

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
                <h2 ref={themingRef}>Theming</h2>

                <p>
                    Go to
                    <span className='text-highlight'>{` src/components/theme/themes.js `}</span>
                    and add a new object to
                    <span className='text-highlight'>{` themes `}</span> array.
                </p>
                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {themingExample}
                </SyntaxHighlighter>

                <p>
                    Then add the className specified above to
                    <span className='text-highlight'>{` src/components/theme/themeColors.css `}</span>
                    with new colors. This web app theme is built with css
                    variables.
                </p>
            </Container>
        </FolderApp>
    );
};

export { addWordBreak };
export default DocsApp;
