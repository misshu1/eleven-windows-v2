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
    const selected = useRef([]);

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
        selected.current = [];
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

    function ceckCards(e) {
        if (openCards.current.length < 2) {
            openCards.current.push(e.currentTarget.id);
            selected.current = [];
            selected.current.push(e.currentTarget.id);
            movesCounter(1);

            deckOfCards.map((cards, index) => {
                if (selected.current[0].includes(index)) {
                    // 'selectedCard' will return the index of the card
                    const selectedCard = selected.current[0]
                        .match(/\d/g)
                        .join('');
                    setDeckOfCards((prevState) =>
                        prevState.map((obj, index) =>
                            index === Number(selectedCard)
                                ? Object.assign(obj, { open: true })
                                : obj
                        )
                    );
                }

                if (openCards.current.length === 2) {
                    // 'firstCard' and 'secondCard' will return the card name
                    // without the index number
                    const firstCard = String(
                        openCards.current[0].replace(/[0-9]/g, '')
                    );
                    const secondCard = String(
                        openCards.current[1].replace(/[0-9]/g, '')
                    );

                    if (firstCard === secondCard) {
                        handleMatched(firstCard, secondCard);
                    } else {
                        handleNotMatch(firstCard, secondCard);
                    }
                }
                return null;
            });
        }
    }

    function handleMatched(firstCard, secondCard) {
        if (
            openCards.current.length !== 0 &&
            openCards.current[0].includes(firstCard)
        ) {
            // 'selectedCard' is the index of the first matched card
            const selectedCard = openCards.current[0].match(/\d/g).join('');
            setDeckOfCards((prevState) =>
                prevState.map((obj, index) =>
                    index === Number(selectedCard)
                        ? Object.assign(obj, { match: true })
                        : obj
                )
            );
        }

        if (
            openCards.current.length !== 0 &&
            openCards.current[1].includes(secondCard)
        ) {
            // 'selectedCard' is the index of the second matched card
            const selectedCard = openCards.current[1].match(/\d/g).join('');
            setDeckOfCards((prevState) =>
                prevState.map((obj, index) =>
                    index === Number(selectedCard)
                        ? Object.assign(obj, { match: true })
                        : obj
                )
            );
        }
        setMatchedCards((prevState) => prevState + 2);
        openCards.current = [];
    }

    function handleNotMatch(firstCard, secondCard) {
        setTimeout(() => {
            if (
                openCards.current.length !== 0 &&
                openCards.current[0].includes(firstCard)
            ) {
                const selectedCard = openCards.current[0].match(/\d/g).join('');
                setDeckOfCards((prevState) =>
                    prevState.map((obj, index) =>
                        index === Number(selectedCard)
                            ? Object.assign(obj, {
                                  open: false
                              })
                            : obj
                    )
                );
            }

            if (
                openCards.current.length !== 0 &&
                openCards.current[1].includes(secondCard)
            ) {
                const selectedCard = openCards.current[1].match(/\d/g).join('');
                setDeckOfCards((prevState) =>
                    prevState.map((obj, index) =>
                        index === Number(selectedCard)
                            ? Object.assign(obj, {
                                  open: false
                              })
                            : obj
                    )
                );
            }
        }, 600);
        setTimeout(() => {
            openCards.current = [];
        }, 650);
    }

    const renderCards = () => {
        return deckOfCards.map(({ name, open, match }, index) => (
            <Card
                key={index}
                onClick={(e) => !open && !match && ceckCards(e)}
                id={name + ' ' + index}
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
