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
    initializeTheme();
});

// Setup event listeners
function setupEventListeners() {
    // Navigation
    if (startQuizBtn) startQuizBtn.addEventListener('click', showCategorySelection);
    if (backToHomeBtn) backToHomeBtn.addEventListener('click', showWelcomeScreen);
    if (startCategoryQuizBtn) startCategoryQuizBtn.addEventListener('click', startSelectedQuiz);
    if (nextBtn) nextBtn.addEventListener('click', handleNextQuestion);
    if (hintBtn) hintBtn.addEventListener('click', showHint);
    if (skipBtn) skipBtn.addEventListener('click', skipQuestion);
    if (playAgainBtn) playAgainBtn.addEventListener('click', playAgain);
    if (reviewAnswersBtn) reviewAnswersBtn.addEventListener('click', reviewAnswers);
    if (shareResultsBtn) shareResultsBtn.addEventListener('click', shareResults);
    
    // Mobile menu
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    if (mobileHome) {
        mobileHome.addEventListener('click', (e) => {
            e.preventDefault();
            showWelcomeScreen();
            toggleMobileMenu();
            updateActiveNav();
        });
    }
    if (mobileLeaderboard) {
        mobileLeaderboard.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('leaderboard');
            toggleMobileMenu();
            updateActiveNav();
        });
    }
    if (mobileProfile) {
        mobileProfile.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('profile');
            toggleMobileMenu();
            updateActiveNav();
        });
    }
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', () => {
            toggleTheme();
            toggleMobileMenu();
        });
    }
    
    // Footer links
    if (footerCategories) {
        footerCategories.addEventListener('click', (e) => {
            e.preventDefault();
            showCategorySelection();
            updateActiveNav();
        });
    }
    if (footerLeaderboard) {
        footerLeaderboard.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('leaderboard');
            updateActiveNav();
        });
    }
    
    // Home navigation
    if (homeNav) {
        homeNav.addEventListener('click', (e) => {
            e.preventDefault();
            showWelcomeScreen();
            updateActiveNav();
        });
    }
    
    // Modals
    if (leaderboardBtn) {
        leaderboardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('leaderboard');
            updateActiveNav();
        });
    }
    if (profileBtn) {
        profileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('profile');
            updateActiveNav();
        });
    }
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    
    // Modal close buttons
    if (closeLeaderboard) closeLeaderboard.addEventListener('click', closeAllModals);
    if (closeProfile) closeProfile.addEventListener('click', closeAllModals);
    
    // Close modals when clicking outside
    document.addEventListener('click', (e) => {
        if (leaderboardModal && leaderboardModal.classList.contains('active') && 
            e.target === leaderboardModal.querySelector('.modal-overlay')) {
            closeAllModals();
        }
        if (profileModal && profileModal.classList.contains('active') && 
            e.target === profileModal.querySelector('.modal-overlay')) {
            closeAllModals();
        }
    });
    
    // Tab switching in leaderboard
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateLeaderboard(tab.dataset.period);
        });
    });
    
    // Toast close
    if (toastClose) {
        toastClose.addEventListener('click', () => {
            toast.classList.add('hidden');
        });
    }
    
    // Close toast after 5 seconds
    if (toast) {
        toast.addEventListener('animationend', () => {
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 5000);
        });
    }
    
    // Close mobile menu when clicking on overlay (if any)
    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                toggleMobileMenu();
            }
        });
    }
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
    if (!categoryScreen.classList.contains('hidden-screen')) {
        if (homeNav) homeNav.classList.add('active');
        if (mobileHome) mobileHome.classList.add('active');
    } else if (!quizScreen.classList.contains('hidden-screen')) {
        // No active nav for quiz screen
    } else if (!resultsScreen.classList.contains('hidden-screen')) {
        // No active nav for results screen
    } else {
        if (homeNav) homeNav.classList.add('active');
        if (mobileHome) mobileHome.classList.add('active');
    }
}

// Initialize categories
function initializeCategories() {
    if (!categoriesContainer) return;
    
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
            console.log('Selected category:', category.id);
        });
        
        categoriesContainer.appendChild(categoryCard);
    });
    
    // Select first category by default
    const firstCategoryCard = document.querySelector('.category-card');
    if (firstCategoryCard) {
        firstCategoryCard.classList.add('selected');
        quizState.currentCategory = quizData.categories[0].id;
    }
}

// Get category difficulty
function getCategoryDifficulty(categoryId) {
    const difficulties = {
        'history': 'Medium',
        'geography': 'Medium',
        'science': 'Medium',
        'technology': 'Medium',
        'sports': 'Easy',
        'entertainment': 'Easy',
        'literature': 'Medium',
        'general': 'Mixed'
    };
    return difficulties[categoryId] || 'Mixed';
}

