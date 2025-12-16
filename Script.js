// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const categoryScreen = document.getElementById('category-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

// Navigation buttons
const startQuizBtn = document.getElementById('start-quiz-btn');
const backToHomeBtn = document.getElementById('back-to-home');
const startCategoryQuizBtn = document.getElementById('start-category-quiz');
const nextBtn = document.getElementById('next-btn');
const hintBtn = document.getElementById('hint-btn');
const skipBtn = document.getElementById('skip-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const reviewAnswersBtn = document.getElementById('review-answers-btn');
const shareResultsBtn = document.getElementById('share-results-btn');

// Mobile menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileHome = document.getElementById('mobile-home');
const mobileLeaderboard = document.getElementById('mobile-leaderboard');
const mobileProfile = document.getElementById('mobile-profile');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

// Modal buttons
const leaderboardBtn = document.getElementById('leaderboard-btn');
const profileBtn = document.getElementById('profile-btn');
const themeToggle = document.getElementById('theme-toggle');
const footerCategories = document.getElementById('footer-categories');
const footerLeaderboard = document.getElementById('footer-leaderboard');

// Modal elements
const leaderboardModal = document.getElementById('leaderboard-modal');
const profileModal = document.getElementById('profile-modal');
const closeLeaderboard = document.getElementById('close-leaderboard');
const closeProfile = document.getElementById('close-profile');
const leaderboardOverlay = document.getElementById('leaderboard-overlay');
const profileOverlay = document.getElementById('profile-overlay');

// Quiz elements
const categoriesContainer = document.getElementById('categories-container');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const timerDisplay = document.getElementById('timer-display');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');
const progressPercentage = document.getElementById('progress-percentage');
const quizCategory = document.getElementById('quiz-category');
const questionDifficulty = document.getElementById('question-difficulty');
const questionPoints = document.getElementById('question-points');
const questionHint = document.getElementById('question-hint');
const hintText = document.getElementById('hint-text');

// Stats elements
const correctCountEl = document.getElementById('correct-count');
const incorrectCountEl = document.getElementById('incorrect-count');
const currentScoreEl = document.getElementById('current-score');
const streakCountEl = document.getElementById('streak-count');

// Results elements
const scorePercentage = document.getElementById('score-percentage');
const finalCorrect = document.getElementById('final-correct');
const finalTotal = document.getElementById('final-total');
const timeTaken = document.getElementById('time-taken');
const finalScore = document.getElementById('final-score');
const achievementsList = document.getElementById('achievements-list');
const levelFill = document.getElementById('level-fill');
const levelPercentage = document.getElementById('level-percentage');

// Settings
const questionCountSelect = document.getElementById('question-count');
const timeLimitSelect = document.getElementById('time-limit');
const difficultySelect = document.getElementById('difficulty');

// Toast
const toast = document.getElementById('toast');
const toastClose = document.querySelector('.toast-close');

// Navigation links
const homeNav = document.getElementById('home-nav');

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
    quizCompleted: false,
    startTime: null
};

// Convert hex to rgb
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeCategories();
    loadUserProfile();
    setupEventListeners();
    checkContinueQuiz();
    updateActiveNav();
});

