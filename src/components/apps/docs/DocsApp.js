import React, {
    useContext,
    useEffect,
    useState,
    useCallback,
    useRef
} from 'react';
import { Container } from './style';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IndexContext } from '../../../contexts/indexContext';
import { ThemeContext } from '../../../contexts/themeContext';
import { NotificationContext } from '../../../contexts/notificationContext';
import FolderApp from '../../folder/FolderApp';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import {
    loadingLogoExample,
    notificationExample,
    folderMenuExample
} from './CodeExamples';
import { makeStyles } from '@material-ui/core/styles';
import Emoji from '../../../components/emoji/Emoji';
import Button from '@material-ui/core/Button';
import CreateFolder from './CreateFolder';
import folderIcon from '../../../assets/images/icons/folder.svg';
import logo from '../../../assets/images/logo/logo-red.svg';

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
    }
});

const addWordBreak = str => {
    const regex = /(\/[a-zA-Z.]+)/g;
    let newStringArray = [];
    let m;

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        newStringArray = [
            ...newStringArray,
            <span key={Math.random()} className='text-highlight'>
                {m[0]}
                <wbr />
            </span>
        ];
    }
    return newStringArray;
};

const DocsApp = props => {
    const [highlightStyle, setHighlightStyle] = useState(tomorrow);
    const { index } = useContext(IndexContext);
    const { theme } = useContext(ThemeContext);
    const {
        createNotificationSuccess,
        createNotificationWarn,
        createNotificationError
    } = useContext(NotificationContext);
    const classes = useStyles();
    const changeLoadingLogoRef = useRef(null);
    const createNotificationsRef = useRef(null);
    const createFolderRef = useRef(null);
    const addMenuToFolderRef = useRef(null);

    const toolbarMenu = useCallback(() => {
        return [
            {
                name: 'Create a new folder',
                widgetIcon: folderIcon,
                fontIcon: null,
                link: null,
                scrollToRef: 'createFolderRef',
                onClick: null
            },
            {
                name: 'Change loading logo',
                widgetIcon: logo,
                fontIcon: null,
                link: null,
                scrollToRef: 'changeLoadingLogoRef',
                onClick: null
            },
            {
                name: 'Create notifications',
                widgetIcon: null,
                fontIcon: ['far', 'comment-alt'],
                link: null,
                scrollToRef: 'createNotificationsRef',
                onClick: null
            },
            {
                name: 'Add a menu to the folder',
                widgetIcon: null,
                fontIcon: null,
                link: null,
                scrollToRef: 'addMenuToFolderRef',
                onClick: null
            }
        ];
    }, []);

    useEffect(() => {
        if (theme.id === 'dark') {
            setHighlightStyle(tomorrow);
        } else if (theme.id === 'light') {
            setHighlightStyle(vs);
        }
    }, [theme.id]);

    return (
        <FolderApp
            appMinimize={'docsMinimize'}
            appOpen={'docsOpen'}
            appIndexName='docs'
            appIndexValue={index.docs}
            folderName='Docs'
            toolbarMenu={toolbarMenu()}
            ref={{
                createFolderRef,
                changeLoadingLogoRef,
                createNotificationsRef,
                addMenuToFolderRef
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
                    toolbarMenu function that returns an object like the example
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
                        className={classes.successButton}
                        onClick={() => {
                            createNotificationSuccess(
                                'Success Title',
                                'Notification success info.'
                            );
                        }}
                    >
                        show success
                    </Button>
                    <Button
                        className={classes.warnButton}
                        onClick={() => {
                            createNotificationWarn(
                                'Warn Title',
                                'Notification warn info.',
                                400
                            );
                        }}
                    >
                        show warn
                    </Button>
                    <Button
                        className={classes.errorButton}
                        onClick={() => {
                            createNotificationError(
                                'Error Title',
                                'Notification error info.',
                                503
                            );
                        }}
                    >
                        show error
                    </Button>
                </div>
                <p>
                    <Emoji symbol='📝' label='note' />
                    Note notifications alerts are disabled on mobile, but the
                    user can still see them inside the notification component.
                </p>
                <p>
                    To create a notification alert is really easy, all you have
                    to do is to import the alert type you need from
                    <span className='text-highlight'>{` NotificationContext `}</span>
                    , the function needs a title, and a message and if is an
                    error or warning you can specify a custom error code.
                </p>
                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {notificationExample}
                </SyntaxHighlighter>
            </Container>
        </FolderApp>
    );
};

export { addWordBreak };
export default DocsApp;
