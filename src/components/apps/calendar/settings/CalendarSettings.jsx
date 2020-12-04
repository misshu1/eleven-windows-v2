import React from 'react';
import {
    FormControlLabel,
    makeStyles,
    Radio,
    RadioGroup,
    Switch
} from '@material-ui/core';

import { useCalendarContext } from '../CalendarContext';
import { Container } from './style';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    switchBase: {
        color: 'var(--primary)',
        '&$checked': {
            color: 'var(--primary)'
        },
        '&$checked + $track': {
            backgroundColor: 'var(--primary)'
        }
    },
    checked: {
        color: 'var(--primary)'
    },
    track: {
        color: 'var(--primary)'
    },
    thumb: {
        color: 'var(--primaryDark)'
    },
    radioRoot: {
        color: 'var(--primaryDark) !important'
    }
});
export function CalendarSettings() {
    const {
        weekStartDay,
        setWeekStartDay,
        WEEK_START_DAY,
        showWeekNumber,
        toggleShowWeekNumber
    } = useCalendarContext();
    const { t } = useTranslation();
    const classes = useStyles();

    const handleChangeStartWeek = (event) => {
        setWeekStartDay(event.target.value);
    };

    return (
        <Container>
            <h3>{t('calendar.startOfTheWeek')}</h3>
            <RadioGroup
                aria-label='week start day'
                name='weekStart'
                value={weekStartDay}
                onChange={handleChangeStartWeek}
            >
                <FormControlLabel
                    label={t(WEEK_START_DAY.monday)}
                    value={WEEK_START_DAY.monday}
                    control={
                        <Radio
                            classes={{
                                root: classes.radioRoot
                            }}
                        />
                    }
                />
                <FormControlLabel
                    label={t(WEEK_START_DAY.sunday)}
                    value={WEEK_START_DAY.sunday}
                    control={
                        <Radio
                            classes={{
                                root: classes.radioRoot
                            }}
                        />
                    }
                />
            </RadioGroup>
            <div style={{ display: 'flex' }}>
                <Switch
                    checked={showWeekNumber}
                    onChange={(e) => toggleShowWeekNumber(e.target.checked)}
                    value={showWeekNumber}
                    classes={{
                        switchBase: classes.switchBase,
                        track: classes.track,
                        thumb: classes.thumb,
                        checked: classes.checked
                    }}
                />
                <h4 style={{ margin: 'auto 0', display: 'inline-block' }}>
                    {t('calendar.showWeekNumber')}
                </h4>
            </div>
        </Container>
    );
}
