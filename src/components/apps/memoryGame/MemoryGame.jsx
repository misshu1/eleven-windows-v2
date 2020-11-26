import React, { useEffect, useRef, useState } from 'react';
import FolderApp from 'components/folder/FolderApp';
import { Container, Card, Deck } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoIcon } from 'assets/images/icons';
import { ScorePanel } from './ScorePanel';
import { formatTime } from 'components/common';
import { useTimer } from 'hooks';

const cards = [
    'gem',
    'gem',
    'paper-plane',
    'paper-plane',
    'anchor',
    'anchor',
    'bolt',
    'bolt',
    'cube',
    'cube',
    'leaf',
    'leaf',
    'bicycle',
    'bicycle',
    'bomb',
    'bomb'
];

function MemoryGame() {
    const [deckOfCards, setDeckOfCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [matchedCards, setMatchedCards] = useState(0);
    const {
        timer,
        handleStartTimer,
        handlePauseTimer,
        handleResetTimer
    } = useTimer(0);
    const openCards = useRef([]);

    useEffect(() => {
        matchedCards === deckOfCards.length && handlePauseTimer();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deckOfCards, matchedCards]);

    useEffect(() => {
        shuffleCards();

        return () => {
            restartGame();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function shuffleCards() {
        const deck = cards.map((card) => ({
            name: card,
            open: false,
            match: false
        }));

        const shuffleDeck = shuffle(deck);
        setDeckOfCards([...shuffleDeck]);
    }

    function restartGame() {
        setMoves(0);
        setMatchedCards(0);
        shuffleCards();
        handleResetTimer();
        openCards.current = [];
    }

    function movesCounter(num) {
        setMoves((prevState) => prevState + num);
        if (moves === 1) {
            handleStartTimer();
        }
    }

    // Shuffle function from http://stackoverflow.com/a/2450976
    function shuffle(array) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function ceckCards(cardName, cardIndex) {
        if (openCards.current.length < 2) {
            openCards.current.push({ name: cardName, index: cardIndex });
            movesCounter(1);

            deckOfCards.map((_, index) => {
                // Open selected card
                if (cardIndex === index) {
                    setDeckOfCards((prevState) =>
                        prevState.map((obj, index) =>
                            cardIndex === index
                                ? Object.assign(obj, { open: true })
                                : obj
                        )
                    );
                }
            });

            if (openCards.current.length === 2) {
                const [firstCard, secondCard] = openCards.current;

                if (firstCard.name === secondCard.name) {
                    handleMatched(firstCard, secondCard);
                } else {
                    handleNotMatch(firstCard, secondCard);
                }
            }
        }
    }

    function handleMatched(firstCard, secondCard) {
        setDeckOfCards((prevState) =>
            prevState.map((obj, index) =>
                firstCard.index === index
                    ? Object.assign(obj, { match: true })
                    : obj
            )
        );

        setDeckOfCards((prevState) =>
            prevState.map((obj, index) =>
                secondCard.index === index
                    ? Object.assign(obj, { match: true })
                    : obj
            )
        );

        setMatchedCards((prevState) => prevState + 2);
        openCards.current = [];
    }

    function handleNotMatch(firstCard, secondCard) {
        new Promise((resolve) => {
            setTimeout(() => {
                setDeckOfCards((prevState) =>
                    prevState.map((obj, index) =>
                        firstCard.index === index
                            ? Object.assign(obj, {
                                  open: false
                              })
                            : obj
                    )
                );

                setDeckOfCards((prevState) =>
                    prevState.map((obj, index) =>
                        secondCard.index === index
                            ? Object.assign(obj, {
                                  open: false
                              })
                            : obj
                    )
                );
            }, 600);

            setTimeout(() => {
                resolve();
            }, 650);
        }).then(() => {
            openCards.current = [];
        });
    }

    const renderCards = () => {
        return deckOfCards.map(({ name, open, match }, index) => (
            <Card
                key={index}
                onClick={() => !open && !match && ceckCards(name, index)}
                open={open}
                match={match}
            >
                {open && (
                    <FontAwesomeIcon
                        icon={['fas', name]}
                        transform={{ flipX: 180 }}
                    />
                )}
                {!open && <LogoIcon width='40%' height='40%' />}
            </Card>
        ));
    };

    return (
        <FolderApp appId={8} marginLeft={180} marginTop={120}>
            <Container>
                <ScorePanel
                    moves={moves}
                    restartGame={restartGame}
                    formatTime={formatTime}
                    timer={timer}
                />
                <Deck>{renderCards()}</Deck>
            </Container>
        </FolderApp>
    );
}

export default MemoryGame;
