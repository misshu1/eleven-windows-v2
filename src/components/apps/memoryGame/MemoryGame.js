import React, { useEffect, useState } from 'react';
import FolderApp from 'components/folder/FolderApp';
import { Container, Card, Deck } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

let openCards = [];
let selected = [];
let timer = null;

function MemoryGame() {
    const [deckOfCards, setDeckOfCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [matchedCards, setMatchedCards] = useState(0);
    const [startTime, setStartTime] = useState(null);

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
        setStartTime(null);
        openCards = [];
        selected = [];
        clearInterval(timer);
        shuffleCards();
    }

    function movesCounter(num) {
        setMoves((prevState) => prevState + num);
        if (moves === 1) {
            timeCounter();
        }
    }

    function timeCounter() {
        setStartTime(new Date());

        timer = setInterval(() => {
            // setTime((prevState) => ({
            //     ...prevState,
            //     seconds: prevState.seconds + 1
            // }));
            // if (time.seconds === 60) {
            //     setTime((prevState) => ({
            //         minutes: prevState.minutes + 1,
            //         seconds: 0
            //     }));
            // }
        }, 1000);
    }

    // Shuffle function from http://stackoverflow.com/a/2450976
    function shuffle(array) {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;

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
        if (openCards.length < 2) {
            openCards.push(e.target.id);
            selected = [];
            selected.push(e.target.id);
            movesCounter(1);

            deckOfCards.map((cards, index) => {
                if (selected[0].includes(index)) {
                    // 'selectedCard' will return the index of the card
                    const selectedCard = selected[0].match(/\d/g).join('');
                    setDeckOfCards((prevState) =>
                        prevState.map((obj, index) =>
                            index === Number(selectedCard)
                                ? Object.assign(obj, { open: true })
                                : obj
                        )
                    );
                }

                if (openCards.length === 2) {
                    // 'firstCard' and 'secondCard' will return the card name
                    // without the index number
                    const firstCard = String(
                        openCards[0].replace(/[0-9]/g, '')
                    );
                    const secondCard = String(
                        openCards[1].replace(/[0-9]/g, '')
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
        if (openCards.length !== 0 && openCards[0].includes(firstCard)) {
            // 'selectedCard' is the index of the first matched card
            const selectedCard = openCards[0].match(/\d/g).join('');
            setDeckOfCards((prevState) =>
                prevState.map((obj, index) =>
                    index === Number(selectedCard)
                        ? Object.assign(obj, { match: true })
                        : obj
                )
            );
        }

        if (openCards.length !== 0 && openCards[1].includes(secondCard)) {
            // 'selectedCard' is the index of the second matched card
            const selectedCard = openCards[1].match(/\d/g).join('');
            setDeckOfCards((prevState) =>
                prevState.map((obj, index) =>
                    index === Number(selectedCard)
                        ? Object.assign(obj, { match: true })
                        : obj
                )
            );
        }
        setMatchedCards((prevState) => prevState + 2);
        openCards = [];
    }

    function handleNotMatch(firstCard, secondCard) {
        setTimeout(() => {
            if (openCards.length !== 0 && openCards[0].includes(firstCard)) {
                const selectedCard = openCards[0].match(/\d/g).join('');
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

            if (openCards.length !== 0 && openCards[1].includes(secondCard)) {
                const selectedCard = openCards[1].match(/\d/g).join('');
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
            openCards = [];
        }, 650);
    }

    const renderCards = () => {
        return deckOfCards.map(({ name, open, match }, index) => (
            <Card
                key={index}
                onClick={ceckCards}
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
            </Card>
        ));
    };

    return (
        <FolderApp appId={8} marginLeft={180} marginTop={120}>
            <button onClick={restartGame}>Play again!</button>
            <p>{moves}</p>
            <p>{matchedCards}</p>
            {/* <p>{time.seconds}</p> */}
            <Container>
                <Deck>{renderCards()}</Deck>
            </Container>
        </FolderApp>
    );
}

export default MemoryGame;
