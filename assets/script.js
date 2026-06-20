(function() {
    'use strict';

    // =============================================
    //  MA'LUMOTLAR
    // =============================================
    const institutions = [
        {
            id: 1,
            name: "1-sonli ixtisoslashtirilgan maktab",
            type: "school",
            typeLabel: "Maktab",
            city: "tashkent",
            cityLabel: "Toshkent",
            rating: 4.9,
            reviews: 234,
            description: "Matematika va fizika yo'nalishidagi ixtisoslashtirilgan davlat maktabi. O'quvchilar ko'plab xalqaro olimpiadalarda qatnashadi.",
            address: "Toshkent sh., Yunusobod tumani",
            phone: "+998 71 123 45 67",
            website: "school1.uz",
            founded: 1985,
            students: 1200,
            graduates: 95
        },
        {
            id: 2,
            name: "Prezident maktabi",
            type: "school",
            typeLabel: "Maktab",
            city: "tashkent",
            cityLabel: "Toshkent",
            rating: 4.8,
            reviews: 189,
            description: "Prezident maktabi - iqtidorli o'quvchilar uchun xorijiy tillar va STEM yo'nalishidagi elita maktabi.",
            address: "Toshkent sh., Yakkasaroy tumani",
            phone: "+998 71 234 56 78",
            website: "president.uz",
            founded: 2018,
            students: 800,
            graduates: 98
        },
        {
            id: 3,
            name: "Nodirabegim maktabi",
            type: "school",
            typeLabel: "Maktab",
            city: "samarqand",
            cityLabel: "Samarqand",
            rating: 4.7,
            reviews: 156,
            description: "Samarqanddagi eng qadimgi va nufuzli umumta'lim maktablaridan biri.",
            address: "Samarqand sh., Registon ko'chasi",
            phone: "+998 66 345 67 89",
            website: "nodira.uz",
            founded: 1965,
            students: 1500,
            graduates: 92
        },
        {
            id: 4,
            name: "IT STEP Academy",
            type: "center",
            typeLabel: "O'quv markaz",
            city: "tashkent",
            cityLabel: "Toshkent",
            rating: 4.9,
            reviews: 312,
            description: "Dasturlash, dizayn va IT sohasidagi eng yaxshi o'quv markaz. Xalqaro sertifikatlar.",
            address: "Toshkent sh., Mustaqillik ko'chasi",
            phone: "+998 71 456 78 90",
            website: "itstep.uz",
            founded: 2010,
            students: 2500,
            graduates: 93
        },
        {
            id: 5,
            name: "British Council",
            type: "center",
            typeLabel: "O'quv markaz",
            city: "tashkent",
            cityLabel: "Toshkent",
            rating: 4.8,
            reviews: 278,
            description: "Ingliz tili va IELTS tayyorlov markazi. Britaniya metodikasi asosida ta'lim beradi.",
            address: "Toshkent sh., Pushkin ko'chasi",
            phone: "+998 71 567 89 01",
            website: "britishcouncil.uz",
            founded: 2005,
            students: 1800,
            graduates: 96
        },
        {
            id: 6,
            name: "Abu Rayhon Beruniy markazi",
            type: "center",
            typeLabel: "O'quv markaz",
            city: "buxoro",
            cityLabel: "Buxoro",
            rating: 4.6,
            reviews: 145,
            description: "Matematika, fizika va kimyo fanlaridan ixtisoslashtirilgan o'quv markazi.",
            address: "Buxoro sh., Alisher Navoiy ko'chasi",
            phone: "+998 65 678 90 12",
            website: "beruniy.uz",
            founded: 2012,
            students: 600,
            graduates: 90
        },
        {
            id: 7,
            name: "Toshkent Davlat Texnika Universiteti",
            type: "university",
            typeLabel: "Universitet",
            city: "tashkent",
            cityLabel: "Toshkent",
            rating: 4.7,
            reviews: 456,
            description: "O'zbekistonning eng yirik texnik universiteti. Muhandislik, IT va texnologiya yo'nalishlari.",
            address: "Toshkent sh., Universitet ko'chasi",
            phone: "+998 71 789 01 23",
            website: "tdtu.uz",
            founded: 1918,
            students: 12000,
            graduates: 94
        },
        {
            id: 8,
            name: "Toshkent Davlat Iqtisodiyot Universiteti",
            type: "university",
            typeLabel: "Universitet",
            city: "tashkent",
            cityLabel: "Toshkent",
            rating: 4.6,
            reviews: 389,
            description: "Iqtisodiyot, menejment va moliya sohasidagi eng nufuzli universitet.",
            address: "Toshkent sh., A.Temur ko'chasi",
            phone: "+998 71 890 12 34",
            website: "tsue.uz",
            founded: 1931,
            students: 10000,
            graduates: 91
        },
        {
            id: 9,
            name: "Samarqand Davlat Universiteti",
            type: "university",
            typeLabel: "Universitet",
            city: "samarqand",
            cityLabel: "Samarqand",
            rating: 4.5,
            reviews: 321,
            description: "O'zbekistonning eng qadimgi universitetlaridan biri. Gumanitar va tabiiy fanlar.",
            address: "Samarqand sh., Universitet xiyoboni",
            phone: "+998 66 901 23 45",
            website: "samdu.uz",
            founded: 1927,
            students: 8500,
            graduates: 89
        },
        {
            id: 10,
            name: "Inha University in Tashkent",
            type: "university",
            typeLabel: "Universitet",
            city: "tashkent",
            cityLabel: "Toshkent",
            rating: 4.8,
            reviews: 234,
            description: "Koreya metodikasi asosidagi zamonaviy universitet. AI va telekommunikatsiya.",
            address: "Toshkent sh., Yunusobod tumani",
            phone: "+998 71 012 34 56",
            website: "inha.uz",
            founded: 2014,
            students: 1500,
            graduates: 97
        },
        {
            id: 11,
            name: "Qarshi Davlat Universiteti",
            type: "university",
            typeLabel: "Universitet",
            city: "qarshi",
            cityLabel: "Qarshi",
            rating: 4.4,
            reviews: 178,
            description: "Pedagogika va ta'lim sohasidagi yetakchi universitet.",
            address: "Qarshi sh., Navoiy ko'chasi",
            phone: "+998 75 123 45 67",
            website: "qdu.uz",
            founded: 1945,
            students: 4000,
            graduates: 85
        },
        {
            id: 12,
            name: "Westminster International University",
            type: "university",
            typeLabel: "Universitet",
            city: "tashkent",
            cityLabel: "Toshkent",
            rating: 4.9,
            reviews: 412,
            description: "Xalqaro universitet. Biznes, iqtisodiyot va IT bo'yicha ingliz tilida ta'lim.",
            address: "Toshkent sh., I.Karimov ko'chasi",
            phone: "+998 71 234 56 78",
            website: "wiut.uz",
            founded: 2002,
            students: 3000,
            graduates: 98
        }
    ];

    const testimonials = [
        {
            name: "Dilnoza",
            role: "Maktab o'quvchisi",
            text: "Ta'lim Maskani orqali eng yaxshi maktabni topdim. Hozir matematika olimpiadalarida qatnashyapman!"
        },
        {
            name: "Jasur",
            role: "Universitet talabasi",
            text: "Universitet tanlashda juda ko'p yordam berdi. Barcha ma'lumotlar va reytinglar aniq va ishonchli."
        },
        {
            name: "Madina",
            role: "O'quv markaz o'quvchisi",
            text: "IT kurslarini topishda ajoyib platforma. Ingliz tilini ham shu yerdan topib oldim."
        },
        {
            name: "Sardor",
            role: "Bitiruvchi",
            text: "Westminster universitetini Ta'lim Maskani orqali tanladim. Hozir muvaffaqiyatli ishlab yapman."
        }
    ];

    // =============================================
    //  DOM ELEMENTLAR
    // =============================================
    const grid = document.getElementById('institutionsGrid');
    const searchInput = document.getElementById('searchInput');
    const typeFilter = document.getElementById('typeFilter');
    const cityFilter = document.getElementById('cityFilter');
    const searchForm = document.getElementById('searchForm');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const modal = document.getElementById('institutionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const themeToggle = document.getElementById('themeToggle');

    let visibleCount = 6;
    let filteredInstitutions = [...institutions];

    // =============================================
    //  DARK MODE
    // =============================================
    function toggleTheme() {
        const html = document.documentElement;
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    }

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', toggleTheme);

    // =============================================
    //  SVG IKONKALAR
    // =============================================
    const icons = {
        school: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
        center: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
        university: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="4" y="10" width="16" height="12" rx="2"/><path d="M12 6v4"/><path d="M8 10v6"/><path d="M16 10v6"/></svg>`
    };

    function getCardClass(type) {
        const classes = { school: 'school', center: 'center', university: 'university' };
        return classes[type] || 'school';
    }

    // =============================================
    //  RENDER
    // =============================================
    function renderStars(rating) {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5 ? 1 : 0;
        const empty = 5 - full - half;
        return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
    }

    function renderInstitutions(items) {
        if (items.length === 0) {
            grid.innerHTML = `
                <div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-secondary);">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="display:block;margin:0 auto 16px;">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="M21 21L16.65 16.65"/>
                    </svg>
                    <h3>Hech narsa topilmadi</h3>
                    <p>Qidiruv shartlarini o'zgartirib ko'ring</p>
                </div>
            `;
            return;
        }

        const visible = items.slice(0, visibleCount);
        grid.innerHTML = visible.map(item => `
            <div class="institution-card" data-id="${item.id}">
                <div class="card-header">
                    <div class="card-icon ${getCardClass(item.type)}">
                        ${icons[item.type] || icons.school}
                    </div>
                    <div class="card-title">
                        <h3>${item.name}</h3>
                        <span class="card-type">${item.typeLabel} • ${item.cityLabel}</span>
                        <div class="card-rating">
                            <span class="stars">${renderStars(item.rating)}</span>
                            <span class="rating-text">${item.rating}</span>
                            <span style="font-size:13px;color:var(--text-secondary);">(${item.reviews})</span>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <p>${item.description}</p>
                </div>
                <div class="card-meta">
                    <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        ${item.founded}
                    </span>
                    <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        ${item.students}+
                    </span>
                    <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                            <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>
                        </svg>
                        ${item.graduates}%
                    </span>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.institution-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.dataset.id);
                const item = institutions.find(i => i.id === id);
                if (item) openModal(item);
            });
        });

        if (visibleCount >= items.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }

    function renderTestimonials() {
        testimonialsGrid.innerHTML = testimonials.map(t => `
            <div class="testimonial-card">
                <div class="quote">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A29BFE" stroke-width="2">
                        <path d="M10 11h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"/>
                        <path d="M18 11h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"/>
                        <path d="M10 15a4 4 0 0 0-4 4v3h4"/>
                        <path d="M18 15a4 4 0 0 0-4 4v3h4"/>
                    </svg>
                </div>
                <p>"${t.text}"</p>
                <div class="author">
                    <div class="author-avatar">${t.name[0]}</div>
                    <div class="author-info">
                        <h4>${t.name}</h4>
                        <p>${t.role}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // =============================================
    //  MODAL
    // =============================================
    function openModal(item) {
        modalTitle.textContent = item.name;
        modalBody.innerHTML = `
            <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px;">
                <span style="background:var(--primary-bg);color:var(--primary);padding:4px 16px;border-radius:60px;font-size:13px;font-weight:600;">${item.typeLabel}</span>
                <span style="background:var(--bg-input);color:var(--text-secondary);padding:4px 16px;border-radius:60px;font-size:13px;">${item.cityLabel}</span>
                <span style="background:#FDCB6E20;color:#FDCB6E;padding:4px 16px;border-radius:60px;font-size:13px;font-weight:600;">
                    ★ ${item.rating} (${item.reviews} sharh)
                </span>
            </div>
            <p style="font-size:16px;line-height:1.8;margin-bottom:20px;color:var(--text-secondary);">${item.description}</p>
            <div style="background:var(--bg-input);border-radius:var(--radius);padding:16px 20px;">
                <div class="detail-row"><span class="label">📍 Manzil</span><span class="value">${item.address}</span></div>
                <div class="detail-row"><span class="label">📞 Telefon</span><span class="value">${item.phone}</span></div>
                <div class="detail-row"><span class="label">🌐 Veb-sayt</span><span class="value"><a href="#" style="color:var(--primary);text-decoration:none;">${item.website}</a></span></div>
                <div class="detail-row"><span class="label">📅 Tashkil etilgan</span><span class="value">${item.founded}</span></div>
                <div class="detail-row"><span class="label">👨‍🎓 O'quvchilar</span><span class="value">${item.students}+</span></div>
                <div class="detail-row"><span class="label">🎓 Bitiruv statistikasi</span><span class="value">${item.graduates}%</span></div>
            </div>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // =============================================
    //  FILTER
    // =============================================
    function filterInstitutions(e) {
        if (e) e.preventDefault();
        
        const search = searchInput.value.toLowerCase().trim();
        const type = typeFilter.value;
        const city = cityFilter.value;

        filteredInstitutions = institutions.filter(item => {
            const matchSearch = item.name.toLowerCase().includes(search) || 
                               item.description.toLowerCase().includes(search);
            const matchType = type === 'all' || item.type === type;
            const matchCity = city === 'all' || item.city === city;
            return matchSearch && matchType && matchCity;
        });

        visibleCount = 6;
        renderInstitutions(filteredInstitutions);
    }

    // =============================================
    //  ANIMATSION NUMBERS
    // =============================================
    function animateNumbers() {
        document.querySelectorAll('.stat-number').forEach(el => {
            const target = parseInt(el.dataset.count);
            const duration = 2000;
            const steps = 60;
            const stepValue = target / steps;
            let current = 0;
            let count = 0;
            
            const interval = setInterval(() => {
                count++;
                current += stepValue;
                if (count >= steps) {
                    current = target;
                    clearInterval(interval);
                }
                el.textContent = Math.round(current).toLocaleString();
            }, duration / steps);
        });
    }

    // =============================================
    //  NAVIGATION
    // =============================================
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const target = this.getAttribute('href');
            if (target && target.startsWith('#') && target !== '#home') {
                const el = document.querySelector(target);
                if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            navLinks.classList.remove('open');
        });
    });

    // =============================================
    //  EVENT LISTENERLAR
    // =============================================
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    searchForm.addEventListener('submit', filterInstitutions);
    searchInput.addEventListener('input', filterInstitutions);
    typeFilter.addEventListener('change', filterInstitutions);
    cityFilter.addEventListener('change', filterInstitutions);

    loadMoreBtn.addEventListener('click', () => {
        visibleCount += 6;
        renderInstitutions(filteredInstitutions);
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // =============================================
    //  SMOOTH SCROLL
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // =============================================
    //  INIT
    // =============================================
    function init() {
        renderInstitutions(institutions);
        renderTestimonials();
        animateNumbers();
    }

    init();

})();