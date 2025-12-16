// Quiz Data Database
const quizData = {
    categories: [
        {
            id: 'history',
            name: 'History',
            icon: 'fas fa-landmark',
            description: 'Journey through time and explore historical events',
            questionCount: 150,
            color: '#FF6B6B'
        },
        {
            id: 'geography',
            name: 'Geography',
            icon: 'fas fa-globe-americas',
            description: 'Discover countries, capitals, and landmarks',
            questionCount: 200,
            color: '#4ECDC4'
        },
        {
            id: 'science',
            name: 'Science',
            icon: 'fas fa-flask',
            description: 'Explore physics, chemistry, and biology',
            questionCount: 180,
            color: '#45B7D1'
        },
        {
            id: 'technology',
            name: 'Technology',
            icon: 'fas fa-laptop-code',
            description: 'Computers, programming, and digital innovations',
            questionCount: 120,
            color: '#96CEB4'
        },
        {
            id: 'sports',
            name: 'Sports',
            icon: 'fas fa-futbol',
            description: 'Athletics, teams, and sporting events',
            questionCount: 100,
            color: '#FFEAA7'
        },
        {
            id: 'entertainment',
            name: 'Entertainment',
            icon: 'fas fa-film',
            description: 'Movies, music, and pop culture',
            questionCount: 160,
            color: '#DDA0DD'
        },
        {
            id: 'literature',
            name: 'Literature',
            icon: 'fas fa-book',
            description: 'Books, authors, and literary works',
            questionCount: 90,
            color: '#F8C291'
        },
        {
            id: 'general',
            name: 'General Knowledge',
            icon: 'fas fa-brain',
            description: 'Mixed bag of interesting facts',
            questionCount: 250,
            color: '#6C5CE7'
        }
    ],
    
    questions: {
        history: [
            {
                question: "Who is known as the father of plastic surgery?",
                answers: [
                    { text: "Nagarjuna", correct: false },
                    { text: "Sushruta", correct: true },
                    { text: "Ashoka", correct: false },
                    { text: "Aryabhatta", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "He was an ancient Indian physician and one of the earliest known medical researchers.",
                explanation: "Sushruta, who lived around 600 BCE, is considered the father of plastic surgery and wrote the Sushruta Samhita."
            },
            {
                question: "Who was India's first Prime Minister?",
                answers: [
                    { text: "Mahatma Gandhi", correct: false },
                    { text: "Chandra Shekhar Azad", correct: false },
                    { text: "Pt. Jawaharlal Nehru", correct: true },
                    { text: "Dr. Rajendra Prasad", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "He served as Prime Minister from 1947 until his death in 1964.",
                explanation: "Jawaharlal Nehru became India's first Prime Minister after independence in 1947."
            },
            {
                question: "Which ancient civilization built the pyramids of Giza?",
                answers: [
                    { text: "Ancient Greeks", correct: false },
                    { text: "Ancient Egyptians", correct: true },
                    { text: "Romans", correct: false },
                    { text: "Persians", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "This civilization developed along the Nile River in Northeast Africa.",
                explanation: "The ancient Egyptians built the pyramids as tombs for their pharaohs."
            },
            {
                question: "In which year did World War II end?",
                answers: [
                    { text: "1943", correct: false },
                    { text: "1945", correct: true },
                    { text: "1947", correct: false },
                    { text: "1950", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "The war ended after the surrender of Japan following atomic bombings.",
                explanation: "World War II ended in 1945 with the surrender of Germany in May and Japan in September."
            },
            {
                question: "Who discovered penicillin?",
                answers: [
                    { text: "Marie Curie", correct: false },
                    { text: "Alexander Fleming", correct: true },
                    { text: "Louis Pasteur", correct: false },
                    { text: "Robert Koch", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "He discovered it accidentally when he noticed mold inhibiting bacterial growth.",
                explanation: "Alexander Fleming discovered penicillin in 1928, revolutionizing medicine."
            }
        ],
        
        geography: [
            {
                question: "Which is the world's largest continent?",
                answers: [
                    { text: "Europe", correct: false },
                    { text: "Australia", correct: false },
                    { text: "Asia", correct: true },
                    { text: "Antarctica", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "It contains countries like China, India, and Russia.",
                explanation: "Asia is the largest continent covering about 30% of Earth's land area."
            },
            {
                question: "Which country is the world's most populous country?",
                answers: [
                    { text: "India", correct: true },
                    { text: "China", correct: false },
                    { text: "Australia", correct: false },
                    { text: "America", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "This country is located in South Asia and has over 1.4 billion people.",
                explanation: "India surpassed China as the world's most populous country in 2023."
            },
            {
                question: "What is the longest river in the world?",
                answers: [
                    { text: "Amazon River", correct: false },
                    { text: "Nile River", correct: true },
                    { text: "Yangtze River", correct: false },
                    { text: "Mississippi River", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "This river flows through northeastern Africa.",
                explanation: "The Nile River is approximately 6,650 km (4,130 miles) long."
            },
            {
                question: "Which is the smallest country in the world?",
                answers: [
                    { text: "Monaco", correct: false },
                    { text: "Vatican City", correct: true },
                    { text: "San Marino", correct: false },
                    { text: "Liechtenstein", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "It is located within Rome, Italy.",
                explanation: "Vatican City covers only 0.49 square kilometers (0.19 square miles)."
            },
            {
                question: "Which desert is the largest in the world?",
                answers: [
                    { text: "Sahara Desert", correct: true },
                    { text: "Arabian Desert", correct: false },
                    { text: "Gobi Desert", correct: false },
                    { text: "Kalahari Desert", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "This desert covers much of North Africa.",
                explanation: "The Sahara Desert covers approximately 9.2 million square kilometers."
            }
        ],
        
        science: [
            {
                question: "What is the chemical symbol for gold?",
                answers: [
                    { text: "Go", correct: false },
                    { text: "Gd", correct: false },
                    { text: "Au", correct: true },
                    { text: "Ag", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "It comes from the Latin word 'aurum'.",
                explanation: "The symbol Au comes from the Latin word 'aurum' meaning gold."
            },
            {
                question: "Which planet is known as the Red Planet?",
                answers: [
                    { text: "Venus", correct: false },
                    { text: "Mars", correct: true },
                    { text: "Jupiter", correct: false },
                    { text: "Saturn", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "It is the fourth planet from the Sun.",
                explanation: "Mars appears red due to iron oxide (rust) on its surface."
            },
            {
                question: "What is the hardest natural substance on Earth?",
                answers: [
                    { text: "Gold", correct: false },
                    { text: "Iron", correct: false },
                    { text: "Diamond", correct: true },
                    { text: "Platinum", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "It is a form of carbon and is used in jewelry.",
                explanation: "Diamond scores 10 on the Mohs hardness scale, the highest possible."
            },
            {
                question: "What is the atomic number of carbon?",
                answers: [
                    { text: "6", correct: true },
                    { text: "8", correct: false },
                    { text: "12", correct: false },
                    { text: "14", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "It is the number of protons in a carbon atom.",
                explanation: "Carbon has 6 protons, hence its atomic number is 6."
            },
            {
                question: "Which gas makes up about 78% of Earth's atmosphere?",
                answers: [
                    { text: "Oxygen", correct: false },
                    { text: "Carbon Dioxide", correct: false },
                    { text: "Nitrogen", correct: true },
                    { text: "Hydrogen", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "This gas is inert and doesn't support combustion.",
                explanation: "Nitrogen is the most abundant gas in Earth's atmosphere."
            }
        ],
        
        general: [
            {
                question: "Find the odd one out?",
                answers: [
                    { text: "Apple", correct: false },
                    { text: "Mango", correct: false },
                    { text: "Grapes", correct: false },
                    { text: "Potato", correct: true }
                ],
                difficulty: "easy",
                points: 10,
                hint: "Three of these grow on trees or vines, one grows underground.",
                explanation: "Potato is a root vegetable while the others are fruits that grow on plants."
            },
            {
                question: "How many continents are there on Earth?",
                answers: [
                    { text: "5", correct: false },
                    { text: "6", correct: false },
                    { text: "7", correct: true },
                    { text: "8", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "The seven continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
                explanation: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
            },
            {
                question: "What is the capital of France?",
                answers: [
                    { text: "London", correct: false },
                    { text: "Berlin", correct: false },
                    { text: "Madrid", correct: false },
                    { text: "Paris", correct: true }
                ],
                difficulty: "easy",
                points: 10,
                hint: "It is known as the 'City of Light'.",
                explanation: "Paris is the capital and most populous city of France."
            },
            {
                question: "Which organ in the human body pumps blood?",
                answers: [
                    { text: "Liver", correct: false },
                    { text: "Heart", correct: true },
                    { text: "Lungs", correct: false },
                    { text: "Kidneys", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "It is located in the chest, slightly to the left.",
                explanation: "The heart pumps blood throughout the body via the circulatory system."
            },
            {
                question: "What is the largest mammal in the world?",
                answers: [
                    { text: "African Elephant", correct: false },
                    { text: "Blue Whale", correct: true },
                    { text: "Giraffe", correct: false },
                    { text: "Polar Bear", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "This mammal lives in the ocean.",
                explanation: "The blue whale can grow up to 100 feet long and weigh 200 tons."
            }
        ]
    },
    
    achievements: [
        {
            id: 1,
            name: "First Steps",
            description: "Complete your first quiz",
            icon: "fas fa-baby",
            unlocked: false
        },
        {
            id: 2,
            name: "Perfect Score",
            description: "Score 100% on any quiz",
            icon: "fas fa-star",
            unlocked: false
        },
        {
            id: 3,
            name: "Speed Demon",
            description: "Complete a quiz in under 2 minutes",
            icon: "fas fa-bolt",
            unlocked: false
        },
        {
            id: 4,
            name: "Category Master",
            description: "Complete all questions in a category",
            icon: "fas fa-crown",
            unlocked: false
        },
        {
            id: 5,
            name: "Streak Champion",
            description: "Answer 10 questions correctly in a row",
            icon: "fas fa-fire",
            unlocked: false
        }
    ],
    
    leaderboard: [
        { name: "Alex Johnson", score: 12500, rank: 1 },
        { name: "Maria Garcia", score: 11800, rank: 2 },
        { name: "David Smith", score: 11200, rank: 3 },
        { name: "Emma Wilson", score: 10500, rank: 4 },
        { name: "James Brown", score: 9800, rank: 5 },
        { name: "Sophia Miller", score: 9200, rank: 6 },
        { name: "Michael Davis", score: 8800, rank: 7 },
        { name: "Olivia Taylor", score: 8500, rank: 8 },
        { name: "Robert Clark", score: 8200, rank: 9 },
        { name: "Isabella Martinez", score: 7900, rank: 10 }
    ]
};

// User profile data
let userProfile = {
    name: "Quiz Player",
    level: 5,
    experience: 650,
    totalScore: 2450,
    quizzesCompleted: 48,
    currentStreak: 3,
    bestStreak: 12,
    achievementsUnlocked: [1, 3]
};

// Quiz state
let quizState = {
    currentCategory: null,
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentStreak: 0,
    bestStreak: 0,
    timeTaken: 0,
    selectedAnswers: [],
    timer: null,
    timeLeft: 30,
    quizStarted: false,
    quizCompleted: false
};