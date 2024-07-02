document.addEventListener('DOMContentLoaded', function() {
    // Etapa 1: Quiz de Reciclagem
    const questions = [
        {
            question: "Qual é o primeiro passo na reciclagem de papel?",
            answers: [
                { text: "Coleta", correct: true },
                { text: "Lavar", correct: false },
                { text: "Secar", correct: false },
                { text: "Pintar", correct: false }
            ]
        },
        {
            question: "Qual material não pode ser reciclado com o papel?",
            answers: [
                { text: "Jornal", correct: false },
                { text: "Revista", correct: false },
                { text: "Papel plastificado", correct: true },
                { text: "Folha de caderno", correct: false }
            ]
        },
        {
            question: "Qual é a cor do contêiner de reciclagem de papel?",
            answers: [
                { text: "Verde", correct: false },
                { text: "Azul", correct: true },
                { text: "Vermelho", correct: false },
                { text: "Amarelo", correct: false }
            ]
        },
        {
            question: "Quantas vezes o papel pode ser reciclado?",
            answers: [
                { text: "1 vez", correct: false },
                { text: "2 vezes", correct: false },
                { text: "5 a 7 vezes", correct: true },
                { text: "Infinitamente", correct: false }
            ]
        },
        {
            question: "Qual é o principal benefício da reciclagem de papel?",
            answers: [
                { text: "Economia de água", correct: true },
                { text: "Produção de energia", correct: false },
                { text: "Aumento do lixo", correct: false },
                { text: "Diminuição da poluição sonora", correct: false }
            ]
        }
    ];

    const questionContainer = document.getElementById('questionContainer');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answerButtons');
    const nextButton = document.getElementById('nextButton');
    let shuffledQuestions, currentQuestionIndex;

    startQuiz();

    function startQuiz() {
        shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        questionContainer.hidden = false;
        nextButton.hidden = true;
        setNextQuestion();
    }

    function setNextQuestion() {
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    }

    function resetState() {
        nextButton.hidden = true;
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct;
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct);
        });
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.hidden = false;
        } else {
            nextButton.innerText = 'Finalizar';
            nextButton.hidden = false;
        }
    }

    function setStatusClass(element, correct) {
        clearStatusClass(element);
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('wrong');
        }
    }

    function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            setNextQuestion();
        } else {
            document.getElementById('gameStage1').hidden = true;
            document.getElementById('gameStage2').hidden = false;
            startMemoryGame();
        }
    });

    // Etapa 2: Jogo da Memória
    const memoryGame = document.getElementById('memoryGame');
    const memoryNextButton = document.getElementById('memoryNextButton');
    const memoryCards = [
        { name: 'papel', img: 'assets/paper.png' },
        { name: 'plastico', img: 'assets/plastic.png' },
        { name: 'vidro', img: 'assets/glass.png' },
        { name: 'metal', img: 'assets/metal.png' },
        { name: 'organico', img: 'assets/organic.png' },
        { name: 'papel', img: 'assets/paper.png' },
        { name: 'plastico', img: 'assets/plastic.png' },
        { name: 'vidro', img: 'assets/glass.png' },
        { name: 'metal', img: 'assets/metal.png' },
        { name: 'organico', img: 'assets/organic.png' }
    ];
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function startMemoryGame() {
        memoryGame.innerHTML = '';
        memoryNextButton.hidden = true;
        memoryCards.sort(() => 0.5 - Math.random());
        memoryCards.forEach(card => {
            const memoryCard = document.createElement('div');
            memoryCard.classList.add('memory-card');
            memoryCard.dataset.name = card.name;
            memoryCard.innerHTML = `
                <img class="front-face" src="${card.img}" alt="${card.name}">
                <img class="back-face" src="assets/back.png" alt="back">
            `;
            memoryCard.addEventListener('click', flipCard);
            memoryGame.appendChild(memoryCard);
        });
    }

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.name === secondCard.dataset.name;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
        checkForCompletion();document.addEventListener('DOMContentLoaded', function() {
            // Etapa 1: Quiz de Reciclagem
            const questions = [
                {
                    question: "Qual é o primeiro passo na reciclagem de papel?",
                    answers: [
                        { text: "Coleta", correct: true },
                        { text: "Lavar", correct: false },
                        { text: "Secar", correct: false },
                        { text: "Pintar", correct: false }
                    ]
                },
                {
                    question: "Qual material não pode ser reciclado com o papel?",
                    answers: [
                        { text: "Jornal", correct: false },
                        { text: "Revista", correct: false },
                        { text: "Papel plastificado", correct: true },
                        { text: "Folha de caderno", correct: false }
                    ]
                },
                {
                    question: "Qual é a cor do contêiner de reciclagem de papel?",
                    answers: [
                        { text: "Verde", correct: false },
                        { text: "Azul", correct: true },
                        { text: "Vermelho", correct: false },
                        { text: "Amarelo", correct: false }
                    ]
                },
                {
                    question: "Quantas vezes o papel pode ser reciclado?",
                    answers: [
                        { text: "1 vez", correct: false },
                        { text: "2 vezes", correct: false },
                        { text: "5 a 7 vezes", correct: true },
                        { text: "Infinitamente", correct: false }
                    ]
                },
                {
                    question: "Qual é o principal benefício da reciclagem de papel?",
                    answers: [
                        { text: "Economia de água", correct: true },
                        { text: "Produção de energia", correct: false },
                        { text: "Aumento do lixo", correct: false },
                        { text: "Diminuição da poluição sonora", correct: false }
                    ]
                }
            ];
        
            const questionContainer = document.getElementById('questionContainer');
            const questionElement = document.getElementById('question');
            const answerButtonsElement = document.getElementById('answerButtons');
            const nextButton = document.getElementById('nextButton');
            let shuffledQuestions, currentQuestionIndex;
        
            startQuiz();
        
            function startQuiz() {
                shuffledQuestions = questions.sort(() => Math.random() - 0.5);
                currentQuestionIndex = 0;
                questionContainer.hidden = false;
                nextButton.hidden = true;
                setNextQuestion();
            }
        
            function setNextQuestion() {
                resetState();
                showQuestion(shuffledQuestions[currentQuestionIndex]);
            }
        
            function showQuestion(question) {
                questionElement.innerText = question.question;
                question.answers.forEach(answer => {
                    const button = document.createElement('button');
                    button.innerText = answer.text;
                    button.classList.add('btn');
                    if (answer.correct) {
                        button.dataset.correct = answer.correct;
                    }
                    button.addEventListener('click', selectAnswer);
                    answerButtonsElement.appendChild(button);
                });
            }
        
            function resetState() {
                nextButton.hidden = true;
                while (answerButtonsElement.firstChild) {
                    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
                }
            }
        
            function selectAnswer(e) {
                const selectedButton = e.target;
                const correct = selectedButton.dataset.correct;
                Array.from(answerButtonsElement.children).forEach(button => {
                    setStatusClass(button, button.dataset.correct);
                });
                if (shuffledQuestions.length > currentQuestionIndex + 1) {
                    nextButton.hidden = false;
                } else {
                    nextButton.innerText = 'Finalizar';
                    nextButton.hidden = false;
                }
            }
        
            function setStatusClass(element, correct) {
                clearStatusClass(element);
                if (correct) {
                    element.classList.add('correct');
                } else {
                    element.classList.add('wrong');
                }
            }
        
            function clearStatusClass(element) {
                element.classList.remove('correct');
                element.classList.remove('wrong');
            }
        
            nextButton.addEventListener('click', () => {
                currentQuestionIndex++;
                if (currentQuestionIndex < shuffledQuestions.length) {
                    setNextQuestion();
                } else {
                    document.getElementById('gameStage1').hidden = true;
                    document.getElementById('gameStage2').hidden = false;
                    startMemoryGame();
                }
            });
        
            // Etapa 2: Jogo da Memória
            const memoryGame = document.getElementById('memoryGame');
            const memoryNextButton = document.getElementById('memoryNextButton');
            const memoryCards = [
                { name: 'papel', img: 'assets/paper.png' },
                { name: 'plastico', img: 'assets/plastic.png' },
                { name: 'vidro', img: 'assets/glass.png' },
                { name: 'metal', img: 'assets/metal.png' },
                { name: 'organico', img: 'assets/organic.png' },
                { name: 'papel', img: 'assets/paper.png' },
                { name: 'plastico', img: 'assets/plastic.png' },
                { name: 'vidro', img: 'assets/glass.png' },
                { name: 'metal', img: 'assets/metal.png' },
                { name: 'organico', img: 'assets/organic.png' }
            ];
            let hasFlippedCard = false;
            let lockBoard = false;
            let firstCard, secondCard;
        
            function startMemoryGame() {
                memoryGame.innerHTML = '';
                memoryNextButton.hidden = true;
                memoryCards.sort(() => 0.5 - Math.random());
                memoryCards.forEach(card => {
                    const memoryCard = document.createElement('div');
                    memoryCard.classList.add('memory-card');
                    memoryCard.dataset.name = card.name;
                    memoryCard.innerHTML = `
                        <img class="front-face" src="${card.img}" alt="${card.name}">
                        <img class="back-face" src="assets/back.png" alt="back">
                    `;
                    memoryCard.addEventListener('click', flipCard);
                    memoryGame.appendChild(memoryCard);
                });
            }
        
            function flipCard() {
                if (lockBoard) return;
                if (this === firstCard) return;
        
                this.classList.add('flip');
        
                if (!hasFlippedCard) {
                    hasFlippedCard = true;
                    firstCard = this;
                    return;
                }
        
                secondCard = this;
                checkForMatch();
            }
        
            function checkForMatch() {
                let isMatch = firstCard.dataset.name === secondCard.dataset.name;
                isMatch ? disableCards() : unflipCards();
            }
        
            function disableCards() {
                firstCard.removeEventListener('click', flipCard);
                secondCard.removeEventListener('click', flipCard);
                resetBoard();
                checkForCompletion();
            }
        
            function unflipCards() {
                lockBoard = true;
                setTimeout(() => {
                    firstCard.classList.remove('flip');
                    secondCard.classList.remove('flip');
                    resetBoard();
                }, 1500);
            }
        
            function resetBoard() {
                [hasFlippedCard, lockBoard] = [false, false];
                [firstCard, secondCard] = [null, null];
            }
        
            function checkForCompletion() {
                if (Array.from(memoryGame.children).every(card => card.classList.contains('flip'))) {
                    memoryNextButton.hidden = false;
                }
            }
        
            memoryNextButton.addEventListener('click', () => {
                document.getElementById('gameStage2').hidden = true;
                document.getElementById('gameStage3').hidden = false;
                startDragDropGame();
            });
        
            // Etapa 3: Classificação de Recicláveis
            const bins = document.querySelectorAll('.bin');
            const items = [
                { name: 'papel', img: 'assets/paper.png' },
                { name: 'plastico', img: 'assets/plastic.png' },
                { name: 'vidro', img: 'assets/glass.png' },
                { name: 'metal', img: 'assets/metal.png' },
            ];
            document.addEventListener('DOMContentLoaded', function() {
                // Etapa 1: Quiz de Reciclagem
                const questions = [
                    {
                        question: "Qual é o primeiro passo na reciclagem de papel?",
                        answers: [
                            { text: "Coleta", correct: true },
                            { text: "Lavar", correct: false },
                            { text: "Secar", correct: false },
                            { text: "Pintar", correct: false }
                        ]
                    },
                    {
                        question: "Qual material não pode ser reciclado com o papel?",
                        answers: [
                            { text: "Jornal", correct: false },
                            { text: "Revista", correct: false },
                            { text: "Papel plastificado", correct: true },
                            { text: "Folha de caderno", correct: false }
                        ]
                    },
                    {
                        question: "Qual é a cor do contêiner de reciclagem de papel?",
                        answers: [
                            { text: "Verde", correct: false },
                            { text: "Azul", correct: true },
                            { text: "Vermelho", correct: false },
                            { text: "Amarelo", correct: false }
                        ]
                    },
                    {
                        question: "Quantas vezes o papel pode ser reciclado?",
                        answers: [
                            { text: "1 vez", correct: false },
                            { text: "2 vezes", correct: false },
                            { text: "5 a 7 vezes", correct: true },
                            { text: "Infinitamente", correct: false }
                        ]
                    },
                    {
                        question: "Qual é o principal benefício da reciclagem de papel?",
                        answers: [
                            { text: "Economia de água", correct: true },
                            { text: "Produção de energia", correct: false },
                            { text: "Aumento do lixo", correct: false },
                            { text: "Diminuição da poluição sonora", correct: false }
                        ]
                    }
                ];
            
                const questionContainer = document.getElementById('questionContainer');
                const questionElement = document.getElementById('question');
                const answerButtonsElement = document.getElementById('answerButtons');
                const nextButton = document.getElementById('nextButton');
                let shuffledQuestions, currentQuestionIndex;
            
                startQuiz();
            
                function startQuiz() {
                    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
                    currentQuestionIndex = 0;
                    questionContainer.hidden = false;
                    nextButton.hidden = true;
                    setNextQuestion();
                }
            
                function setNextQuestion() {
                    resetState();
                    showQuestion(shuffledQuestions[currentQuestionIndex]);
                }
            
                function showQuestion(question) {
                    questionElement.innerText = question.question;
                    question.answers.forEach(answer => {
                        const button = document.createElement('button');
                        button.innerText = answer.text;
                        button.classList.add('btn');
                        if (answer.correct) {
                            button.dataset.correct = answer.correct;
                        }
                        button.addEventListener('click', selectAnswer);
                        answerButtonsElement.appendChild(button);
                    });
                }
            
                function resetState() {
                    nextButton.hidden = true;
                    while (answerButtonsElement.firstChild) {
                        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
                    }
                }
            
                function selectAnswer(e) {
                    const selectedButton = e.target;
                    const correct = selectedButton.dataset.correct;
                    Array.from(answerButtonsElement.children).forEach(button => {
                        setStatusClass(button, button.dataset.correct);
                    });
                    if (shuffledQuestions.length > currentQuestionIndex + 1) {
                        nextButton.hidden = false;
                    } else {
                        nextButton.innerText = 'Finalizar';
                        nextButton.hidden = false;
                    }
                }
            
                function setStatusClass(element, correct) {
                    clearStatusClass(element);
                    if (correct) {
                        element.classList.add('correct');
                    } else {
                        element.classList.add('wrong');
                    }
                }
            
                function clearStatusClass(element) {
                    element.classList.remove('correct');
                    element.classList.remove('wrong');
                }
            
                nextButton.addEventListener('click', () => {
                    currentQuestionIndex++;
                    if (currentQuestionIndex < shuffledQuestions.length) {
                        setNextQuestion();
                    } else {
                        document.getElementById('gameStage1').hidden = true;
                        document.getElementById('gameStage2').hidden = false;
                        startMemoryGame();
                    }
                });
            
                // Etapa 2: Jogo da Memória
                const memoryGame = document.getElementById('memoryGame');
                const memoryNextButton = document.getElementById('memoryNextButton');
                const memoryCards = [
                    { name: 'papel', img: 'assets/paper.png' },
                    { name: 'plastico', img: 'assets/plastic.png' },
                    { name: 'vidro', img: 'assets/glass.png' },
                    { name: 'metal', img: 'assets/metal.png' },
                    { name: 'organico', img: 'assets/organic.png' },
                    { name: 'papel', img: 'assets/paper.png' },
                    { name: 'plastico', img: 'assets/plastic.png' },
                    { name: 'vidro', img: 'assets/glass.png' },
                    { name: 'metal', img: 'assets/metal.png' },
                    { name: 'organico', img: 'assets/organic.png' }
                ];
                let hasFlippedCard = false;
                let lockBoard = false;
                let firstCard, secondCard;
            
                function startMemoryGame() {
                    memoryGame.innerHTML = '';
                    memoryNextButton.hidden = true;
                    memoryCards.sort(() => 0.5 - Math.random());
                    memoryCards.forEach(card => {
                        const memoryCard = document.createElement('div');
                        memoryCard.classList.add('memory-card');
                        memoryCard.dataset.name = card.name;
                        memoryCard.innerHTML = `
                            <img class="front-face" src="${card.img}" alt="${card.name}">
                            <img class="back-face" src="assets/back.png" alt="back">
                        `;
                        memoryCard.addEventListener('click', flipCard);
                        memoryGame.appendChild(memoryCard);
                    });
                }
            
                function flipCard() {
                    if (lockBoard) return;
                    if (this === firstCard) return;
            
                    this.classList.add('flip');
            
                    if (!hasFlippedCard) {
                        hasFlippedCard = true;
                        firstCard = this;
                        return;
                    }
            
                    secondCard = this;
                    checkForMatch();
                }
            
                function checkForMatch() {
                    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
                    isMatch ? disableCards() : unflipCards();
                }
            
                function disableCards() {
                    firstCard.removeEventListener('click', flipCard);
                    secondCard.removeEventListener('click', flipCard);
                    resetBoard();
                    checkForCompletion();
                }
            
                function unflipCards() {
                    lockBoard = true;
                    setTimeout(() => {
                        firstCard.classList.remove('flip');
                        secondCard.classList.remove('flip');
                        resetBoard();
                    }, 1500);
                }
            
                function resetBoard() {document.addEventListener('DOMContentLoaded', function() {
                    // Etapa 1: Quiz de Reciclagem
                    const questions = [
                        {
                            question: "Qual é o primeiro passo na reciclagem de papel?",
                            answers: [
                                { text: "Coleta", correct: true },
                                { text: "Lavar", correct: false },
                                { text: "Secar", correct: false },
                                { text: "Pintar", correct: false }
                            ]
                        },
                        {
                            question: "Qual material não pode ser reciclado com o papel?",
                            answers: [
                                { text: "Jornal", correct: false },
                                { text: "Revista", correct: false },
                                { text: "Papel plastificado", correct: true },
                                { text: "Folha de caderno", correct: false }
                            ]
                        },
                        {
                            question: "Qual é a cor do contêiner de reciclagem de papel?",
                            answers: [
                                { text: "Verde", correct: false },
                                { text: "Azul", correct: true },
                                { text: "Vermelho", correct: false },
                                { text: "Amarelo", correct: false }
                            ]
                        },
                        {
                            question: "Quantas vezes o papel pode ser reciclado?",
                            answers: [
                                { text: "1 vez", correct: false },
                                { text: "2 vezes", correct: false },
                                { text: "5 a 7 vezes", correct: true },
                                { text: "Infinitamente", correct: false }
                            ]
                        },
                        {
                            question: "Qual é o principal benefício da reciclagem de papel?",
                            answers: [
                                { text: "Economia de água", correct: true },
                                { text: "Produção de energia", correct: false },
                                { text: "Aumento do lixo", correct: false },
                                { text: "Diminuição da poluição sonora", correct: false }
                            ]
                        }
                    ];
                
                    const questionContainer = document.getElementById('questionContainer');
                    const questionElement = document.getElementById('question');
                    const answerButtonsElement = document.getElementById('answerButtons');
                    const nextButton = document.getElementById('nextButton');
                    let shuffledQuestions, currentQuestionIndex;
                
                    startQuiz();
                
                    function startQuiz() {
                        shuffledQuestions = questions.sort(() => Math.random() - 0.5);
                        currentQuestionIndex = 0;
                        questionContainer.hidden = false;
                        nextButton.hidden = true;
                        setNextQuestion();
                    }
                
                    function setNextQuestion() {
                        resetState();
                        showQuestion(shuffledQuestions[currentQuestionIndex]);
                    }
                
                    function showQuestion(question) {
                        questionElement.innerText = question.question;
                        question.answers.forEach(answer => {
                            const button = document.createElement('button');
                            button.innerText = answer.text;
                            button.classList.add('btn');
                            if (answer.correct) {
                                button.dataset.correct = answer.correct;
                            }
                            button.addEventListener('click', selectAnswer);
                            answerButtonsElement.appendChild(button);
                        });
                    }
                
                    function resetState() {
                        nextButton.hidden = true;
                        while (answerButtonsElement.firstChild) {
                            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
                        }
                    }
                
                    function selectAnswer(e) {
                        const selectedButton = e.target;
                        const correct = selectedButton.dataset.correct;
                        Array.from(answerButtonsElement.children).forEach(button => {
                            setStatusClass(button, button.dataset.correct);
                        });
                        if (shuffledQuestions.length > currentQuestionIndex + 1) {
                            nextButton.hidden = false;
                        } else {
                            nextButton.innerText = 'Finalizar';
                            nextButton.hidden = false;
                        }
                    }
                
                    function setStatusClass(element, correct) {
                        clearStatusClass(element);
                        if (correct) {
                            element.classList.add('correct');
                        } else {
                            element.classList.add('wrong');
                        }
                    }
                
                    function clearStatusClass(element) {
                        element.classList.remove('correct');
                        element.classList.remove('wrong');
                    }
                
                    nextButton.addEventListener('click', () => {
                        currentQuestionIndex++;
                        if (currentQuestionIndex < shuffledQuestions.length) {
                            setNextQuestion();
                        } else {
                            document.getElementById('gameStage1').hidden = true;
                            document.getElementById('gameStage2').hidden = false;
                            startMemoryGame();
                        }
                    });
                
                    // Etapa 2: Jogo da Memória
                    const memoryGame = document.getElementById('memoryGame');
                    const memoryNextButton = document.getElementById('memoryNextButton');
                    const memoryCards = [
                        { name: 'papel', img: 'assets/paper.png' },
                        { name: 'plastico', img: 'assets/plastic.png' },
                        { name: 'vidro', img: 'assets/glass.png' },
                        { name: 'metal', img: 'assets/metal.png' },
                        { name: 'organico', img: 'assets/organic.png' },
                        { name: 'papel', img: 'assets/paper.png' },
                        { name: 'plastico', img: 'assets/plastic.png' },
                        { name: 'vidro', img: 'assets/glass.png' },
                        { name: 'metal', img: 'assets/metal.png' },
                        { name: 'organico', img: 'assets/organic.png' }
                    ];
                    let hasFlippedCard = false;
                    let lockBoard = false;
                    let firstCard, secondCard;
                
                    function startMemoryGame() {
                        memoryGame.innerHTML = '';
                        memoryNextButton.hidden = true;
                        memoryCards.sort(() => 0.5 - Math.random());
                        memoryCards.forEach(card => {
                            const memoryCard = document.createElement('div');
                            memoryCard.classList.add('memory-card');
                            memoryCard.dataset.name = card.name;
                            memoryCard.innerHTML = `
                                <img class="front-face" src="${card.img}" alt="${card.name}">
                                <img class="back-face" src="assets/back.png" alt="back">
                            `;
                            memoryCard.addEventListener('click', flipCard);
                            memoryGame.appendChild(memoryCard);
                        });
                    }
                
                    function flipCard() {
                        if (lockBoard) return;
                        if (this === firstCard) return;
                
                        this.classList.add('flip');
                
                        if (!hasFlippedCard) {
                            hasFlippedCard = true;
                            firstCard = this;
                            return;
                        }
                
                        secondCard = this;
                        checkForMatch();
                    }
                
                    function checkForMatch() {
                        let isMatch = firstCard.dataset.name === secondCard.dataset.name;
                        isMatch ? disableCards() : unflipCards();
                    }
                
                    function disableCards() {
                        firstCard.removeEventListener('click', flipCard);
                        secondCard.removeEventListener('click', flipCard);
                        resetBoard();
                        checkForCompletion();
                    }
                
                    function unflipCards() {
                        lockBoard = true;
                        setTimeout(() => {
                            firstCard.classList.remove('flip');
                            secondCard.classList.remove('flip');
                            resetBoard();
                        }, 1500);
                    }
                
                    function resetBoard() {
                        [hasFlippedCard, lockBoard] = [false, false];
                        [firstCard, secondCard] = [null, null];
                    }
                
                    function checkForCompletion() {
                        if (Array.from(memoryGame.children).every(card => card.classList.contains('flip'))) {
                            memoryNextButton.hidden = false;
                        }
                    }
                
                    memoryNextButton.addEventListener('click', () => {
                        document.getElementById('gameStage2').hidden = true;
                        document.getElementById('gameStage3').hidden = false;
                        startDragDropGame();
                    });
                
                    // Etapa 3: Classificação de Recicláveis
                    const bins = document.querySelectorAll('.bin');
                    const items = [
                        { name: 'papel', img: 'assets/paper.png' },
                        { name: 'plastico', img: 'assets/plastic.png' },
                        { name: 'vidro', img: 'assets/glass.png' },
                        { name: 'metal', img: 'assets/metal.png' },
                    ];
                
                    function startDragDropGame() {
                        const itemsContainer = document.querySelector('.items');
                        itemsContainer.innerHTML = '';
                        items.forEach(item => {
                            const div = document.createElement('div');
                            div.classList.add('item');
                            div.draggable = true;
                            div.dataset.name = item.name;
                            div.innerHTML = <img src="${item.img}" alt="${item.name}">;
                            div.addEventListener('dragstart', dragStart);
                            itemsContainer.appendChild(div);
                        });
                
                        bins.forEach(bin => {
                            bin.addEventListener('dragover', dragOver);
                            bin.addEventListener('drop', drop);
                        });
                    }
                
                    function dragStart(e) {
                        e.dataTransfer.setData('text/plain', e.target.dataset.name);
                    }
                
                    function dragOver(e) {
                        e.preventDefault();
                    }
                
                    function drop(e) {
                        const itemName = e.dataTransfer.getData('text/plain');
                        const binType = e.target.id.split('-')[1];
                        if (itemName === binType) {
                            e.target.appendChild(document.querySelector([data-name="${itemName}"]));
                            checkForCompletionDragDrop();
                        }
                    }
                
                    function checkForCompletion
                    [hasFlippedCard, lockBoard] = [false, false];
                    [firstCard, secondCard] = [null, null];
                }
            
                function checkForCompletion() {
                    if (Array.from(memoryGame.children).every(card => card.classList.contains('flip'))) {
                        memoryNextButton.hidden = false;
                    }
                }
            
                memoryNextButton.addEventListener('click', () => {
                    document.getElementById('gameStage2').hidden = true;
                    document.getElementById('gameStage3').hidden = false;
                    startDragDropGame();
                });
            
                // Etapa 3: Classificação de Recicláveis
                const bins = document.querySelectorAll('.bin');
                const items = [
                    { name: 'papel', img: 'assets/paper.png' },
                    { name: 'plastico', img: 'assets/plastic.png' },
                    { name: 'vidro', img: 'assets/glass.png' },
                    { name: 'metal', img: 'assets/metal.png' },
                ];
            
                function startDragDropGame() {
                    const itemsContainer = document.querySelector('.items');
                    itemsContainer.innerHTML = '';
                    items.forEach(item => {
                        const div = document.createElement('div');
                        div.classList.add('item');
                        div.draggable = true;
                        div.dataset.name = item.name;
                        div.innerHTML = <img src="${item.img}" alt="${item.name}">;
                        div.addEventListener('dragstart', dragStart);
                        itemsContainer.appendChild(div);
                    });
            
                    bins.forEach(bin => {
                        bin.addEventListener('dragover', dragOver);document.addEventListener('DOMContentLoaded', function() {
                            // Etapa 1: Quiz de Reciclagem
                            const questions = [
                                {
                                    question: "Qual é o primeiro passo na reciclagem de papel?",
                                    answers: [
                                        { text: "Coleta", correct: true },
                                        { text: "Lavar", correct: false },
                                        { text: "Secar", correct: false },
                                        { text: "Pintar", correct: false }
                                    ]
                                },
                                {
                                    question: "Qual material não pode ser reciclado com o papel?",
                                    answers: [
                                        { text: "Jornal", correct: false },
                                        { text: "Revista", correct: false },
                                        { text: "Papel plastificado", correct: true },
                                        { text: "Folha de caderno", correct: false }
                                    ]
                                },
                                {
                                    question: "Qual é a cor do contêiner de reciclagem de papel?",
                                    answers: [
                                        { text: "Verde", correct: false },
                                        { text: "Azul", correct: true },
                                        { text: "Vermelho", correct: false },
                                        { text: "Amarelo", correct: false }
                                    ]
                                },
                                {
                                    question: "Quantas vezes o papel pode ser reciclado?",
                                    answers: [
                                        { text: "1 vez", correct: false },
                                        { text: "2 vezes", correct: false },
                                        { text: "5 a 7 vezes", correct: true },
                                        { text: "Infinitamente", correct: false }
                                    ]
                                },
                                {
                                    question: "Qual é o principal benefício da reciclagem de papel?",
                                    answers: [
                                        { text: "Economia de água", correct: true },
                                        { text: "Produção de energia", correct: false },
                                        { text: "Aumento do lixo", correct: false },
                                        { text: "Diminuição da poluição sonora", correct: false }
                                    ]
                                }
                            ];
                        
                            const questionContainer = document.getElementById('questionContainer');
                            const questionElement = document.getElementById('question');
                            const answerButtonsElement = document.getElementById('answerButtons');
                            const nextButton = document.getElementById('nextButton');
                            let shuffledQuestions, currentQuestionIndex;
                        
                            startQuiz();
                        
                            function startQuiz() {
                                shuffledQuestions = questions.sort(() => Math.random() - 0.5);
                                currentQuestionIndex = 0;
                                questionContainer.hidden = false;
                                nextButton.hidden = true;
                                setNextQuestion();
                            }
                        
                            function setNextQuestion() {
                                resetState();
                                showQuestion(shuffledQuestions[currentQuestionIndex]);
                            }
                        
                            function showQuestion(question) {
                                questionElement.innerText = question.question;
                                question.answers.forEach(answer => {
                                    const button = document.createElement('button');
                                    button.innerText = answer.text;
                                    button.classList.add('btn');
                                    if (answer.correct) {
                                        button.dataset.correct = answer.correct;
                                    }
                                    button.addEventListener('click', selectAnswer);
                                    answerButtonsElement.appendChild(button);
                                });
                            }
                        
                            function resetState() {
                                nextButton.hidden = true;
                                while (answerButtonsElement.firstChild) {
                                    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
                                }
                            }
                        
                            function selectAnswer(e) {
                                const selectedButton = e.target;
                                const correct = selectedButton.dataset.correct;
                                Array.from(answerButtonsElement.children).forEach(button => {
                                    setStatusClass(button, button.dataset.correct);
                                });
                                if (shuffledQuestions.length > currentQuestionIndex + 1) {
                                    nextButton.hidden = false;
                                } else {
                                    nextButton.innerText = 'Finalizar';
                                    nextButton.hidden = false;
                                }
                            }
                        
                            function setStatusClass(element, correct) {
                                clearStatusClass(element);
                                if (correct) {
                                    element.classList.add('correct');
                                } else {
                                    element.classList.add('wrong');
                                }
                            }
                        
                            function clearStatusClass(element) {
                                element.classList.remove('correct');
                                element.classList.remove('wrong');
                            }
                        
                            nextButton.addEventListener('click', () => {
                                currentQuestionIndex++;
                                if (currentQuestionIndex < shuffledQuestions.length) {
                                    setNextQuestion();
                                } else {
                                    document.getElementById('gameStage1').hidden = true;
                                    document.getElementById('gameStage2').hidden = false;
                                    startMemoryGame();
                                }
                            });
                        
                            // Etapa 2: Jogo da Memória
                            const memoryGame = document.getElementById('memoryGame');
                            const memoryNextButton = document.getElementById('memoryNextButton');
                            const memoryCards = [
                                { name: 'papel', img: 'assets/paper.png' },
                                { name: 'plastico', img: 'assets/plastic.png' },
                                { name: 'vidro', img: 'assets/glass.png' },
                                { name: 'metal', img: 'assets/metal.png' },
                                { name: 'organico', img: 'assets/organic.png' },
                                { name: 'papel', img: 'assets/paper.png' },
                                { name: 'plastico', img: 'assets/plastic.png' },
                                { name: 'vidro', img: 'assets/glass.png' },
                                { name: 'metal', img: 'assets/metal.png' },
                                { name: 'organico', img: 'assets/organic.png' }
                            ];
                            let hasFlippedCard = false;
                            let lockBoard = false;
                            let firstCard, secondCard;
                        
                            function startMemoryGame() {
                                memoryGame.innerHTML = '';
                                memoryNextButton.hidden = true;
                                memoryCards.sort(() => 0.5 - Math.random());
                                memoryCards.forEach(card => {
                                    const memoryCard = document.createElement('div');
                                    memoryCard.classList.add('memory-card');
                                    memoryCard.dataset.name = card.name;
                                    memoryCard.innerHTML = `
                                        <img class="front-face" src="${card.img}" alt="${card.name}">
                                        <img class="back-face" src="assets/back.png" alt="back">
                                    `;
                                    memoryCard.addEventListener('click', flipCard);
                                    memoryGame.appendChild(memoryCard);
                                });
                            }
                        
                            function flipCard() {
                                if (lockBoard) return;
                                if (this === firstCard) return;
                        
                                this.classList.add('flip');
                        
                                if (!hasFlippedCard) {
                                    hasFlippedCard = true;
                                    firstCard = this;
                                    return;
                                }
                        
                                secondCard = this;
                                checkForMatch();
                            }
                        
                            function checkForMatch() {
                                let isMatch = firstCard.dataset.name === secondCard.dataset.name;
                                isMatch ? disableCards() : unflipCards();
                            }
                        
                            function disableCards() {
                                firstCard.removeEventListener('click', flipCard);
                                secondCard.removeEventListener('click', flipCard);
                                resetBoard();
                                checkForCompletion();
                            }
                        
                            function unflipCards() {
                                lockBoard = true;
                                setTimeout(() => {
                                    firstCard.classList.remove('flip');
                                    secondCard.classList.remove('flip');
                                    resetBoard();
                                }, 1500);
                            }
                        
                            function resetBoard() {
                                [hasFlippedCard, lockBoard] = [false, false];
                                [firstCard, secondCard] = [null, null];
                            }
                        
                            function checkForCompletion() {
                                if (Array.from(memoryGame.children).every(card => card.classList.contains('flip'))) {
                                    memoryNextButton.hidden = false;
                                }
                            }
                        
                            memoryNextButton.addEventListener('click', () => {
                                document.getElementById('gameStage2').hidden = true;
                                document.getElementById('gameStage3').hidden = false;
                                startDragDropGame();
                            });
                        
                            // Etapa 3: Classificação de Recicláveis
                            const bins = document.querySelectorAll('.bin');
                            const items = [
                                { name: 'papel', img: 'assets/paper.png' },
                                { name: 'plastico', img: 'assets/plastic.png' },
                                { name: 'vidro', img: 'assets/glass.png' },
                                { name: 'metal', img: 'assets/metal.png' },
                            ];
                        
                            function startDragDropGame() {
                                const itemsContainer = document.querySelector('.items');
                                itemsContainer.innerHTML = '';
                                items.forEach(item => {
                                    const div = document.createElement('div');
                                    div.classList.add('item');
                                    div.draggable = true;
                                    div.dataset.name = item.name;
                                    div.innerHTML = <img src="${item.img}" alt="${item.name}">;
                                    div.addEventListener('dragstart', dragStart);
                                    itemsContainer.appendChild(div);
                                });
                        
                                bins.forEach(bin => {
                                    bin.addEventListener('dragover', dragOver);
                                    bin.addEventListener('drop', drop);
                                });
                            }document.addEventListener('DOMContentLoaded', function() {
    // Etapa 1: Quiz de Reciclagem
    const questions = [
        {
            question: "Qual é o primeiro passo na reciclagem de papel?",
            answers: [
                { text: "Coleta", correct: true },
                { text: "Lavar", correct: false },
                { text: "Secar", correct: false },
                { text: "Pintar", correct: false }
            ]
        },
        {
            question: "Qual material não pode ser reciclado com o papel?",
            answers: [
                { text: "Jornal", correct: false },
                { text: "Revista", correct: false },
                { text: "Papel plastificado", correct: true },
                { text: "Folha de caderno", correct: false }
            ]
        },
        {
            question: "Qual é a cor do contêiner de reciclagem de papel?",
            answers: [
                { text: "Verde", correct: false },
                { text: "Azul", correct: true },
                { text: "Vermelho", correct: false },
                { text: "Amarelo", correct: false }
            ]
        },
        {
            question: "Quantas vezes o papel pode ser reciclado?",
            answers: [
                { text: "1 vez", correct: false },
                { text: "2 vezes", correct: false },
                { text: "5 a 7 vezes", correct: true },
                { text: "Infinitamente", correct: false }
            ]
        },
        {
            question: "Qual é o principal benefício da reciclagem de papel?",
            answers: [
                { text: "Economia de água", correct: true },
                { text: "Produção de energia", correct: false },
                { text: "Aumento do lixo", correct: false },
                { text: "Diminuição da poluição sonora", correct: false }
            ]
        }
    ];

    const questionContainer = document.getElementById('questionContainer');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answerButtons');
    const nextButton = document.getElementById('nextButton');
    let shuffledQuestions, currentQuestionIndex;

    startQuiz();

    function startQuiz() {
        shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        questionContainer.hidden = false;
        nextButton.hidden = true;
        setNextQuestion();
    }

    function setNextQuestion() {
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    }

    function resetState() {
        nextButton.hidden = true;
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct;
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct);
        });
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.hidden = false;
        } else {
            nextButton.innerText = 'Finalizar';
            nextButton.hidden = false;
        }
    }

    function setStatusClass(element, correct) {
        clearStatusClass(element);
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('wrong');
        }
    }

    function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            setNextQuestion();
        } else {
            document.getElementById('gameStage1').hidden = true;
            document.getElementById('gameStage2').hidden = false;
            startMemoryGame();
        }
    });

    // Etapa 2: Jogo da Memória
    const memoryGame = document.getElementById('memoryGame');
    const memoryNextButton = document.getElementById('memoryNextButton');
    const memoryCards = [
        { name: 'papel', img: 'assets/paper.png' },
        { name: 'plastico', img: 'assets/plastic.png' },
        { name: 'vidro', img: 'assets/glass.png' },
        { name: 'metal', img: 'assets/metal.png' },
        { name: 'organico', img: 'assets/organic.png' },
        { name: 'papel', img: 'assets/paper.png' },
        { name: 'plastico', img: 'assets/plastic.png' },
        { name: 'vidro', img: 'assets/glass.png' },
        { name: 'metal', img: 'assets/metal.png' },
        { name: 'organico', img: 'assets/organic.png' }
    ];
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function startMemoryGame() {
        memoryGame.innerHTML = '';
        memoryNextButton.hidden = true;
        memoryCards.sort(() => 0.5 - Math.random());
        memoryCards.forEach(card => {
            const memoryCard = document.createElement('div');
            memoryCard.classList.add('memory-card');
            memoryCard.dataset.name = card.name;
            memoryCard.innerHTML = `
                <img class="front-face" src="${card.img}" alt="${card.name}">
                <img class="back-face" src="assets/back.png" alt="back">
            `;
            memoryCard.addEventListener('click', flipCard);
            memoryGame.appendChild(memoryCard);
        });
    }

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.name === secondCard.dataset.name;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
        checkForCompletion();
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function checkForCompletion() {
        if (Array.from(memoryGame.children).every(card => card.classList.contains('flip'))) {
            memoryNextButton.hidden = false;
        }
    }

    memoryNextButton.addEventListener('click', () => {
        document.getElementById('gameStage2').hidden = true;
        document.getElementById('gameStage3').hidden = false;
        startDragDropGame();
    });

    // Etapa 3: Classificação de Recicláveis
    const bins = document.querySelectorAll('.bin');
    const items = [
        { name: 'papel', img: 'assets/paper.png' },
        { name: 'plastico', img: 'assets/plastic.png' },
        { name: 'vidro', img: 'assets/glass.png' },
        { name: 'metal', img: 'assets/metal.png' },
    ];

    function startDragDropGame() {
        const itemsContainer = document.querySelector('.items');
        itemsContainer.innerHTML = '';
        items.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('item');
            div.draggable = true;
            div.dataset.name = item.name;
            div.innerHTML = <img src="${item.img}" alt="${item.name}">;
            div.addEventListener('dragstart', dragStart);
            itemsContainer.appendChild(div);
        });

        bins.forEach(bin => {
            bin.addEventListener('dragover', dragOver);
            bin.addEventListener('drop', drop);
        });
    }

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.name);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        const itemName = e.dataTransfer.getData('text/plain');
        const binType = e.target.id.split('-')[1];
        if (itemName === binType) {
            e.target.appendChild(document.querySelector([data-name="${itemName}"]));
            checkForCompletionDragDrop();
        }
    }

    function checkForCompletion
                        
                            function dragStart(e) {
                                e.dataTransfer.setData('text/plain', e.target.dataset.name);
                            }
                        
                            function dragOver(e) {
                                e.preventDefault();
                            }
                        
                            function drop(e) {
                                const itemName = e.dataTransfer.getData('text/plain');
                                const binType = e.target.id.split('-')[1];
                                if (itemName === binType) {
                                    e.target.appendChild(document.querySelector([data-name="${itemName}"]));
                                    checkForCompletionDragDrop();
                                }
                            }
                        
                            function checkForCompletion
                        bin.addEventListener('drop', drop);
                    });
                }
            
                function dragStart(e) {
                    e.dataTransfer.setData('text/plain', e.target.dataset.name);
                }
            
                function dragOver(e) {
                    e.preventDefault();
                }
            
                function drop(e) {
                    const itemName = e.dataTransfer.getData('text/plain');
                    const binType = e.target.id.split('-')[1];
                    if (itemName === binType) {
                        e.target.appendChild(document.querySelector([data-name="${itemName}"]));
                        checkForCompletionDragDrop();
                    }
                }
            
                function checkForCompletion
            function startDragDropGame() {
                const itemsContainer = document.querySelector('.items');
                itemsContainer.innerHTML = '';
                items.forEach(item => {
                    const div = document.createElement('div');
                    div.classList.add('item');
                    div.draggable = true;
                    div.dataset.name = item.name;
                    div.innerHTML = <img src="${item.img}" alt="${item.name}">;
                    div.addEventListener('dragstart', dragStart);
                    itemsContainer.appendChild(div);
                });
        
                bins.forEach(bin => {
                    bin.addEventListener('dragover', dragOver);
                    bin.addEventListener('drop', drop);
                });
            }
        
            function dragStart(e) {
                e.dataTransfer.setData('text/plain', e.target.dataset.name);
            }
        
            function dragOver(e) {
                e.preventDefault();
            }
        
            function drop(e) {
                const itemName = e.dataTransfer.getData('text/plain');
                const binType = e.target.id.split('-')[1];
                if (itemName === binType) {
                    e.target.appendChild(document.querySelector([data-name="${itemName}"]));
                    checkForCompletionDragDrop();
                }
            }
        
            function checkForCompletion
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function checkForCompletion() {
        if (Array.from(memoryGame.children).every(card => card.classList.contains('flip'))) {
            memoryNextButton.hidden = false;
        }
    }

    memoryNextButton.addEventListener('click', () => {
        document.getElementById('gameStage2').hidden = true;
        document.getElementById('gameStage3').hidden = false;
        startDragDropGame();
    });

    // Etapa 3: Classificação de Recicláveis
    const bins = document.querySelectorAll('.bin');
    const items = [
        { name: 'papel', img: 'assets/paper.png' },
        { name: 'plastico', img: 'assets/plastic.png' },
        { name: 'vidro', img: 'assets/glass.png' },
        { name: 'metal', img: 'assets/metal.png' },
    ];

    function startDragDropGame() {
        const itemsContainer = document.querySelector('.items');
        itemsContainer.innerHTML = '';
        items.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('item');
            div.draggable = true;
            div.dataset.name = item.name;
            div.innerHTML = <img src="${item.img}" alt="${item.name}">;
            div.addEventListener('dragstart', dragStart);
            itemsContainer.appendChild(div);
        });

        bins.forEach(bin => {
            bin.addEventListener('dragover', dragOver);
            bin.addEventListener('drop', drop);
        });
    }

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.name);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        const itemName = e.dataTransfer.getData('text/plain');
        const binType = e.target.id.split('-')[1];
        if (itemName === binType) {
            e.target.appendChild(document.querySelector([data-name="${itemName}"]));
            checkForCompletionDragDrop();
        }
    }

    function checkForCompletion