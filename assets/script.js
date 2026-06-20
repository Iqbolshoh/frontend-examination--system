(function() {
    "use strict";

    // ---------- Savollar ----------
    const questions = [
        {
            id: 1,
            text: "Fransiyaning poytaxti qaysi?",
            options: ["Berlin", "Madrid", "Parij", "Rim"],
            correct: 2
        },
        {
            id: 2,
            text: "Qaysi sayyora 'Qizil sayyora' deb ataladi?",
            options: ["Venera", "Mars", "Yupiter", "Saturn"],
            correct: 1
        },
        {
            id: 3,
            text: "7 × 8 nechaga teng?",
            options: ["48", "56", "64", "72"],
            correct: 1
        },
        {
            id: 4,
            text: "'Romeo va Julietta' asarini kim yozgan?",
            options: ["Charlz Dikkens", "Uilyam Shekspir", "Mark Tven", "Jeyn Ostin"],
            correct: 1
        },
        {
            id: 5,
            text: "Qaysi elementning kimyoviy belgisi 'O'?",
            options: ["Oltin", "Kislorod", "Osmium", "Oganesson"],
            correct: 1
        }
    ];

    // ---------- DOM elementlari ----------
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const currentQNum = document.getElementById('currentQNum');
    const totalQNum = document.getElementById('totalQNum');
    const progressFill = document.getElementById('progressFill');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const timerDisplay = document.getElementById('timerDisplay');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const restartBtn = document.getElementById('restartBtn');
    const resultPanel = document.getElementById('resultPanel');
    const finalScore = document.getElementById('finalScore');
    const resultMessage = document.getElementById('resultMessage');

    // ---------- Holat ----------
    let currentIndex = 0;
    let userAnswers = new Array(questions.length).fill(null);
    let score = 0;
    let examSubmitted = false;
    let timeSeconds = 900; // 15 daqiqa
    let timerInterval = null;

    // ---------- Savolni ko'rsatish ----------
    function renderQuestion(index) {
        if (examSubmitted) return;
        const q = questions[index];
        if (!q) return;

        questionText.textContent = q.text;

        optionsContainer.innerHTML = '';
        q.options.forEach((optText, optIdx) => {
            const label = document.createElement('label');
            label.className = 'option-item';
            if (userAnswers[index] === optIdx) {
                label.classList.add('selected');
            }

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'question';
            radio.value = optIdx;
            if (userAnswers[index] === optIdx) {
                radio.checked = true;
            }

            radio.addEventListener('change', function() {
                if (examSubmitted) return;
                const val = parseInt(this.value, 10);
                userAnswers[currentIndex] = val;
                const allOpts = optionsContainer.querySelectorAll('.option-item');
                allOpts.forEach((item, idx) => {
                    item.classList.toggle('selected', idx === val);
                });
                updateScoreAndProgress();
            });

            const span = document.createElement('span');
            span.className = 'option-label';
            span.textContent = optText;

            label.appendChild(radio);
            label.appendChild(span);
            optionsContainer.appendChild(label);
        });

        currentQNum.textContent = index + 1;
        totalQNum.textContent = questions.length;
        updateScoreAndProgress();
        updateNavButtons();
    }

    // ---------- Ball va progressni yangilash ----------
    function updateScoreAndProgress() {
        let correctCount = 0;
        for (let i = 0; i < questions.length; i++) {
            const ans = userAnswers[i];
            if (ans !== null && ans === questions[i].correct) {
                correctCount++;
            }
        }
        score = correctCount;
        scoreDisplay.textContent = score;

        const answered = userAnswers.filter(a => a !== null).length;
        const total = questions.length;
        const pct = total > 0 ? (answered / total) * 100 : 0;
        progressFill.style.width = pct + '%';
    }

    // ---------- Tugmalar holati ----------
    function updateNavButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === questions.length - 1;
    }

    // ---------- Taymer ----------
    function startTimer() {
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (examSubmitted) return;
            if (timeSeconds <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = '00:00';
                if (!examSubmitted) {
                    submitExam();
                }
                return;
            }
            timeSeconds--;
            const mins = Math.floor(timeSeconds / 60);
            const secs = timeSeconds % 60;
            timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }, 1000);
    }

    // ---------- Imtihonni topshirish ----------
    function submitExam() {
        if (examSubmitted) return;
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        examSubmitted = true;

        const radios = document.querySelectorAll('#optionsContainer input[type="radio"]');
        radios.forEach(r => r.disabled = true);
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        submitBtn.disabled = true;

        updateScoreAndProgress();
        resultPanel.classList.add('show');
        finalScore.textContent = score;

        const total = questions.length;
        const pct = Math.round((score / total) * 100);
        let msg = '';
        if (pct === 100) msg = '🌟 Ajoyib! Mukammal natija!';
        else if (pct >= 80) msg = '🎉 Aʼlo daraja! Bilimingiz zoʻr.';
        else if (pct >= 60) msg = '👍 Yaxshi! Oʻrganishni davom eting.';
        else if (pct >= 40) msg = '📚 Yomon emas, biroz koʻproq takrorlang.';
        else msg = '💪 Mashq qilish davom eting, albatta yaxshilanadi!';
        resultMessage.textContent = msg;
    }

    // ---------- Qayta boshlash ----------
    function restartExam() {
        clearInterval(timerInterval);
        timerInterval = null;
        examSubmitted = false;
        currentIndex = 0;
        userAnswers = new Array(questions.length).fill(null);
        score = 0;
        timeSeconds = 900;
        timerDisplay.textContent = '15:00';

        submitBtn.disabled = false;
        prevBtn.disabled = false;
        nextBtn.disabled = false;
        resultPanel.classList.remove('show');

        renderQuestion(currentIndex);
        const radios = document.querySelectorAll('#optionsContainer input[type="radio"]');
        radios.forEach(r => r.disabled = false);
        updateScoreAndProgress();
        startTimer();
    }

    // ---------- Navigatsiya ----------
    function goToPrev() {
        if (examSubmitted) return;
        if (currentIndex > 0) {
            currentIndex--;
            renderQuestion(currentIndex);
        }
    }

    function goToNext() {
        if (examSubmitted) return;
        if (currentIndex < questions.length - 1) {
            currentIndex++;
            renderQuestion(currentIndex);
        }
    }

    // ---------- Ishga tushirish ----------
    function init() {
        totalQNum.textContent = questions.length;
        renderQuestion(0);
        updateScoreAndProgress();
        startTimer();

        prevBtn.addEventListener('click', goToPrev);
        nextBtn.addEventListener('click', goToNext);
        submitBtn.addEventListener('click', function() {
            if (!examSubmitted) {
                if (confirm('Imtihonni topshirishga ishonchingiz komilmi?')) {
                    submitExam();
                }
            }
        });
        restartBtn.addEventListener('click', restartExam);
    }

    init();
})();