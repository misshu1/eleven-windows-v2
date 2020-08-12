import styled from 'styled-components';

export const CustomCalendarStyles = styled.div`
    .react-calendar {
        padding: 1.5rem;
        width: 22rem;
        max-width: 100%;
        border-top: 1px solid var(--border);
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.12rem;
        box-sizing: border-box;
        color: var(--colorDefault);

        button {
            margin: 0;
            border: 1px solid transparent;
            outline: none;
        }
        &__navigation {
            height: 2.75rem;
            margin-bottom: 1rem;
            .react-calendar__navigation__arrow {
                font-size: 1.5rem;
            }
            .react-calendar__navigation__arrow:hover,
            .react-calendar__navigation__arrow:focus {
                font-size: 2rem;
            }

            .react-calendar__navigation__label {
                white-space: nowrap;
            }

            button {
                min-width: 2.75rem;
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
            abbr {
                text-decoration: none;
            }

            &__weekdays {
                text-align: center;
                text-transform: capitalize;
                font-weight: bold;
                font-size: 0.75rem;

                &__weekday {
                    padding: 0.5rem;
                }
            }

            &__weekNumbers {
                font-weight: bold;

                .react-calendar__tile {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.75rem;
                    padding: calc(0.75rem / 0.75) calc(0.5rem / 0.75);
                }
            }

            &__days {
                &__day {
                    color: var(--whiteBlack);
                    font-size: 1rem;
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
            padding: 0.75rem 0.5rem;
            background: none;

            &:disabled {
                background-color: var(--whiteBlack);
            }

            &:enabled {
                &:hover {
                    border: 1px solid var(--whiteBlack);
                }
                &:focus {
                    border: 1px solid var(--primary);
                }
            }

            &--hasActive {
                background: var(--primary);

                &:enabled {
                    &:hover,
                    &:focus {
                        background: var(--primary);
                    }
                }
            }

            &--active {
                background: var(--primary);
                color: #fff;

                &:enabled {
                    &:hover,
                    &:focus {
                        background: var(--primary);
                    }
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