// Setup event listeners
function setupEventListeners() {
    // Navigation
    startQuizBtn.addEventListener('click', showCategorySelection);
    backToHomeBtn.addEventListener('click', showWelcomeScreen);
    startCategoryQuizBtn.addEventListener('click', startSelectedQuiz);
    nextBtn.addEventListener('click', handleNextQuestion);
    hintBtn.addEventListener('click', showHint);
    skipBtn.addEventListener('click', skipQuestion);
    playAgainBtn.addEventListener('click', playAgain);
    reviewAnswersBtn.addEventListener('click', reviewAnswers);
    shareResultsBtn.addEventListener('click', shareResults);
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileHome.addEventListener('click', (e) => {
        e.preventDefault();
        showWelcomeScreen();
        toggleMobileMenu();
        updateActiveNav();
    });
    mobileLeaderboard.addEventListener('click', (e) => {
        e.preventDefault();
        showModal('leaderboard');
        toggleMobileMenu();
        updateActiveNav();
    });
    mobileProfile.addEventListener('click', (e) => {
        e.preventDefault();
        showModal('profile');
        toggleMobileMenu();
        updateActiveNav();
    });
    mobileThemeToggle.addEventListener('click', () => {
        toggleTheme();
        toggleMobileMenu();
    });
    
    // Footer links
    footerCategories.addEventListener('click', (e) => {
        e.preventDefault();
        showCategorySelection();
        updateActiveNav();
    });
    footerLeaderboard.addEventListener('click', (e) => {
        e.preventDefault();
        showModal('leaderboard');
        updateActiveNav();
    });
    
    // Home navigation
    homeNav.addEventListener('click', (e) => {
        e.preventDefault();
        showWelcomeScreen();
        updateActiveNav();
    });
    
    // Modals
    leaderboardBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showModal('leaderboard');
        updateActiveNav();
    });
    profileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showModal('profile');
        updateActiveNav();
    });
    themeToggle.addEventListener('click', toggleTheme);
    
    // Modal close buttons
    closeLeaderboard.addEventListener('click', closeAllModals);
    closeProfile.addEventListener('click', closeAllModals);
    leaderboardOverlay.addEventListener('click', closeAllModals);
    profileOverlay.addEventListener('click', closeAllModals);
    
    // Tab switching in leaderboard
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateLeaderboard(tab.dataset.period);
        });
    });
    
    // Toast close
    toastClose.addEventListener('click', () => {
        toast.classList.add('hidden');
    });
    
    // Close toast after 5 seconds
    toast.addEventListener('animationend', () => {
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 5000);
    });
}

// Update active navigation
function updateActiveNav() {
    // Update desktop nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelectorAll('.mobile-menu-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class based on current screen
    if (!categoryScreen.classList.contains('hidden-screen') && !categoryScreen.classList.contains('hidden')) {
        homeNav.classList.add('active');
        mobileHome.classList.add('active');
    } else if (!quizScreen.classList.contains('hidden-screen') && !quizScreen.classList.contains('hidden')) {
        // No active nav for quiz screen
    } else if (!resultsScreen.classList.contains('hidden-screen') && !resultsScreen.classList.contains('hidden')) {
        // No active nav for results screen
    } else {
        homeNav.classList.add('active');
        mobileHome.classList.add('active');
    }
}

// Initialize categories
function initializeCategories() {
    categoriesContainer.innerHTML = '';
    
    quizData.categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.dataset.category = category.id;
        
        // Convert hex color to rgb for CSS variables
        const rgb = hexToRgb(category.color);
        const rgbLight = hexToRgb(category.colorLight);
        
        categoryCard.style.cssText = `
            --color: ${category.color};
            --color-light: ${category.colorLight};
            --color-rgb: ${rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : '103, 126, 234'};
            --color-light-rgb: ${rgbLight ? `${rgbLight.r}, ${rgbLight.g}, ${rgbLight.b}` : '118, 75, 162'};
        `;
        
        categoryCard.innerHTML = `
            <div class="category-icon">
                <i class="${category.icon}"></i>
            </div>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
            <div class="category-stats">
                <span><i class="fas fa-question"></i> ${category.questionCount} questions</span>
                <span><i class="fas fa-star"></i> ${getCategoryDifficulty(category.id)}</span>
            </div>
        `;
        
        categoryCard.addEventListener('click', () => {
            document.querySelectorAll('.category-card').forEach(card => {
                card.classList.remove('selected');
            });
            categoryCard.classList.add('selected');
            quizState.currentCategory = category.id;
        });
        
        categoriesContainer.appendChild(categoryCard);
    });
    
    // Select first category by default
    if (document.querySelector('.category-card')) {
        document.querySelector('.category-card').classList.add('selected');
        quizState.currentCategory = quizData.categories[0].id;
    }
}

// Get category difficulty
function getCategoryDifficulty(categoryId) {
    const difficulties = {
        'history': 'Medium',
        'geography': 'Medium',
        'science': 'Medium',
        'technology': 'Hard',
        'sports': 'Easy',
        'entertainment': 'Easy',
        'literature': 'Medium',
        'general': 'Mixed'
    };
    return difficulties[categoryId] || 'Mixed';
}

// Toggle mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

