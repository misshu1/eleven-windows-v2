import styled from 'styled-components';

export const CustomCalendarStyles = styled.div`
    height: 100%;

    .react-calendar {
        padding: 0 0.5rem 0.5rem 0.5rem;
        width: 100%;
        height: 100%;
        line-height: 1.12rem;
        box-sizing: border-box;
        color: var(--colorDefault);

        &__viewContainer {
            height: calc(100% - 4.5rem);
        }
        button {
            border: 1px solid transparent;
            outline: none;
            padding: 0;
        }
        &__navigation {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 4.5rem;

            .react-calendar__navigation__label {
                width: fit-content;
                padding: 0 0.5rem;
                white-space: nowrap;
                flex-grow: unset !important;
                text-transform: capitalize;
                pointer-events: none;
            }

            button {
                width: 2.5rem;
                height: 2.5rem;
                background: none;
                color: var(--colorDefault);
                font-size: 1rem;

                &:enabled {
                    &:hover,
                    &:focus {
                        color: var(--whiteBlack);
                    }
                }
            }
        }
        &__month-view {
            height: 100%;

            & > div:first-child {
                height: 100%;

                & > div:first-child {
                    height: 100%;
                }
            }

            abbr {
                text-decoration: none;
            }

            &__weekdays {
                text-align: center;
                text-transform: capitalize;
                font-weight: bold;
                font-size: 0.75rem;
                height: 2rem;
                background-color: var(--backgroundLight);
                transition: background-color 0.2s;
                border-top-left-radius: 0.5rem;
                border-top-right-radius: 0.5rem;

                &__weekday {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            &--weekNumbers {
                & > div:first-child {
                    align-items: unset !important;
                    display: none;
                }
            }

            &__weekNumbers {
                display: grid;
                grid-template-rows: repeat(6, 1fr);
                flex-basis: unset !important;
                flex-shrink: unset !important;
                font-weight: bold;
                padding-top: 2rem;
                margin-right: 0.5rem;
                background-color: var(--backgroundLight);
                border-radius: 0.5rem;

                .react-calendar__tile {
                    span {
                        width: 1.8rem;
                        height: 1.8rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }

            &__days {
                display: grid !important;
                grid-template-columns: repeat(7, 1fr);
                grid-template-rows: repeat(6, 1fr);
                background-color: var(--border);
                height: calc(100% - 2rem);
                padding: 1px;
                gap: 1px;

                &__day {
                    display: grid;
                    grid-template-rows: calc(1.8rem + 2px) repeat(
                            auto-fill,
                            1.3rem
                        );
                    gap: 1px;
                    max-width: 100% !important;
                    color: var(--whiteBlack);
                    font-size: 1rem;
                    background-color: var(--background);

                    abbr {
                        justify-self: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 100%;
                        width: 1.8rem;
                        height: 1.8rem;
                        margin: 1px 0 2px 0;
                    }

                    &--neighboringMonth {
                        color: #969696;
                    }
                }
            }
        }

        &__year-view,
        &__decade-view,
        &__century-view {
            .react-calendar__tile {
                padding: 2rem 0.5rem;
                color: var(--colorDefault);
                font-size: 1rem;
            }
        }

        &__tile {
            max-width: 100%;
            text-align: center;

            &:disabled {
                background-color: var(--backgroundCard);
            }

            &:enabled {
                &:hover,
                &:focus {
                    border: 1px solid var(--primary);
                }
            }

            &--active {
                abbr {
                    background: var(--primary);
                    color: #fff;
                }
            }
        }

        &--selectRange {
            .react-calendar__tile {
                &--hover {
                    background-color: var(--colorDefault);
                }
            }
        }
    }
`;
