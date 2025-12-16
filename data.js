// Quiz Data Database
const quizData = {
    categories: [
        {
            id: 'history',
            name: 'History',
            icon: 'fas fa-landmark',
            description: 'Journey through time and explore historical events',
            questionCount: 150,
            color: '#FF6B6B',
            colorLight: '#FF8E8E'
        },
        {
            id: 'geography',
            name: 'Geography',
            icon: 'fas fa-globe-americas',
            description: 'Discover countries, capitals, and landmarks',
            questionCount: 200,
            color: '#4ECDC4',
            colorLight: '#6BE3DB'
        },
        {
            id: 'science',
            name: 'Science',
            icon: 'fas fa-flask',
            description: 'Explore physics, chemistry, and biology',
            questionCount: 180,
            color: '#45B7D1',
            colorLight: '#5FD1F0'
        },
        {
            id: 'technology',
            name: 'Technology',
            icon: 'fas fa-laptop-code',
            description: 'Computers, programming, and digital innovations',
            questionCount: 120,
            color: '#96CEB4',
            colorLight: '#B4E6CA'
        },
        {
            id: 'sports',
            name: 'Sports',
            icon: 'fas fa-futbol',
            description: 'Athletics, teams, and sporting events',
            questionCount: 100,
            color: '#FFEAA7',
            colorLight: '#FFF4D1'
        },
        {
            id: 'entertainment',
            name: 'Entertainment',
            icon: 'fas fa-film',
            description: 'Movies, music, and pop culture',
            questionCount: 160,
            color: '#DDA0DD',
            colorLight: '#E8C2E8'
        },
        {
            id: 'literature',
            name: 'Literature',
            icon: 'fas fa-book',
            description: 'Books, authors, and literary works',
            questionCount: 90,
            color: '#F8C291',
            colorLight: '#FAD4B0'
        },
        {
            id: 'general',
            name: 'General Knowledge',
            icon: 'fas fa-brain',
            description: 'Mixed bag of interesting facts',
            questionCount: 250,
            color: '#6C5CE7',
            colorLight: '#8A7EEC'
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
        
        technology: [
            {
                question: "What does HTML stand for?",
                answers: [
                    { text: "Hyper Text Markup Language", correct: true },
                    { text: "High Tech Modern Language", correct: false },
                    { text: "Hyper Transfer Markup Language", correct: false },
                    { text: "Home Tool Markup Language", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "It's the standard markup language for creating web pages.",
                explanation: "HTML stands for Hyper Text Markup Language, the foundation of all web pages."
            },
            {
                question: "Which company developed the JavaScript programming language?",
                answers: [
                    { text: "Microsoft", correct: false },
                    { text: "Google", correct: false },
                    { text: "Netscape", correct: true },
                    { text: "Apple", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "It was originally created in just 10 days.",
                explanation: "JavaScript was created by Brendan Eich at Netscape in 1995."
            },
            {
                question: "What does CPU stand for?",
                answers: [
                    { text: "Central Processing Unit", correct: true },
                    { text: "Computer Processing Unit", correct: false },
                    { text: "Central Program Utility", correct: false },
                    { text: "Computer Program Unit", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "It's often called the 'brain' of the computer.",
                explanation: "CPU stands for Central Processing Unit, the primary component of a computer."
            },
            {
                question: "Which programming language is known for its use in data science and machine learning?",
                answers: [
                    { text: "Java", correct: false },
                    { text: "Python", correct: true },
                    { text: "C++", correct: false },
                    { text: "Ruby", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "This language is named after a comedy group, not a snake.",
                explanation: "Python is widely used in data science due to its simplicity and powerful libraries."
            },
            {
                question: "What year was the first iPhone released?",
                answers: [
                    { text: "2005", correct: false },
                    { text: "2007", correct: true },
                    { text: "2009", correct: false },
                    { text: "2010", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "It was announced by Steve Jobs in January of that year.",
                explanation: "The first iPhone was released on June 29, 2007, revolutionizing the smartphone industry."
            }
        ],
        
        sports: [
            {
                question: "Which country has won the most FIFA World Cup titles?",
                answers: [
                    { text: "Germany", correct: false },
                    { text: "Italy", correct: false },
                    { text: "Brazil", correct: true },
                    { text: "Argentina", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "This country is known for its yellow and green jersey.",
                explanation: "Brazil has won the FIFA World Cup 5 times (1958, 1962, 1970, 1994, 2002)."
            },
            {
                question: "In which sport would you perform a 'slam dunk'?",
                answers: [
                    { text: "Tennis", correct: false },
                    { text: "Basketball", correct: true },
                    { text: "Soccer", correct: false },
                    { text: "Baseball", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "This sport involves shooting a ball through a hoop.",
                explanation: "A slam dunk is a basketball shot where a player jumps and powerfully throws the ball downward through the basket."
            },
            {
                question: "How many players are on a standard soccer team during a match?",
                answers: [
                    { text: "9", correct: false },
                    { text: "10", correct: false },
                    { text: "11", correct: true },
                    { text: "12", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "This includes one goalkeeper.",
                explanation: "A standard soccer team has 11 players on the field: 10 outfield players and 1 goalkeeper."
            },
            {
                question: "Which country hosted the 2016 Summer Olympics?",
                answers: [
                    { text: "China", correct: false },
                    { text: "Brazil", correct: true },
                    { text: "Japan", correct: false },
                    { text: "Russia", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "The games were held in Rio de Janeiro.",
                explanation: "The 2016 Summer Olympics were held in Rio de Janeiro, Brazil."
            },
            {
                question: "In tennis, what is the term for a score of zero?",
                answers: [
                    { text: "Nil", correct: false },
                    { text: "Zero", correct: false },
                    { text: "Love", correct: true },
                    { text: "Null", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "It's a French term meaning 'the egg'.",
                explanation: "In tennis, 'love' means zero, possibly derived from the French word 'l'oeuf' meaning 'the egg'."
            }
        ],
        
        entertainment: [
            {
                question: "Which actor played Iron Man in the Marvel Cinematic Universe?",
                answers: [
                    { text: "Chris Evans", correct: false },
                    { text: "Chris Hemsworth", correct: false },
                    { text: "Robert Downey Jr.", correct: true },
                    { text: "Mark Ruffalo", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "He's known for his witty one-liners as Tony Stark.",
                explanation: "Robert Downey Jr. portrayed Tony Stark/Iron Man in the Marvel Cinematic Universe."
            },
            {
                question: "Which singer is known as the 'Queen of Pop'?",
                answers: [
                    { text: "Britney Spears", correct: false },
                    { text: "Madonna", correct: true },
                    { text: "Lady Gaga", correct: false },
                    { text: "Beyoncé", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "She had hits like 'Like a Virgin' and 'Material Girl'.",
                explanation: "Madonna is widely recognized as the 'Queen of Pop' for her influence on pop music."
            },
            {
                question: "Which movie won the Oscar for Best Picture in 2020?",
                answers: [
                    { text: "Parasite", correct: true },
                    { text: "1917", correct: false },
                    { text: "Joker", correct: false },
                    { text: "Once Upon a Time in Hollywood", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "It was the first non-English language film to win Best Picture.",
                explanation: "Parasite, a South Korean film directed by Bong Joon-ho, won Best Picture at the 2020 Oscars."
            },
            {
                question: "Who created the Harry Potter book series?",
                answers: [
                    { text: "J.R.R. Tolkien", correct: false },
                    { text: "J.K. Rowling", correct: true },
                    { text: "George R.R. Martin", correct: false },
                    { text: "Stephen King", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "She wrote the first book in cafes while on welfare.",
                explanation: "J.K. Rowling is the author of the Harry Potter fantasy book series."
            },
            {
                question: "Which TV show features the characters Sheldon Cooper and Leonard Hofstadter?",
                answers: [
                    { text: "Friends", correct: false },
                    { text: "The Big Bang Theory", correct: true },
                    { text: "How I Met Your Mother", correct: false },
                    { text: "Two and a Half Men", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "The show is about a group of nerdy friends and their neighbor.",
                explanation: "The Big Bang Theory features physicists Sheldon Cooper and Leonard Hofstadter as main characters."
            }
        ],
        
        literature: [
            {
                question: "Who wrote 'Pride and Prejudice'?",
                answers: [
                    { text: "Charlotte Brontë", correct: false },
                    { text: "Jane Austen", correct: true },
                    { text: "Emily Brontë", correct: false },
                    { text: "Charles Dickens", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "This English novelist lived from 1775 to 1817.",
                explanation: "Jane Austen wrote 'Pride and Prejudice', published in 1813."
            },
            {
                question: "In Shakespeare's 'Romeo and Juliet', which family does Romeo belong to?",
                answers: [
                    { text: "Capulet", correct: false },
                    { text: "Montague", correct: true },
                    { text: "Escalus", correct: false },
                    { text: "Paris", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "The play begins with 'Two households, both alike in dignity...'",
                explanation: "Romeo is a Montague, while Juliet is a Capulet, from the feuding families."
            },
            {
                question: "Who wrote '1984'?",
                answers: [
                    { text: "Aldous Huxley", correct: false },
                    { text: "George Orwell", correct: true },
                    { text: "Ray Bradbury", correct: false },
                    { text: "H.G. Wells", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "He also wrote 'Animal Farm'.",
                explanation: "George Orwell wrote the dystopian novel '1984', published in 1949."
            },
            {
                question: "Which novel begins with 'Call me Ishmael'?",
                answers: [
                    { text: "Moby-Dick", correct: true },
                    { text: "The Old Man and the Sea", correct: false },
                    { text: "The Sea Wolf", correct: false },
                    { text: "Twenty Thousand Leagues Under the Sea", correct: false }
                ],
                difficulty: "medium",
                points: 15,
                hint: "It's about a captain's obsessive quest for a white whale.",
                explanation: "Herman Melville's 'Moby-Dick' begins with the famous line 'Call me Ishmael.'"
            },
            {
                question: "Who wrote the 'Harry Potter' series?",
                answers: [
                    { text: "J.R.R. Tolkien", correct: false },
                    { text: "J.K. Rowling", correct: true },
                    { text: "C.S. Lewis", correct: false },
                    { text: "Neil Gaiman", correct: false }
                ],
                difficulty: "easy",
                points: 10,
                hint: "Her initials stand for Joanne Kathleen.",
                explanation: "J.K. Rowling is the author of the Harry Potter fantasy series."
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

// User profile data - initialize from localStorage or use default
let userProfile = JSON.parse(localStorage.getItem('userProfile')) || {
    name: "Quiz Player",
    level: 5,
    experience: 650,
    totalScore: 2450,
    quizzesCompleted: 48,
    currentStreak: 3,
    bestStreak: 12,
    achievementsUnlocked: [1, 3]
};

// Quiz state - initialize from localStorage or use default
let quizState = JSON.parse(localStorage.getItem('quizState')) || {
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
    quizCompleted: false,
    startTime: null
};

// Save user profile to localStorage
function saveUserProfile() {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

// Save quiz state to localStorage
function saveQuizState() {
    const stateToSave = { ...quizState };
    // Don't save timer function
    stateToSave.timer = null;
    localStorage.setItem('quizState', JSON.stringify(stateToSave));
}