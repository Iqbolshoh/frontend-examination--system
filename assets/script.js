(function() {
    'use strict';

    // =============================================
    //  MA'LUMOTLAR
    // =============================================
    const subjects = [
        { id: 'math', name: 'Matematika', icon: 'fa-calculator', class: 'math', questions: 10 },
        { id: 'science', name: 'Tabiiy fanlar', icon: 'fa-flask', class: 'science', questions: 8 },
        { id: 'history', name: 'Tarix', icon: 'fa-landmark', class: 'history', questions: 8 },
        { id: 'english', name: 'Ingliz tili', icon: 'fa-language', class: 'english', questions: 10 },
        { id: 'geography', name: 'Geografiya', icon: 'fa-globe', class: 'geography', questions: 8 },
        { id: 'physics', name: 'Fizika', icon: 'fa-atom', class: 'physics', questions: 8 },
        { id: 'chemistry', name: 'Kimyo', icon: 'fa-vial', class: 'chemistry', questions: 8 },
        { id: 'biology', name: 'Biologiya', icon: 'fa-dna', class: 'biology', questions: 8 }
    ];

    // Har bir fan uchun test savollari
    const questionBank = {
        math: [
            { text: "7 × 8 = ?", options: ["48", "56", "64", "72"], correct: 1 },
            { text: "144 ni 12 ga bo'lganda necha chiqadi?", options: ["10", "11", "12", "13"], correct: 2 },
            { text: "5² + 3² = ?", options: ["25", "34", "16", "28"], correct: 1 },
            { text: "Kvadratning tomoni 6 sm bo'lsa, uning perimetri necha sm?", options: ["24", "36", "12", "18"], correct: 0 },
            { text: "0,5 + 0,25 = ?", options: ["0,75", "0,70", "0,80", "0,65"], correct: 0 },
            { text: "12 × 15 = ?", options: ["150", "160", "170", "180"], correct: 3 },
            { text: "Tenglamani yeching: 2x + 5 = 15", options: ["5", "7", "10", "3"], correct: 0 },
            { text: "Yuzi 81 sm² bo'lgan kvadratning tomoni necha sm?", options: ["8", "9", "10", "7"], correct: 1 },
            { text: "15 - 7 + 3 = ?", options: ["5", "11", "9", "7"], correct: 1 },
            { text: "1 km necha metr?", options: ["100", "1000", "10000", "10"], correct: 1 }
        ],
        science: [
            { text: "Suvning kimyoviy formulasi?", options: ["H₂O", "CO₂", "NaCl", "H₂SO₄"], correct: 0 },
            { text: "Qaysi sayyora Quyoshga eng yaqin?", options: ["Venera", "Merkuriy", "Yer", "Mars"], correct: 1 },
            { text: "Yorug'lik tezligi taxminan necha km/s?", options: ["300 000", "150 000", "500 000", "100 000"], correct: 0 },
            { text: "Organizmning eng kichik tuzilish birligi?", options: ["Hujayra", "To'qima", "Organ", "Sistem"], correct: 0 },
            { text: "Qaysi gaz eng ko'p hajmni egallaydi?", options: ["Kislorod", "Vodorod", "Azot", "Karbonat angidrid"], correct: 0 },
            { text: "Suyuqlikning qaynash harorati necha °C?", options: ["0", "50", "100", "200"], correct: 2 },
            { text: "Yerning sun'iy yo'ldoshi?", options: ["Quyosh", "Oy", "Venera", "Mars"], correct: 1 },
            { text: "Qaysi organ qonni tozalaydi?", options: ["Yurak", "O'pka", "Buyrak", "Jigar"], correct: 2 }
        ],
        history: [
            { text: "O'zbekiston mustaqillikka qaysi yili erishdi?", options: ["1990", "1991", "1992", "1989"], correct: 1 },
            { text: "Amir Temur qaysi asrda yashagan?", options: ["XIV", "XV", "XIII", "XVI"], correct: 0 },
            { text: "Birinchi jahon urushi qaysi yillarda bo'lib o'tgan?", options: ["1912-1916", "1914-1918", "1915-1919", "1913-1917"], correct: 1 },
            { text: "Qadimgi Misrning eng mashhur fir'avni?", options: ["Ramses", "Tutankhamon", "Xeops", "Ehnaton"], correct: 1 },
            { text: "Sovet Ittifoqi qaysi yili parchalandi?", options: ["1989", "1990", "1991", "1992"], correct: 2 },
            { text: "Ilk yozuv qaysi tsivilizatsiyada paydo bo'lgan?", options: ["Misr", "Sumer", "Hind", "Xitoy"], correct: 1 },
            { text: "Buyuk Ipak yo'li qaysi davlatlarni bog'lagan?", options: ["Xitoy-Yevropa", "Hind-Yevropa", "Arab-Yevropa", "Monqol-Yevropa"], correct: 0 },
            { text: "Qaysi shahar O'zbekistonning poytaxti?", options: ["Samarqand", "Buxoro", "Toshkent", "Farg'ona"], correct: 2 }
        ],
        english: [
            { text: "What is the plural of 'child'?", options: ["Childs", "Children", "Childrens", "Childes"], correct: 1 },
            { text: "She ___ to school every day.", options: ["go", "goes", "going", "gone"], correct: 1 },
            { text: "What is the opposite of 'hot'?", options: ["Warm", "Cold", "Cool", "Chilly"], correct: 1 },
            { text: "I have ___ apple.", options: ["a", "an", "the", "no"], correct: 1 },
            { text: "They ___ playing football now.", options: ["is", "am", "are", "be"], correct: 2 },
            { text: "What is the past tense of 'eat'?", options: ["eated", "ate", "eaten", "eating"], correct: 1 },
            { text: "Which word is a noun?", options: ["Run", "Beautiful", "Happiness", "Quickly"], correct: 2 },
            { text: "I am ___ student.", options: ["a", "an", "the", "no"], correct: 0 },
            { text: "She can ___ French.", options: ["speaks", "speaking", "speak", "spoken"], correct: 2 },
            { text: "What is the correct spelling?", options: ["Recieve", "Receive", "Receve", "Reecive"], correct: 1 }
        ],
        geography: [
            { text: "O'zbekiston qaysi qit'ada joylashgan?", options: ["Yevropa", "Osiyo", "Afrika", "Avstraliya"], correct: 1 },
            { text: "Dunyodagi eng katta okean?", options: ["Atlantika", "Tinch", "Hind", "Shimoliy Muz"], correct: 1 },
            { text: "Amazon daryosi qaysi mamlakatda?", options: ["Braziliya", "Peru", "Kolumbiya", "Venesuela"], correct: 0 },
            { text: "Eng baland tog' qaysi?", options: ["Everest", "Kilimanjaro", "Elbrus", "Denali"], correct: 0 },
            { text: "O'zbekistonning eng katta shahri?", options: ["Samarqand", "Toshkent", "Buxoro", "Namangan"], correct: 1 },
            { text: "Sahara cho'li qaysi qit'ada?", options: ["Osiyo", "Afrika", "Avstraliya", "Janubiy Amerika"], correct: 1 },
            { text: "Qaysi davlat ikki qit'ada joylashgan?", options: ["Hindiston", "Rossiya", "Misr", "Turkiya"], correct: 3 },
            { text: "Eng katta materik qaysi?", options: ["Afrika", "Osiyo", "Shimoliy Amerika", "Avstraliya"], correct: 1 }
        ],
        physics: [
            { text: "Energiya o'lchov birligi?", options: ["Vatt", "Joul", "Nyuton", "Paskal"], correct: 1 },
            { text: "Kuch o'lchov birligi?", options: ["Joul", "Vatt", "Nyuton", "Paskal"], correct: 2 },
            { text: "Yorug'lik tezligi vakuumda necha m/s?", options: ["3×10⁸", "3×10⁷", "3×10⁹", "3×10⁶"], correct: 0 },
            { text: "Tovush qaysi muhitda eng tez tarqaladi?", options: ["Havo", "Suv", "Metall", "Vakuum"], correct: 2 },
            { text: "Atom yadrosi qanday zarralardan tashkil topgan?", options: ["Proton, neytron", "Proton, elektron", "Neytron, elektron", "Proton, foton"], correct: 0 },
            { text: "Bosim o'lchov birligi?", options: ["Nyuton", "Paskal", "Joul", "Vatt"], correct: 1 },
            { text: "Qaysi narsa o'tkazgich?", options: ["Rezina", "Mis", "Plastmass", "Shisha"], correct: 1 },
            { text: "Yer sirtida og'irlik kuchi taxminan necha m/s²?", options: ["8", "9,8", "10,8", "11,8"], correct: 1 }
        ],
        chemistry: [
            { text: "Suvning kimyoviy formulasi?", options: ["H₂O", "CO₂", "NaCl", "H₂SO₄"], correct: 0 },
            { text: "Kislorodning kimyoviy belgisi?", options: ["O", "O₂", "K", "KO"], correct: 0 },
            { text: "Qaysi modda kislotadir?", options: ["NaOH", "HCl", "NaCl", "H₂O"], correct: 1 },
            { text: "Tuzning kimyoviy formulasi?", options: ["NaCl", "NaOH", "HCl", "H₂O"], correct: 0 },
            { text: "Vodorodning atom massasi?", options: ["1", "2", "16", "12"], correct: 0 },
            { text: "Qaysi gaz olovni o'chiradi?", options: ["Kislorod", "Vodorod", "Karbonat angidrid", "Azot"], correct: 2 },
            { text: "Metall va nometall qanday bog'lanadi?", options: ["Kovalent", "Ion", "Metall", "Vodorod"], correct: 1 },
            { text: "D.I. Mendeleyev qaysi sohada mashhur?", options: ["Fizika", "Kimyo", "Biologiya", "Astronomiya"], correct: 1 }
        ],
        biology: [
            { text: "Organizmning eng kichik tuzilish birligi?", options: ["Hujayra", "To'qima", "Organ", "Sistem"], correct: 0 },
            { text: "O'simliklarning oziqlanish usuli?", options: ["Fotosintez", "Xemosintez", "Geterotrof", "Saprotrof"], correct: 0 },
            { text: "Qon qaysi organ tomonidan tozalanadi?", options: ["Yurak", "O'pka", "Buyrak", "Jigar"], correct: 2 },
            { text: "Nafas olish jarayonida qaysi gaz chiqariladi?", options: ["Kislorod", "Karbonat angidrid", "Azot", "Vodorod"], correct: 1 },
            { text: "Genetika qaysi olim tomonidan asos solingan?", options: ["Darvin", "Mendel", "Lamarck", "Pavlov"], correct: 1 },
            { text: "Mushaklar qanday to'qimadan tashkil topgan?", options: ["Epitelial", "Bog'lovchi", "Muskul", "Nerv"], correct: 2 },
            { text: "Qaysi vitamin A deb ataladi?", options: ["Retinol", "Tiamin", "Askorbin", "Kalsiferol"], correct: 0 },
            { text: "Inson necha juft xromosomaga ega?", options: ["22", "23", "24", "46"], correct: 1 }
        ]
    };

    // Test natijalari tarixi
    let history = JSON.parse(localStorage.getItem('testHistory')) || [];
    let totalTests = history.length;

    // =============================================
    //  DOM ELEMENTLARI
    // =============================================
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const pageTitle = document.getElementById('pageTitle');
    const subjectsGrid = document.getElementById('subjectsGrid');
    const allSubjectsGrid = document.getElementById('allSubjectsGrid');
    const historyList = document.getElementById('historyList');
    const totalTestsEl = document.getElementById('totalTests');
    const avgScoreEl = document.getElementById('avgScore');
    const profileTests = document.getElementById('profileTests');
    const profileAvg = document.getElementById('profileAvg');
    const profileBest = document.getElementById('profileBest');

    // Test modal
    const testModal = document.getElementById('testModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalClose = document.getElementById('modalClose');
    const testTotal = document.getElementById('testTotal');
    const testTime = document.getElementById('testTime');
    const testProgressBar = document.getElementById('testProgressBar');
    const testQNum = document.getElementById('testQNum');
    const testQText = document.getElementById('testQText');
    const testOptions = document.getElementById('testOptions');
    const testPrevBtn = document.getElementById('testPrevBtn');
    const testNextBtn = document.getElementById('testNextBtn');
    const testSubmitBtn = document.getElementById('testSubmitBtn');

    // Result modal
    const resultModal = document.getElementById('resultModal');
    const resultScore = document.getElementById('resultScore');
    const resultCorrect = document.getElementById('resultCorrect');
    const resultWrong = document.getElementById('resultWrong');
    const resultMsg = document.getElementById('resultMsg');
    const resultCloseBtn = document.getElementById('resultCloseBtn');

    // =============================================
    //  HOLAT
    // =============================================
    let currentSubject = null;
    let currentQuestions = [];
    let currentIndex = 0;
    let userAnswers = [];
    let testTimer = null;
    let timeSeconds = 600;

    // =============================================
    //  FUNKSIYALAR
    // =============================================

    // --- Sahifalarni boshqarish ---
    function navigateTo(page) {
        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(`page-${page}`).classList.add('active');
        
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.page === page);
        });

        const titles = {
            home: 'Bosh sahifa',
            subjects: 'Fanlar',
            history: 'Natijalar',
            profile: 'Profil'
        };
        pageTitle.textContent = titles[page] || 'Bosh sahifa';
        
        if (page === 'home') updateHomeStats();
        if (page === 'history') renderHistory();
        if (page === 'profile') updateProfileStats();
        
        // Mobil menyuni yopish
        sidebar.classList.remove('open');
    }

    // --- Fanlarni ko'rsatish ---
    function renderSubjects(container, limit = null) {
        const subjectsToShow = limit ? subjects.slice(0, limit) : subjects;
        container.innerHTML = subjectsToShow.map(sub => `
            <div class="subject-card" data-subject="${sub.id}">
                <div class="subject-icon ${sub.class}">
                    <i class="fas ${sub.icon}"></i>
                </div>
                <h3>${sub.name}</h3>
                <p>${sub.questions} savol</p>
                <div class="subject-questions">
                    <i class="fas fa-play-circle"></i> Testni boshlash
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.subject-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.dataset.subject;
                startTest(id);
            });
        });
    }

    // --- Testni boshlash ---
    function startTest(subjectId) {
        const subject = subjects.find(s => s.id === subjectId);
        if (!subject) return;

        currentSubject = subject;
        currentQuestions = questionBank[subjectId] || [];
        if (currentQuestions.length === 0) {
            alert('Bu fan uchun savollar mavjud emas!');
            return;
        }

        // Savollarni aralashtirish
        currentQuestions = shuffleArray([...currentQuestions]);
        userAnswers = new Array(currentQuestions.length).fill(null);
        currentIndex = 0;
        timeSeconds = Math.min(currentQuestions.length * 60, 600);

        modalTitle.textContent = `${subject.name} - Test`;
        testTotal.textContent = currentQuestions.length;
        testTime.textContent = formatTime(timeSeconds);
        
        testModal.classList.add('active');
        renderTestQuestion();
        startTestTimer();
    }

    // --- Test savolini ko'rsatish ---
    function renderTestQuestion() {
        const q = currentQuestions[currentIndex];
        if (!q) return;

        testQNum.textContent = `Savol ${currentIndex + 1}/${currentQuestions.length}`;
        testQText.textContent = q.text;

        testOptions.innerHTML = '';
        q.options.forEach((optText, idx) => {
            const label = document.createElement('label');
            label.className = 'option-item';
            if (userAnswers[currentIndex] === idx) {
                label.classList.add('selected');
            }

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'testOption';
            radio.value = idx;
            if (userAnswers[currentIndex] === idx) {
                radio.checked = true;
            }

            radio.addEventListener('change', function() {
                const val = parseInt(this.value, 10);
                userAnswers[currentIndex] = val;
                const allOpts = testOptions.querySelectorAll('.option-item');
                allOpts.forEach((item, i) => {
                    item.classList.toggle('selected', i === val);
                });
                updateTestProgress();
            });

            const span = document.createElement('span');
            span.className = 'option-label';
            span.textContent = optText;

            label.appendChild(radio);
            label.appendChild(span);
            testOptions.appendChild(label);
        });

        // Tugmalar holati
        testPrevBtn.disabled = currentIndex === 0;
        testNextBtn.disabled = currentIndex === currentQuestions.length - 1;
        updateTestProgress();
    }

    // --- Test progressi ---
    function updateTestProgress() {
        const answered = userAnswers.filter(a => a !== null).length;
        const total = currentQuestions.length;
        const pct = total > 0 ? (answered / total) * 100 : 0;
        testProgressBar.style.width = pct + '%';
    }

    // --- Test taymeri ---
    function startTestTimer() {
        if (testTimer) clearInterval(testTimer);
        testTimer = setInterval(() => {
            timeSeconds--;
            testTime.textContent = formatTime(timeSeconds);
            
            if (timeSeconds <= 0) {
                clearInterval(testTimer);
                submitTest();
            }
        }, 1000);
    }

    // --- Testni topshirish ---
    function submitTest() {
        if (testTimer) clearInterval(testTimer);
        
        let correct = 0;
        let wrong = 0;
        
        currentQuestions.forEach((q, idx) => {
            const ans = userAnswers[idx];
            if (ans === null) {
                wrong++;
            } else if (ans === q.correct) {
                correct++;
            } else {
                wrong++;
            }
        });

        const total = currentQuestions.length;
        const score = Math.round((correct / total) * 100);
        
        // Natijalarni saqlash
        const result = {
            subject: currentSubject.name,
            subjectId: currentSubject.id,
            date: new Date().toLocaleDateString('uz-UZ'),
            score: score,
            correct: correct,
            wrong: wrong,
            total: total
        };
        
        history.push(result);
        localStorage.setItem('testHistory', JSON.stringify(history));
        totalTests = history.length;

        // Natijani ko'rsatish
        testModal.classList.remove('active');
        showResult(result);
    }

    // --- Natijalarni ko'rsatish ---
    function showResult(result) {
        resultScore.textContent = result.score + '%';
        resultCorrect.textContent = result.correct;
        resultWrong.textContent = result.wrong;
        
        let msg = '';
        if (result.score === 100) msg = '🌟 Ajoyib! Mukammal natija!';
        else if (result.score >= 80) msg = '🎉 Aʼlo daraja! Bilimingiz zoʻr!';
        else if (result.score >= 60) msg = '👍 Yaxshi! Oʻrganishni davom eting!';
        else if (result.score >= 40) msg = '📚 Yomon emas, biroz koʻproq takrorlang.';
        else msg = '💪 Mashq qilishni davom eting, albatta yaxshilanadi!';
        resultMsg.textContent = msg;
        
        resultModal.classList.add('active');
        updateHomeStats();
        renderHistory();
        updateProfileStats();
    }

    // --- Tarixni ko'rsatish ---
    function renderHistory() {
        if (history.length === 0) {
            historyList.innerHTML = `
                <div style="text-align: center; padding: 40px 0; color: var(--gray-500);">
                    <i class="fas fa-inbox" style="font-size: 48px; display: block; margin-bottom: 12px;"></i>
                    <p>Hali hech qanday test topshirilmagan</p>
                </div>
            `;
            return;
        }

        historyList.innerHTML = history.slice().reverse().map(item => {
            const passed = item.score >= 60;
            return `
                <div class="history-item">
                    <div class="h-left">
                        <div class="h-icon ${item.subjectId}">
                            <i class="fas ${subjects.find(s => s.id === item.subjectId)?.icon || 'fa-book'}"></i>
                        </div>
                        <div class="h-info">
                            <h4>${item.subject}</h4>
                            <p>${item.date} • ${item.total} savol</p>
                        </div>
                    </div>
                    <div class="h-score ${passed ? 'pass' : 'fail'}">
                        ${item.score}%
                    </div>
                </div>
            `;
        }).join('');
    }

    // --- Statistika ---
    function updateHomeStats() {
        totalTestsEl.textContent = history.length;
        if (history.length === 0) {
            avgScoreEl.textContent = '0%';
            return;
        }
        const avg = Math.round(history.reduce((sum, h) => sum + h.score, 0) / history.length);
        avgScoreEl.textContent = avg + '%';
    }

    function updateProfileStats() {
        profileTests.textContent = history.length;
        if (history.length === 0) {
            profileAvg.textContent = '0%';
            profileBest.textContent = '0%';
            return;
        }
        const avg = Math.round(history.reduce((sum, h) => sum + h.score, 0) / history.length);
        const best = Math.max(...history.map(h => h.score));
        profileAvg.textContent = avg + '%';
        profileBest.textContent = best + '%';
    }

    // --- Yordamchi funksiyalar ---
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    // =============================================
    //  EVENT LISTENERLAR
    // =============================================

    // Navigatsiya
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.page);
        });
    });

    // Mobil menyu
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Modal yopish
    modalClose.addEventListener('click', () => {
        if (testTimer) clearInterval(testTimer);
        testModal.classList.remove('active');
    });

    resultCloseBtn.addEventListener('click', () => {
        resultModal.classList.remove('active');
    });

    // Test navigatsiya
    testPrevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderTestQuestion();
        }
    });

    testNextBtn.addEventListener('click', () => {
        if (currentIndex < currentQuestions.length - 1) {
            currentIndex++;
            renderTestQuestion();
        }
    });

    testSubmitBtn.addEventListener('click', () => {
        const answered = userAnswers.filter(a => a !== null).length;
        if (answered < currentQuestions.length) {
            if (!confirm(`Hali ${currentQuestions.length - answered} ta savolga javob bermadingiz. Topshirmoqchimisiz?`)) {
                return;
            }
        } else {
            if (!confirm('Testni topshirishga ishonchingiz komilmi?')) {
                return;
            }
        }
        submitTest();
    });

    // Modalni tashqaridan bosish bilan yopish
    testModal.addEventListener('click', (e) => {
        if (e.target === testModal) {
            if (testTimer) clearInterval(testTimer);
            testModal.classList.remove('active');
        }
    });

    resultModal.addEventListener('click', (e) => {
        if (e.target === resultModal) {
            resultModal.classList.remove('active');
        }
    });

    // Klaviatura yordami
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            testModal.classList.remove('active');
            resultModal.classList.remove('active');
        }
    });

    // =============================================
    //  INIT - ISHGA TUSHIRISH
    // =============================================
    function init() {
        renderSubjects(subjectsGrid, 4);
        renderSubjects(allSubjectsGrid);
        renderHistory();
        updateHomeStats();
        updateProfileStats();
    }

    init();

})();