// Toggle mobile menu
function toggleMobileMenu() {
    if (!mobileMenu) return;
    
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-menu-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Show category selection
function showCategorySelection() {
    hideAllScreens();
    categoryScreen.classList.remove('hidden-screen');
    categoryScreen.classList.add('active-screen');
    updateActiveNav();
    console.log('Showing category selection');
}

// Show welcome screen
function showWelcomeScreen() {
    hideAllScreens();
    welcomeScreen.classList.remove('hidden-screen');
    welcomeScreen.classList.add('active-screen');
    updateActiveNav();
    console.log('Showing welcome screen');
}

// Hide all screens
function hideAllScreens() {
    const screens = [welcomeScreen, categoryScreen, quizScreen, resultsScreen];
    screens.forEach(screen => {
        if (screen) {
            screen.classList.add('hidden-screen');
            screen.classList.remove('active-screen');
        }
    });
}

// Start selected quiz
function startSelectedQuiz() {
    console.log('Starting quiz for category:', quizState.currentCategory);
    
    if (!quizState.currentCategory) {
        showToast('Please select a category first!', 'warning');
        return;
    }
    
    // Check if category has questions
    if (!quizData.questions[quizState.currentCategory]) {
        showToast(`No questions available for ${quizState.currentCategory} category!`, 'error');
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
    console.log(`Found ${quizState.questions.length} questions for ${quizState.currentCategory}`);
    
    // Filter by difficulty if not "mixed"
    const difficulty = difficultySelect.value;
    if (difficulty !== 'mixed') {
        quizState.questions = quizState.questions.filter(q => q.difficulty === difficulty);
        console.log(`After difficulty filter: ${quizState.questions.length} questions`);
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
    if (category && quizCategory) {
        quizCategory.innerHTML = `<i class="${category.icon}"></i> <span>${category.name}</span>`;
        quizCategory.style.background = `linear-gradient(135deg, ${category.color}, ${category.colorLight})`;
    }
    
    if (totalQuestionsEl) {
        totalQuestionsEl.textContent = quizState.questions.length;
    }
    
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
    if (correctCountEl) correctCountEl.textContent = '0';
    if (incorrectCountEl) incorrectCountEl.textContent = '0';
    if (currentScoreEl) currentScoreEl.textContent = '0';
    if (streakCountEl) streakCountEl.textContent = '0';
    if (progressFill) progressFill.style.width = '0%';
    if (progressPercentage) progressPercentage.textContent = '0%';
}

// Load question
function loadQuestion() {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    
    if (!currentQuestion) {
        console.error('No question found at index:', quizState.currentQuestionIndex);
        return;
    }
    
    // Update question info
    if (currentQuestionEl) currentQuestionEl.textContent = quizState.currentQuestionIndex + 1;
    if (questionText) questionText.textContent = currentQuestion.question;
    
    if (questionDifficulty) {
        questionDifficulty.textContent = currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1);
        questionDifficulty.className = `question-difficulty ${currentQuestion.difficulty}`;
    }
    
    if (questionPoints) questionPoints.textContent = currentQuestion.points;
    
    // Reset hint
    if (questionHint) questionHint.classList.add('hidden');
    if (hintText) hintText.textContent = currentQuestion.hint;
    if (hintBtn) hintBtn.disabled = false;
    
    // Update progress
    const progress = ((quizState.currentQuestionIndex) / quizState.questions.length) * 100;
    if (progressFill) progressFill.style.width = `${progress}%`;
    if (progressPercentage) progressPercentage.textContent = `${Math.round(progress)}%`;
    
    // Create answer buttons
    if (answersContainer) {
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
    }
    
    // Hide next button
    if (nextBtn) nextBtn.classList.add('hidden');
    if (skipBtn) skipBtn.classList.remove('hidden');
    
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
    if (correctCountEl) correctCountEl.textContent = quizState.correctAnswers;
    if (incorrectCountEl) incorrectCountEl.textContent = quizState.incorrectAnswers;
    if (currentScoreEl) currentScoreEl.textContent = quizState.score;
    if (streakCountEl) streakCountEl.textContent = quizState.currentStreak;
    
    // Check for achievements
    checkAchievements();
    
    // Show next button
    if (nextBtn) nextBtn.classList.remove('hidden');
    if (skipBtn) skipBtn.classList.add('hidden');
    
    // Stop timer
    if (quizState.timer) {
        clearInterval(quizState.timer);
        quizState.timer = null;
    }
    
    // Save state
    saveQuizState();
}

// Start timer
function startTimer() {
    quizState.timeLeft = parseInt(timeLimitSelect.value);
    if (timerDisplay) {
        timerDisplay.textContent = quizState.timeLeft;
        timerDisplay.classList.remove('timer-pulse');
    }
    
    quizState.timer = setInterval(() => {
        quizState.timeLeft--;
        quizState.timeTaken++;
        
        if (timerDisplay) {
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
    if (incorrectCountEl) incorrectCountEl.textContent = quizState.incorrectAnswers;
    if (streakCountEl) streakCountEl.textContent = quizState.currentStreak;
    
    showToast('Time\'s up! Moving to next question.', 'warning');
    if (nextBtn) nextBtn.classList.remove('hidden');
    if (skipBtn) skipBtn.classList.add('hidden');
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
    if (incorrectCountEl) incorrectCountEl.textContent = quizState.incorrectAnswers;
    if (streakCountEl) streakCountEl.textContent = quizState.currentStreak;
    
    showToast('Question skipped!', 'info');
    handleNextQuestion();
}

// Show hint
function showHint() {
    if (questionHint) questionHint.classList.remove('hidden');
    if (hintBtn) hintBtn.disabled = true;
    
    // Deduct points for using hint
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    quizState.score -= Math.floor(currentQuestion.points * 0.1);
    if (currentScoreEl) currentScoreEl.textContent = quizState.score;
    
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
    if (scorePercentage) scorePercentage.textContent = `${percentage}%`;
    if (finalCorrect) finalCorrect.textContent = quizState.correctAnswers;
    if (finalTotal) finalTotal.textContent = quizState.questions.length;
    if (timeTaken) timeTaken.textContent = totalTime;
    if (finalScore) finalScore.textContent = quizState.score;
    
    // Update progress circle
    const circle = document.querySelector('.progress-ring-fill');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        
        const offset = circumference - (percentage / 100) * circumference;
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    }
    
    // Show achievements
    displayAchievements();
    
    // Show results screen
    hideAllScreens();
    if (resultsScreen) {
        resultsScreen.classList.remove('hidden-screen');
        resultsScreen.classList.add('active-screen');
    }
    
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
    saveUserProfile();
    loadUserProfile();
}

// Display achievements
function displayAchievements() {
    if (!achievementsList) return;
    
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
        saveUserProfile();
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
    
    let modal;
    if (modalType === 'leaderboard') {
        modal = leaderboardModal;
        updateLeaderboard('daily');
    } else if (modalType === 'profile') {
        modal = profileModal;
    }
    
    if (modal) {
        modal.classList.add('active');
        // Prevent body scrolling while modal is open
        document.body.style.overflow = 'hidden';
    }
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
    if (!leaderboardList) return;
    
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
    // Update profile modal
    const profileName = document.getElementById('profile-name');
    const profileLevel = document.getElementById('profile-level');
    const profileScore = document.getElementById('profile-score');
    const profileQuizzes = document.getElementById('profile-quizzes');
    
    if (profileName) profileName.textContent = userProfile.name;
    if (profileLevel) profileLevel.textContent = `Level ${userProfile.level} Quiz Master`;
    if (profileScore) profileScore.textContent = userProfile.totalScore.toLocaleString();
    if (profileQuizzes) profileQuizzes.textContent = userProfile.quizzesCompleted;
    
    // Update level progress
    if (levelFill && levelPercentage) {
        const levelProgress = (userProfile.experience % 1000) / 10;
        levelFill.style.width = `${levelProgress}%`;
        levelPercentage.textContent = `${levelProgress}%`;
    }
}

// Check for continue quiz
function checkContinueQuiz() {
    const continueBtn = document.getElementById('continue-btn');
    if (!continueBtn) return;
    
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
        try {
            const state = JSON.parse(savedState);
            if (state.quizStarted && !state.quizCompleted) {
                continueBtn.style.display = 'flex';
                continueBtn.addEventListener('click', () => {
                    quizState = state;
                    // Restore timer if needed
                    if (quizState.timer) {
                        clearInterval(quizState.timer);
                        quizState.timer = null;
                    }
                    showCategorySelection();
                    startSelectedQuiz();
                });
                return;
            }
        } catch (e) {
            console.error('Error parsing saved quiz state:', e);
        }
    }
    
    continueBtn.style.display = 'none';
}

// Save quiz state
function saveQuizState() {
    const stateToSave = { ...quizState };
    // Don't save timer function
    stateToSave.timer = null;
    localStorage.setItem('quizState', JSON.stringify(stateToSave));
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeIcon = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    if (themeToggle) {
        themeToggle.innerHTML = `<i class="${themeIcon}"></i>`;
    }
    
    if (mobileThemeToggle) {
        mobileThemeToggle.innerHTML = `<i class="${themeIcon}"></i> ${savedTheme === 'dark' ? 'Light' : 'Dark'} Mode`;
    }
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    const icon = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    if (themeToggle) {
        themeToggle.innerHTML = `<i class="${icon}"></i>`;
    }
    
    if (mobileThemeToggle) {
        mobileThemeToggle.innerHTML = `<i class="${icon}"></i> ${newTheme === 'dark' ? 'Light' : 'Dark'} Mode`;
    }
    
    localStorage.setItem('theme', newTheme);
}

// Show toast notification
function showToast(message, type = 'info') {
    if (!toast) return;
    
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
    
    if (toastIcon) {
        toastIcon.className = `toast-icon ${iconClass}`;
        toastIcon.style.color = borderColor;
    }
    
    if (toastMessage) {
        toastMessage.textContent = message;
    }
    
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