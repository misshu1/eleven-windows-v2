import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    withStyles
} from '@material-ui/core';
import React, { forwardRef } from 'react';

const StyledTableCell = withStyles({
    root: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
        color: 'inherit',
        padding: '1rem',
        whiteSpace: 'nowrap'
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
    table: {
        display: 'table',
        '@media only screen and (max-width: 450px)': {
            display: 'block'
        },
        overflowX: 'auto'
    }
});

const yourApi = <span style={{ userSelect: 'none' }}>Your own API Key</span>;
const createData = (varName, varValue) => {
    return { varName, varValue };
};

const envVariables = [
    createData('REACT_APP_FIREBASE_KEY', yourApi),
    createData('REACT_APP_FIREBASE_DOMAIN', yourApi),
    createData('REACT_APP_FIREBASE_DATABASE', yourApi),
    createData('REACT_APP_FIREBASE_PROJECT_ID', yourApi),
    createData('REACT_APP_FIREBASE_STORAGE_BUCKET', yourApi),
    createData('REACT_APP_FIREBASE_SENDER_ID', yourApi),
    createData('REACT_APP_FIREBASE_APP_ID', yourApi),
    createData('REACT_APP_MEASUREMENT_ID', yourApi),
    createData('REACT_APP_GOOGLE_CALENDAR_CLIENT_ID', yourApi),
    createData('REACT_APP_GOOGLE_CALENDAR_CLIENT_SECRET', yourApi),
    createData('REACT_APP_GOOGLE_CALENDAR_API', yourApi)
];

export const GetStarted = forwardRef((props, ref) => {
    const classes = useStyles();

    return (
        <>
            <h2 ref={ref}>Getting Started</h2>

            <p>
                First you have to update the following API KEYS in
                <span className='text-highlight'>{` .env.development `}</span>
                and
                <span className='text-highlight'>{` .env.production `}</span>
            </p>

            <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align='right'>Value</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {envVariables.map(({ varName, varValue }) => (
                        <StyledTableRow key={varName}>
                            <StyledTableCell align='left'>
                                {varName}
                            </StyledTableCell>
                            <StyledTableCell align='right'>
                                {varValue}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            <p>
                Firebase API keys can be generated from the following url
                <a
                    href='https://firebase.google.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ textDecoration: 'none' }}
                >
                    <span className='text-highlight'>{` https://firebase.google.com `}</span>
                </a>
                Google Calendar API keys can be generated from the following url
                <a
                    href='https://developers.google.com/calendar/quickstart/js'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ textDecoration: 'none' }}
                >
                    <span className='text-highlight'>{` https://developers.google.com/calendar/quickstart/js `}</span>
                </a>
                .
            </p>

            <p>
                If you don't want to use Firebase or Google Calendar API delete
                the
                <span className='text-highlight'>{` firebaseContext.js `}</span>
                or
                <span className='text-highlight'>{` gapiContext.js `}</span>
                from the contexts folder. And update the components that use
                them.
            </p>
        </>
    );
});
