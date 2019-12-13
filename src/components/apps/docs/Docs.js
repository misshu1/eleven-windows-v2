import React, { useContext, useEffect, useState } from 'react';
import { Container } from './style';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IndexContext } from '../../../contexts/indexContext';
import { ThemeContext } from '../../../contexts/themeContext';
import FolderApp from '../../folder/FolderApp';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import {
    folderExample,
    folderContextState,
    indexContextState
} from './CodeExamples';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
        display: 'block',
        '@media (min-width:28rem)': {
            display: 'table'
        },
        overflowX: 'auto',
        whiteSpace: 'nowrap'
    }
});

const createData = (propName, required, type, defaultVal) => {
    return { propName, required, type, defaultVal };
};

const folderPropsTable = [
    createData('folderName', true, 'string', '-'),
    createData('appMinimize', true, 'string', '-'),
    createData('appIndexName', true, 'string', '-'),
    createData('appIndexValue', true, 'number', '-'),
    createData('appOpen', true, 'string', '-'),
    createData('width', false, 'string', '44rem'),
    createData('height', false, 'string', '44rem'),
    createData('marginTop', false, 'string', '5rem'),
    createData('marginLeft', false, 'string', '5rem')
];

const DocsApp = () => {
    const [highlightStyle, setHighlightStyle] = useState(tomorrow);
    const { index } = useContext(IndexContext);
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
        <FolderApp
            appMinimize={'docsMinimize'}
            appOpen={'docsOpen'}
            appIndexName='docs'
            appIndexValue={index.docs}
            folderName='Docs'
        >
            <Container>
                <h1>Documentation</h1>
                <p>
                    This folder is an overview of Eleven Windows documentation
                    and resources. Eleven Windows was built using
                    create-react-app with React Hooks and Context API.
                </p>

                <h2>Create a new folder</h2>
                <p>
                    First of all let's start by creating a new directory in
                    <span className='text-highlight'>{` src/apps `}</span> and
                    then create a new file, let's name it ExampleApp.js. In our
                    ExampleApp add the following code.
                </p>
                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {folderExample}
                </SyntaxHighlighter>

                <p>
                    Note that
                    <span className='text-highlight'>{` FolderApp `}</span> has
                    a lot of props, here is a list with all props, some of them
                    are required.
                </p>
                <div>
                    <Table className={classes.table} aria-label='simple table'>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Prop Name</StyledTableCell>
                                <StyledTableCell align='right'>
                                    Type
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    Default
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {folderPropsTable.map(item => (
                                <StyledTableRow key={item.propName}>
                                    <StyledTableCell component='th' scope='row'>
                                        {item.propName}{' '}
                                        <span className='required'>
                                            {item.required
                                                ? 'Required'
                                                : 'Optional'}
                                        </span>
                                    </StyledTableCell>
                                    <StyledTableCell align='right'>
                                        {item.type}
                                    </StyledTableCell>
                                    <StyledTableCell align='right'>
                                        {item.defaultVal}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <p>
                    Now go to
                    <span className='text-highlight'>
                        {` src/contexts/folderContext `}
                    </span>
                    and add the following code inside the folder state.
                </p>
                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {folderContextState}
                </SyntaxHighlighter>

                <p>
                    Then go to
                    <span className='text-highlight'>
                        {` src/contexts/indexContext `}
                    </span>
                    and add the following code inside index state.
                </p>

                <SyntaxHighlighter language='jsx' style={highlightStyle}>
                    {indexContextState}
                </SyntaxHighlighter>
            </Container>
        </FolderApp>
    );
};
export default DocsApp;
