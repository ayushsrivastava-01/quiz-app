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

// Modal buttons
const leaderboardBtn = document.getElementById('leaderboard-btn');
const profileBtn = document.getElementById('profile-btn');
const themeToggle = document.getElementById('theme-toggle');

// Modal elements
const leaderboardModal = document.getElementById('leaderboard-modal');
const profileModal = document.getElementById('profile-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');

// Quiz elements
const categoriesContainer = document.getElementById('categories-container');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const timerDisplay = document.getElementById('timer-display');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');
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

// Settings
const questionCountSelect = document.getElementById('question-count');
const timeLimitSelect = document.getElementById('time-limit');

// Toast
const toast = document.getElementById('toast');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeCategories();
    loadUserProfile();
    setupEventListeners();
    checkContinueQuiz();
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
    
    // Modals
    leaderboardBtn.addEventListener('click', () => showModal('leaderboard'));
    profileBtn.addEventListener('click', () => showModal('profile'));
    themeToggle.addEventListener('click', toggleTheme);
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === leaderboardModal) closeAllModals();
        if (e.target === profileModal) closeAllModals();
    });
    
    // Tab switching in leaderboard
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateLeaderboard(tab.dataset.period);
        });
    });
}

// Initialize categories
function initializeCategories() {
    categoriesContainer.innerHTML = '';
    
    quizData.categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.dataset.category = category.id;
        
        categoryCard.innerHTML = `
            <i class="${category.icon}" style="color: ${category.color}"></i>
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
    document.querySelector('.category-card').classList.add('selected');
    quizState.currentCategory = quizData.categories[0].id;
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

// Show category selection
function showCategorySelection() {
    welcomeScreen.classList.add('hidden');
    categoryScreen.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
}

// Show welcome screen
function showWelcomeScreen() {
    welcomeScreen.classList.remove('hidden');
    categoryScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
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
    
    // Get questions for selected category
    quizState.questions = [...quizData.questions[quizState.currentCategory]];
    
    // Shuffle and limit questions
    shuffleArray(quizState.questions);
    quizState.questions = quizState.questions.slice(0, questionCount);
    
    if (quizState.questions.length === 0) {
        showToast('No questions available for this category!', 'error');
        return;
    }
    
    // Update UI
    categoryScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    // Set quiz info
    const category = quizData.categories.find(c => c.id === quizState.currentCategory);
    quizCategory.innerHTML = `<i class="${category.icon}"></i> <span>${category.name}</span>`;
    quizCategory.style.background = `linear-gradient(135deg, ${category.color}, ${darkenColor(category.color, 20)})`;
    
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
    
    // Save state
    saveQuizState();
}

// Start timer
function startTimer() {
    quizState.timeLeft = parseInt(timeLimitSelect.value);
    timerDisplay.textContent = quizState.timeLeft;
    
    quizState.timer = setInterval(() => {
        quizState.timeLeft--;
        quizState.timeTaken++;
        timerDisplay.textContent = quizState.timeLeft;
        
        // Update timer color based on remaining time
        if (quizState.timeLeft <= 10) {
            timerDisplay.style.color = '#ef4444';
            timerDisplay.style.animation = 'pulse 1s infinite';
        } else if (quizState.timeLeft <= 20) {
            timerDisplay.style.color = '#f59e0b';
        }
        
        if (quizState.timeLeft <= 0) {
            clearInterval(quizState.timer);
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
    clearInterval(quizState.timer);
    quizState.quizCompleted = true;
    
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
    const circle = document.querySelector('.progress-ring-circle');
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
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
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
    if (quizState.correctAnswers === quizState.questions.length) {
        unlockAchievement(2);
    }
    
    // Streak achievement
    if (quizState.currentStreak >= 10) {
        unlockAchievement(5);
    }
}

// Unlock achievement
function unlockAchievement(achievementId) {
    if (!userProfile.achievementsUnlocked.includes(achievementId)) {
        userProfile.achievementsUnlocked.push(achievementId);
        const achievement = quizData.achievements.find(a => a.id === achievementId);
        showToast(`Achievement Unlocked: ${achievement.name}!`, 'success');
    }
}

// Play again
function playAgain() {
    showCategorySelection();
}

// Review answers
function reviewAnswers() {
    let reviewText = "Quiz Review:\n\n";
    
    quizState.selectedAnswers.forEach((answer, index) => {
        reviewText += `Question ${index + 1}: ${answer.question}\n`;
        reviewText += `Your Answer: ${answer.userAnswer}\n`;
        reviewText += `Correct Answer: ${answer.correctAnswer}\n`;
        reviewText += `Result: ${answer.isCorrect ? '✅ Correct' : '❌ Incorrect'}\n`;
        if (answer.explanation) {
            reviewText += `Explanation: ${answer.explanation}\n`;
        }
        reviewText += `\n`;
    });
    
    alert(reviewText);
}

// Share results
function shareResults() {
    const percentage = Math.round((quizState.correctAnswers / quizState.questions.length) * 100);
    const shareText = `I scored ${quizState.score} points (${percentage}%) on QuizMaster Pro! Can you beat my score?`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Quiz Results',
            text: shareText,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(shareText);
        showToast('Results copied to clipboard!', 'success');
    }
}

// Show modal
function showModal(modalType) {
    if (modalType === 'leaderboard') {
        updateLeaderboard('daily');
        leaderboardModal.classList.remove('hidden');
    } else if (modalType === 'profile') {
        profileModal.classList.remove('hidden');
    }
}

// Close all modals
function closeAllModals() {
    leaderboardModal.classList.add('hidden');
    profileModal.classList.add('hidden');
}

// Update leaderboard
function updateLeaderboard(period) {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
    
    quizData.leaderboard.forEach(entry => {
        const leaderboardEntry = document.createElement('div');
        leaderboardEntry.className = 'leaderboard-entry';
        
        leaderboardEntry.innerHTML = `
            <div class="leaderboard-rank">${entry.rank}</div>
            <div class="leaderboard-info">
                <div class="leaderboard-name">${entry.name}</div>
                <div class="leaderboard-score">${entry.score.toLocaleString()} points</div>
            </div>
        `;
        
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
    document.querySelector('.level-fill').style.width = `${levelProgress}%`;
    document.querySelector('.level-progress span').textContent = `${levelProgress}%`;
}

// Check for continue quiz
function checkContinueQuiz() {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
        const continueBtn = document.getElementById('continue-btn');
        continueBtn.classList.remove('hidden');
        continueBtn.addEventListener('click', () => {
            const state = JSON.parse(savedState);
            if (state.quizStarted && !state.quizCompleted) {
                quizState = state;
                showCategorySelection();
                startSelectedQuiz();
            }
        });
    }
}

// Save quiz state
function saveQuizState() {
    localStorage.setItem('quizState', JSON.stringify(quizState));
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    localStorage.setItem('theme', newTheme);
}

// Show toast notification
function showToast(message, type = 'info') {
    const toastIcon = toast.querySelector('i');
    const toastMessage = toast.querySelector('.toast-message');
    
    // Set icon based on type
    switch(type) {
        case 'success':
            toastIcon.className = 'fas fa-check-circle';
            toastIcon.style.color = '#4ade80';
            break;
        case 'error':
            toastIcon.className = 'fas fa-times-circle';
            toastIcon.style.color = '#ef4444';
            break;
        case 'warning':
            toastIcon.className = 'fas fa-exclamation-triangle';
            toastIcon.style.color = '#f59e0b';
            break;
        default:
            toastIcon.className = 'fas fa-info-circle';
            toastIcon.style.color = '#4361ee';
    }
    
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// Utility functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function darkenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';