// Show category selection
function showCategorySelection() {
    hideAllScreens();
    categoryScreen.classList.remove('hidden-screen');
    categoryScreen.classList.add('active-screen');
    updateActiveNav();
}

// Show welcome screen
function showWelcomeScreen() {
    hideAllScreens();
    welcomeScreen.classList.remove('hidden-screen');
    welcomeScreen.classList.add('active-screen');
    updateActiveNav();
}

// Hide all screens
function hideAllScreens() {
    const screens = [welcomeScreen, categoryScreen, quizScreen, resultsScreen];
    screens.forEach(screen => {
        screen.classList.add('hidden-screen');
        screen.classList.remove('active-screen');
    });
}

// Start selected quiz
function startSelectedQuiz() {
    if (!quizState.currentCategory) {
        showToast('Please select a category first!', 'warning');
        return;
    }
    
    // Reset quiz state
    resetQuizState();
    
    // Get quiz settings
    const questionCount = parseInt(questionCountSelect.value);
    quizState.timeLeft = parseInt(timeLimitSelect.value);
    quizState.startTime = Date.now();
    
    // Get questions for selected category
    quizState.questions = [...quizData.questions[quizState.currentCategory]];
    
    // Filter by difficulty if not "mixed"
    const difficulty = difficultySelect.value;
    if (difficulty !== 'mixed') {
        quizState.questions = quizState.questions.filter(q => q.difficulty === difficulty);
    }
    
    // Shuffle and limit questions
    shuffleArray(quizState.questions);
    quizState.questions = quizState.questions.slice(0, questionCount);
    
    if (quizState.questions.length === 0) {
        showToast('No questions available for this category and difficulty!', 'error');
        return;
    }
    
    // Update UI
    hideAllScreens();
    quizScreen.classList.remove('hidden-screen');
    quizScreen.classList.add('active-screen');
    
    // Set quiz info
    const category = quizData.categories.find(c => c.id === quizState.currentCategory);
    quizCategory.innerHTML = `<i class="${category.icon}"></i> <span>${category.name}</span>`;
    quizCategory.style.background = `linear-gradient(135deg, ${category.color}, ${category.colorLight})`;
    
    totalQuestionsEl.textContent = quizState.questions.length;
    
    // Start the quiz
    loadQuestion();
    startTimer();
    quizState.quizStarted = true;
    
    // Save quiz state to localStorage
    saveQuizState();
}

// Reset quiz state
function resetQuizState() {
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;
    quizState.correctAnswers = 0;
    quizState.incorrectAnswers = 0;
    quizState.currentStreak = 0;
    quizState.timeTaken = 0;
    quizState.selectedAnswers = [];
    quizState.quizStarted = false;
    quizState.quizCompleted = false;
    quizState.startTime = null;
    
    if (quizState.timer) {
        clearInterval(quizState.timer);
        quizState.timer = null;
    }
    
    // Update UI
    correctCountEl.textContent = '0';
    incorrectCountEl.textContent = '0';
    currentScoreEl.textContent = '0';
    streakCountEl.textContent = '0';
    progressFill.style.width = '0%';
    progressPercentage.textContent = '0%';
}

// Load question
function loadQuestion() {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    
    // Update question info
    currentQuestionEl.textContent = quizState.currentQuestionIndex + 1;
    questionText.textContent = currentQuestion.question;
    questionDifficulty.textContent = currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1);
    questionDifficulty.className = `question-difficulty ${currentQuestion.difficulty}`;
    questionPoints.textContent = currentQuestion.points;
    
    // Reset hint
    questionHint.classList.add('hidden');
    hintText.textContent = currentQuestion.hint;
    hintBtn.disabled = false;
    
    // Update progress
    const progress = ((quizState.currentQuestionIndex) / quizState.questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressPercentage.textContent = `${Math.round(progress)}%`;
    
    // Create answer buttons
    answersContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    
    currentQuestion.answers.forEach((answer, index) => {
        const answerBtn = document.createElement('button');
        answerBtn.className = 'answer-option';
        answerBtn.innerHTML = `
            <div class="answer-letter">${letters[index]}</div>
            <div class="answer-text">${answer.text}</div>
        `;
        
        answerBtn.dataset.correct = answer.correct;
        
        answerBtn.addEventListener('click', () => selectAnswer(answerBtn));
        
        answersContainer.appendChild(answerBtn);
    });
    
    // Hide next button
    nextBtn.classList.add('hidden');
    skipBtn.classList.remove('hidden');
    
    // Save current state
    saveQuizState();
}

