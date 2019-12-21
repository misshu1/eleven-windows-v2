import React, { useState, useEffect, useContext, forwardRef } from 'react';
import { folderExample, folderContextState } from './CodeExamples';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Emoji from '../../../components/emoji/Emoji';
import { addWordBreak } from './DocsApp';
import { ThemeContext } from '../../../contexts/themeContext';
import { vs, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const StyledTableCell = withStyles({
    root: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
        color: 'inherit'
    },
    head: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        fontWeight: 900
    }
})(TableCell);

const StyledTableRow = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
})(TableRow);

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto'
    },
    table: {
        display: 'table',
        '@media (max-width:28rem)': {
            display: 'block'
        },
        overflowX: 'auto'
    },
    name: {
        whiteSpace: 'nowrap'
    },
    description: {
        '@media (max-width:28rem)': {
            display: 'block',
            width: '20rem'
        }
    }
});

const appIdDescription = (
    <span>
        The id of the app declared in
        <span className='required'>{` src/contexts/folderContext.js `}</span>
    </span>
);
const widthDescription = <span>Width of the folder.</span>;
const heightDescription = <span>Height of the folder.</span>;
const marginTopDescription = (
    <span>
        Since the folder is position absolute margin-top is set by the
        <span className='required'>{` top `}</span>
        property in css.
    </span>
);
const marginLeftDescription = (
    <span>
        Since the folder is position absolute margin-left is set by the
        <span className='required'>{` left `}</span>
        property in css.
    </span>
);
const toolbarMenuDescription = (
    <span>Toolbar menu items, more about this, bellow.</span>
);
const refDescription = (
    <span>Passing references from the folder content to the toolbar menu.</span>
);
const createData = (propName, required, type, defaultVal, description) => {
    return { propName, required, type, defaultVal, description };
};

const folderPropsTable = [
    createData('appId', true, 'number', '-', appIdDescription),
    createData('width', false, 'string', '44rem', widthDescription),
    createData('height', false, 'string', '44rem', heightDescription),
    createData('marginTop', false, 'string', '5rem', marginTopDescription),
    createData('marginLeft', false, 'string', '5rem', marginLeftDescription),
    createData('toolbarMenu', false, 'object', '-', toolbarMenuDescription),
    createData('ref', false, 'object', '-', refDescription)
];

const CreateFolder = (props, ref) => {
    const [highlightStyle, setHighlightStyle] = useState(tomorrow);
    const { theme } = useContext(ThemeContext);
    const classes = useStyles();

    useEffect(() => {
        if (theme.id === 'dark') {
            setHighlightStyle(tomorrow);
        } else if (theme.id === 'light') {
            setHighlightStyle(vs);
        }
    }, [theme.id]);

    return (
        <React.Fragment>
            <h2 ref={ref}>Create a new folder</h2>

            <p>
                Go to {addWordBreak('/src/contexts/folderContext.js')} and add a
                new object inside
                <span className='required'>{` APPS_STATE `}</span> like the
                below example.
            </p>
            <SyntaxHighlighter language='jsx' style={highlightStyle}>
                {folderContextState}
            </SyntaxHighlighter>
            <p>
                You can create an Icon in 3 components: Desktop, Start Menu, and
                Notification window. In Start Menu you can choose between the
                left and right side of the menu.
            </p>
            <p>
                <Emoji symbol='📝' label='note' /> Note that
                <span className='text-highlight'>{` LeftMenuApp.js `}</span>
                from Start Menu and icons from
                <span className='text-highlight'>{` NotificationApp.js `}</span>
                are not visible on mobile.
            </p>
            <p>
                Now let's start creating a new directory in{' '}
                {addWordBreak('/src/components/apps')} and then create a new
                file, let's name it ExampleApp.js. In our ExampleApp add the
                following code.
            </p>
            <SyntaxHighlighter language='jsx' style={highlightStyle}>
                {folderExample}
            </SyntaxHighlighter>
            <p>
                <Emoji symbol='📝' label='note' /> Note that
                <span className='text-highlight'>{` FolderApp `}</span> has a
                lot of props, here is a list with all props, some of them are
                required.
            </p>
            <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Prop Name</StyledTableCell>
                        <StyledTableCell align='right'>Type</StyledTableCell>
                        <StyledTableCell align='right'>Default</StyledTableCell>
                        <StyledTableCell align='right'>
                            Description
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {folderPropsTable.map(item => (
                        <StyledTableRow key={item.propName}>
                            <StyledTableCell
                                component='th'
                                scope='row'
                                className={classes.name}
                            >
                                {item.propName}
                                <span className='required'>
                                    {item.required ? ' Required' : ' Optional'}
                                </span>
                            </StyledTableCell>
                            <StyledTableCell align='right'>
                                {item.type}
                            </StyledTableCell>
                            <StyledTableCell align='right'>
                                {item.defaultVal}
                            </StyledTableCell>
                            <StyledTableCell
                                align='right'
                                className={classes.description}
                            >
                                {item.description}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            <p>
                And that was it, you've created your first folder
                <Emoji symbol='🌞' label='sun' />.
            </p>
        </React.Fragment>
    );
};

export default forwardRef(CreateFolder);
