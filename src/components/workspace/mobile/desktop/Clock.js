import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    color: #d6d8de;
    overflow: hidden;
    width: 100%;
    padding: 5rem 0;

    h2 {
        font-weight: 300;
        margin: 0;
        font-size: 4rem;
    }

    span {
        text-transform: uppercase;
    }
`;

const Clock = () => {
    const [clock, setClock] = useState({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
        wDay: new Date().getDay(),
    });
    const { hour, minute, month, day, wDay } = clock;
    const { t } = useTranslation();

    let currentDay = day;
    let hours = hour;
    let minutes = minute;
    let currentMonth = month + 1;

    if (hour < 10) {
        hours = '0' + hour;
    }

    if (currentDay < 10) {
        currentDay = '0' + day;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    useEffect(() => {
        const update = setInterval(() => {
            setClock((prevState) => ({
                ...prevState,
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                month: new Date().getMonth(),
                day: new Date().getDate(),
            }));
        }, 1000);

        return function () {
            clearInterval(update);
        };
    }, []);

    return (
        <Container>
            <h2>
                {`${hours}:${minutes}`} <br />
            </h2>
            <span>
                {`${t(`calendar.dayAbrev.${wDay + 1}`)}, ${t(
                    `calendar.monthAbrev.${currentMonth}`
                )} ${currentDay} `}
            </span>
        </Container>
    );
};

export default Clock;