// Select answer
function selectAnswer(selectedBtn) {
    // Disable all answer buttons
    document.querySelectorAll('.answer-option').forEach(btn => {
        btn.classList.add('disabled');
        btn.disabled = true;
    });
    
    // Mark selected answer
    selectedBtn.classList.add('selected');
    
    const isCorrect = selectedBtn.dataset.correct === 'true';
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    
    // Store selected answer
    quizState.selectedAnswers.push({
        question: currentQuestion.question,
        userAnswer: selectedBtn.querySelector('.answer-text').textContent,
        correctAnswer: currentQuestion.answers.find(a => a.correct).text,
        isCorrect: isCorrect,
        explanation: currentQuestion.explanation
    });
    
    // Update score and stats
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        quizState.score += currentQuestion.points;
        quizState.correctAnswers++;
        quizState.currentStreak++;
        
        if (quizState.currentStreak > quizState.bestStreak) {
            quizState.bestStreak = quizState.currentStreak;
        }
        
        showToast(`Correct! +${currentQuestion.points} points`, 'success');
    } else {
        selectedBtn.classList.add('incorrect');
        quizState.incorrectAnswers++;
        quizState.currentStreak = 0;
        
        // Highlight correct answer
        document.querySelectorAll('.answer-option').forEach(btn => {
            if (btn.dataset.correct === 'true') {
                btn.classList.add('correct');
            }
        });
        
        showToast('Incorrect! The right answer is highlighted.', 'error');
    }
    
    // Update UI stats
    correctCountEl.textContent = quizState.correctAnswers;
    incorrectCountEl.textContent = quizState.incorrectAnswers;
    currentScoreEl.textContent = quizState.score;
    streakCountEl.textContent = quizState.currentStreak;
    
    // Check for achievements
    checkAchievements();
    
    // Show next button
    nextBtn.classList.remove('hidden');
    skipBtn.classList.add('hidden');
    
    // Stop timer
    clearInterval(quizState.timer);
    quizState.timer = null;
    
    // Save state
    saveQuizState();
}

// Start timer
function startTimer() {
    quizState.timeLeft = parseInt(timeLimitSelect.value);
    timerDisplay.textContent = quizState.timeLeft;
    timerDisplay.classList.remove('timer-pulse');
    
    quizState.timer = setInterval(() => {
        quizState.timeLeft--;
        quizState.timeTaken++;
        timerDisplay.textContent = quizState.timeLeft;
        
        // Update timer color based on remaining time
        if (quizState.timeLeft <= 10) {
            timerDisplay.style.color = '#ef4444';
            timerDisplay.classList.add('timer-pulse');
        } else if (quizState.timeLeft <= 20) {
            timerDisplay.style.color = '#f59e0b';
        } else {
            timerDisplay.style.color = '';
        }
        
        if (quizState.timeLeft <= 0) {
            clearInterval(quizState.timer);
            quizState.timer = null;
            handleTimeUp();
        }
    }, 1000);
}

// Handle time up
function handleTimeUp() {
    // Disable all answer buttons
    document.querySelectorAll('.answer-option').forEach(btn => {
        btn.classList.add('disabled');
        btn.disabled = true;
    });
    
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    
    // Store as unanswered
    quizState.selectedAnswers.push({
        question: currentQuestion.question,
        userAnswer: "Time's up - No answer selected",
        correctAnswer: currentQuestion.answers.find(a => a.correct).text,
        isCorrect: false,
        explanation: currentQuestion.explanation
    });
    
    // Highlight correct answer
    document.querySelectorAll('.answer-option').forEach(btn => {
        if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
        }
    });
    
    quizState.incorrectAnswers++;
    quizState.currentStreak = 0;
    
    // Update UI
    incorrectCountEl.textContent = quizState.incorrectAnswers;
    streakCountEl.textContent = quizState.currentStreak;
    
    showToast('Time\'s up! Moving to next question.', 'warning');
    nextBtn.classList.remove('hidden');
    skipBtn.classList.add('hidden');
}

