import React, { useEffect, useState } from 'react';
import FolderApp from 'components/folder/FolderApp';
import { Container, Card, Deck, ScorePanel } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoIcon } from 'assets/images/icons';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btnStyle: {
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '3rem',
        cursor: 'default',
        backgroundColor: 'var(--primary)',
        color: '#fff',

        '&:hover': {
            backgroundColor: 'var(--primaryDark)'
        }
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '0',
        top: '0',
        bottom: '0',
        width: '2.5rem',
        transition: 'background 0.2s ease-in-out',
        borderTopRightRadius: '0 0',
        borderBottomRightRadius: '37% 100%',
        background: 'var(--secondary)'
    }
});

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
    const classes = useStyles();

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
            openCards.push(e.currentTarget.id);
            selected = [];
            selected.push(e.currentTarget.id);
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
                <ScorePanel moves={moves}>
                    <span className='stars'>
                        <FontAwesomeIcon
                            className='icon'
                            icon={['fas', 'star']}
                        />
                        <FontAwesomeIcon
                            className='icon'
                            icon={['fas', 'star']}
                        />
                        <FontAwesomeIcon
                            className='icon'
                            icon={['fas', 'star']}
                        />
                    </span>
                    <span>{moves} Moves</span>
                    <Button
                        aria-label='Restart game'
                        classes={{ root: classes.btnStyle }}
                        onClick={restartGame}
                    >
                        <div className={classes.icon}>
                            <FontAwesomeIcon icon={['fas', 'redo']} size='lg' />
                        </div>
                        Play again!
                    </Button>
                </ScorePanel>
                <Deck>{renderCards()}</Deck>
            </Container>
        </FolderApp>
    );
}

export default MemoryGame;