// Handle next question
function handleNextQuestion() {
    quizState.currentQuestionIndex++;
    
    if (quizState.currentQuestionIndex < quizState.questions.length) {
        loadQuestion();
        startTimer();
    } else {
        completeQuiz();
    }
}

// Skip question
function skipQuestion() {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    
    // Store as skipped
    quizState.selectedAnswers.push({
        question: currentQuestion.question,
        userAnswer: "Question skipped",
        correctAnswer: currentQuestion.answers.find(a => a.correct).text,
        isCorrect: false,
        explanation: currentQuestion.explanation
    });
    
    quizState.incorrectAnswers++;
    quizState.currentStreak = 0;
    
    // Update UI
    incorrectCountEl.textContent = quizState.incorrectAnswers;
    streakCountEl.textContent = quizState.currentStreak;
    
    showToast('Question skipped!', 'info');
    handleNextQuestion();
}

// Show hint
function showHint() {
    questionHint.classList.remove('hidden');
    hintBtn.disabled = true;
    
    // Deduct points for using hint
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    quizState.score -= Math.floor(currentQuestion.points * 0.1);
    currentScoreEl.textContent = quizState.score;
    
    showToast('Hint used! -10% points deducted', 'info');
}

// Complete quiz
function completeQuiz() {
    if (quizState.timer) {
        clearInterval(quizState.timer);
        quizState.timer = null;
    }
    
    quizState.quizCompleted = true;
    
    // Calculate total time taken
    if (quizState.startTime) {
        quizState.timeTaken = Math.floor((Date.now() - quizState.startTime) / 1000);
    }
    
    // Update user profile
    updateUserProfile();
    
    // Calculate results
    const percentage = Math.round((quizState.correctAnswers / quizState.questions.length) * 100);
    const totalTime = formatTime(quizState.timeTaken);
    
    // Update results UI
    scorePercentage.textContent = `${percentage}%`;
    finalCorrect.textContent = quizState.correctAnswers;
    finalTotal.textContent = quizState.questions.length;
    timeTaken.textContent = totalTime;
    finalScore.textContent = quizState.score;
    
    // Update progress circle
    const circle = document.querySelector('.progress-ring-fill');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    
    const offset = circumference - (percentage / 100) * circumference;
    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 100);
    
    // Show achievements
    displayAchievements();
    
    // Show results screen
    hideAllScreens();
    resultsScreen.classList.remove('hidden-screen');
    resultsScreen.classList.add('active-screen');
    
    // Clear saved quiz state
    localStorage.removeItem('quizState');
}

// Update user profile
function updateUserProfile() {
    userProfile.totalScore += quizState.score;
    userProfile.quizzesCompleted++;
    userProfile.experience += quizState.correctAnswers * 10;
    
    // Update level based on experience
    const newLevel = Math.floor(userProfile.experience / 1000) + 1;
    if (newLevel > userProfile.level) {
        userProfile.level = newLevel;
        showToast(`Congratulations! You've reached Level ${newLevel}!`, 'success');
    }
    
    // Update streak
    if (quizState.currentStreak > userProfile.currentStreak) {
        userProfile.currentStreak = quizState.currentStreak;
    }
    
    if (quizState.bestStreak > userProfile.bestStreak) {
        userProfile.bestStreak = quizState.bestStreak;
    }
    
    // Save to localStorage
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    loadUserProfile();
}

// Display achievements
function displayAchievements() {
    achievementsList.innerHTML = '';
    
    quizData.achievements.forEach(achievement => {
        const isUnlocked = userProfile.achievementsUnlocked.includes(achievement.id);
        const achievementItem = document.createElement('div');
        achievementItem.className = `achievement-item ${isUnlocked ? 'unlocked' : 'locked'}`;
        
        achievementItem.innerHTML = `
            <i class="${achievement.icon}"></i>
            <div>
                <h4>${achievement.name}</h4>
                <p>${achievement.description}</p>
            </div>
        `;
        
        achievementsList.appendChild(achievementItem);
    });
}

// Check for new achievements
function checkAchievements() {
    // Perfect score achievement
    if (quizState.correctAnswers === quizState.questions.length && quizState.questions.length > 0) {
        unlockAchievement(2);
    }
    
    // Streak achievement
    if (quizState.currentStreak >= 10) {
        unlockAchievement(5);
    }
    
    // Speed demon achievement (complete in under 2 minutes)
    if (quizState.timeTaken > 0 && quizState.timeTaken < 120 && quizState.quizCompleted) {
        unlockAchievement(3);
    }
}

// Unlock achievement
function unlockAchievement(achievementId) {
    if (!userProfile.achievementsUnlocked.includes(achievementId)) {
        userProfile.achievementsUnlocked.push(achievementId);
        const achievement = quizData.achievements.find(a => a.id === achievementId);
        showToast(`Achievement Unlocked: ${achievement.name}!`, 'success');
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
}

// Play again
function playAgain() {
    showCategorySelection();
}

// Review answers
function reviewAnswers() {
    let reviewText = "📊 Quiz Review\n\n";
    
    quizState.selectedAnswers.forEach((answer, index) => {
        reviewText += `Question ${index + 1}: ${answer.question}\n`;
        reviewText += `Your Answer: ${answer.userAnswer}\n`;
        reviewText += `Correct Answer: ${answer.correctAnswer}\n`;
        reviewText += `Result: ${answer.isCorrect ? '✅ Correct' : '❌ Incorrect'}\n`;
        if (answer.explanation) {
            reviewText += `💡 Explanation: ${answer.explanation}\n`;
        }
        reviewText += `\n`;
    });
    
    // Add summary
    reviewText += `\n📈 Summary:\n`;
    reviewText += `Correct Answers: ${quizState.correctAnswers}/${quizState.questions.length}\n`;
    reviewText += `Final Score: ${quizState.score} points\n`;
    reviewText += `Time Taken: ${formatTime(quizState.timeTaken)}`;
    
    // Create a modal for better review experience
    const reviewModal = document.createElement('div');
    reviewModal.className = 'modal active';
    reviewModal.innerHTML = `
        <div class="modal-overlay" id="review-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-chart-bar"></i> Quiz Review</h3>
                <button class="close-modal" id="close-review">&times;</button>
            </div>
            <div class="modal-body">
                <div style="max-height: 400px; overflow-y: auto; padding-right: 10px;">
                    <pre style="white-space: pre-wrap; font-family: 'Poppins', sans-serif; line-height: 1.6; color: var(--dark-color);">${reviewText}</pre>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(reviewModal);
    
    // Add event listeners
    const closeReview = reviewModal.querySelector('#close-review');
    const reviewOverlay = reviewModal.querySelector('#review-overlay');
    
    const closeReviewModal = () => {
        reviewModal.remove();
        document.body.style.overflow = '';
    };
    
    closeReview.addEventListener('click', closeReviewModal);
    reviewOverlay.addEventListener('click', closeReviewModal);
    
    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden';
}

// Share results
function shareResults() {
    const percentage = Math.round((quizState.correctAnswers / quizState.questions.length) * 100);
    const shareText = `🎯 I scored ${quizState.score} points (${percentage}%) on Brain Stormy! Can you beat my score?`;
    const shareUrl = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Quiz Results',
            text: shareText,
            url: shareUrl
        }).catch(() => {
            // Fallback to clipboard
            navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
            showToast('Results copied to clipboard!', 'success');
        });
    } else {
        navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
        showToast('Results copied to clipboard!', 'success');
    }
}

// Show modal
function showModal(modalType) {
    closeAllModals();
    
    if (modalType === 'leaderboard') {
        updateLeaderboard('daily');
        leaderboardModal.classList.add('active');
    } else if (modalType === 'profile') {
        profileModal.classList.add('active');
    }
    
    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden';
}

// Close all modals
function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    
    // Restore body scrolling
    document.body.style.overflow = '';
}

// Update leaderboard
function updateLeaderboard(period) {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
    
    // Filter leaderboard based on period (for demo, we use the same data)
    let filteredLeaderboard = [...quizData.leaderboard];
    
    // Add current user to leaderboard if not already there
    const userInLeaderboard = filteredLeaderboard.some(entry => entry.name === userProfile.name);
    if (!userInLeaderboard) {
        filteredLeaderboard.push({
            name: userProfile.name,
            score: userProfile.totalScore,
            rank: filteredLeaderboard.length + 1
        });
        
        // Sort by score
        filteredLeaderboard.sort((a, b) => b.score - a.score);
        
        // Update ranks
        filteredLeaderboard.forEach((entry, index) => {
            entry.rank = index + 1;
        });
    }
    
    filteredLeaderboard.forEach(entry => {
        const leaderboardEntry = document.createElement('div');
        leaderboardEntry.className = 'leaderboard-entry';
        
        leaderboardEntry.innerHTML = `
            <div class="leaderboard-rank">${entry.rank}</div>
            <div class="leaderboard-info">
                <div class="leaderboard-name">${entry.name}</div>
                <div class="leaderboard-score">${entry.score.toLocaleString()} points</div>
            </div>
        `;
        
        // Highlight current user
        if (entry.name === userProfile.name) {
            leaderboardEntry.style.borderColor = 'var(--primary-color)';
            leaderboardEntry.style.boxShadow = '0 4px 12px rgba(67, 97, 238, 0.2)';
        }
        
        leaderboardList.appendChild(leaderboardEntry);
    });
}

// Load user profile
function loadUserProfile() {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        userProfile = JSON.parse(savedProfile);
    }
    
    // Update profile modal
    document.getElementById('profile-name').textContent = userProfile.name;
    document.getElementById('profile-level').textContent = `Level ${userProfile.level} Quiz Master`;
    document.getElementById('profile-score').textContent = userProfile.totalScore.toLocaleString();
    document.getElementById('profile-quizzes').textContent = userProfile.quizzesCompleted;
    
    // Update level progress
    const levelProgress = (userProfile.experience % 1000) / 10;
    levelFill.style.width = `${levelProgress}%`;
    levelPercentage.textContent = `${levelProgress}%`;
}

// Check for continue quiz
function checkContinueQuiz() {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
        const continueBtn = document.getElementById('continue-btn');
        continueBtn.style.display = 'flex';
        continueBtn.addEventListener('click', () => {
            const state = JSON.parse(savedState);
            if (state.quizStarted && !state.quizCompleted) {
                quizState = state;
                // Restore timer if needed
                if (quizState.timer) {
                    clearInterval(quizState.timer);
                    quizState.timer = null;
                }
                showCategorySelection();
                startSelectedQuiz();
            }
        });
    } else {
        const continueBtn = document.getElementById('continue-btn');
        continueBtn.style.display = 'none';
    }
}

// Save quiz state
function saveQuizState() {
    localStorage.setItem('quizState', JSON.stringify({
        ...quizState,
        timer: null // Don't save timer function
    }));
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    const icon = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    themeToggle.innerHTML = `<i class="${icon}"></i>`;
    
    if (mobileThemeToggle) {
        mobileThemeToggle.innerHTML = `<i class="${icon}"></i> ${newTheme === 'dark' ? 'Light' : 'Dark'} Mode`;
    }
    
    localStorage.setItem('theme', newTheme);
}

// Show toast notification
function showToast(message, type = 'info') {
    const toastIcon = toast.querySelector('.toast-icon');
    const toastMessage = toast.querySelector('.toast-message');
    
    // Set icon and color based on type
    let iconClass, borderColor;
    switch(type) {
        case 'success':
            iconClass = 'fas fa-check-circle';
            borderColor = '#4ade80';
            break;
        case 'error':
            iconClass = 'fas fa-times-circle';
            borderColor = '#ef4444';
            break;
        case 'warning':
            iconClass = 'fas fa-exclamation-triangle';
            borderColor = '#f59e0b';
            break;
        default:
            iconClass = 'fas fa-info-circle';
            borderColor = '#4361ee';
    }
    
    toastIcon.className = `toast-icon ${iconClass}`;
    toastIcon.style.color = borderColor;
    toastMessage.textContent = message;
    toast.style.borderLeftColor = borderColor;
    
    toast.classList.remove('hidden');
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 5000);
}

// Utility functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
const themeIcon = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
themeToggle.innerHTML = `<i class="${themeIcon}"></i>`;
if (mobileThemeToggle) {
    mobileThemeToggle.innerHTML = `<i class="${themeIcon}"></i> ${savedTheme === 'dark' ? 'Light' : 'Dark'} Mode`;
}