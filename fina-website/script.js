
// Promos Data
const promosData = [
    {
        id: "aperitivos-2x1",
        title: "2x1 Aperitivos",
        image: "images/2x1_whatsapp.webp", // Fallback, will be dynamic
        desc: "Miércoles de 20:00 a 22:30 hs."
    },
    {
        id: "gin-tonic-2x1",
        title: "2x1 en Gin Tonic",
        image: "images/Gin Tonic.webp",
        desc: "Jueves de 20:00 a 22:30 hs."
    }
];

// Realistic Google Reviews Data (Actual reviews from Google Maps 2026)
const reviewsData = [
    { text: "Excelente todo! Recomiendo a todos pasar alguna vez por este local. Pocos como este en Rio IV!", author: "Cristian Fischer", avatar: "https://ui-avatars.com/api/?name=Cristian+Fischer&background=1e3932&color=d4af37&rounded=true" },
    { text: "Hermoso bar, distinto... la comida excelente y mención aparte para la provoleta que me encantó. Los tragos muy buenos, tanto los clásicos como los que son más elaborados!", author: "Santi Gregorat", avatar: "https://ui-avatars.com/api/?name=Santi+Gregorat&background=1e3932&color=d4af37&rounded=true" },
    { text: "Muy buena coctelería y gastronomía, ambiente ameno y tranquilo recomendable.", author: "Federico G.", avatar: "https://ui-avatars.com/api/?name=Federico+G.&background=1e3932&color=d4af37&rounded=true" },
    { text: "Tremendo lugar!! Muy buen ambiente, muy buena la atención, muy buena la comida, y de los tragos ni hablar. La estética, cierra por todos lados.", author: "Matias Brignone", avatar: "https://ui-avatars.com/api/?name=Matias+Brignone&background=1e3932&color=d4af37&rounded=true" },
    { text: "Fui con mi novia a tomar un par de tragos, el ambiente súper tranquilo con una buena carta de cocteles a un buen precio... Los que nosotros nos pedimos estaban muy ricos.", author: "Angel Rufer", avatar: "https://ui-avatars.com/api/?name=Angel+Rufer&background=1e3932&color=d4af37&rounded=true" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Prevent browser from restoring previous scroll position on reload
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const path = window.location.pathname;
    const isMenuPage = path.includes('menu.html') || document.getElementById('menu-container');
    const isHomePage = !isMenuPage; // Simplified check

    // --- RENDER MENU (Only on menu.html) ---
    const menuContainer = document.getElementById('menu-container');

    window.imageMapping = {
        "Aperol Spritz": "images/Aperol Spritz.webp",
        "Blue Margarita": "images/Blu Margarita.webp",
        "Branca Smash": "images/Branca Smash.webp",
        "Candy Irish": "images/Candy Irish.webp",
        "Caprichosa": "images/Caprichosa.webp",
        "Cheese Burguer": "images/Cheese Burguer.webp",
        "Cobá": "images/Coba.webp",
        "Crazy Quince": "images/Crazy Quince.webp",
        "Cynar Julep": "images/Cynar Julep.webp",
        "Dry Martini": "images/Dry Martini.webp",
        "El Cesar": "images/El Cesar.webp",
        "Empanadas Capresse": "images/Empanadas caprese.webp",
        "Empanada de Carne": "images/Empanada de Carne.webp",
        "Ensalada Caesar": "images/Ensalada Cesar.webp",
        "Ensalada Mariscona": "images/Ensalada Mariscona.webp",
        "Fernet Branca": "images/Fernet Branca.webp",
        "Gaucho Martin Fierro": "images/Gaucho Martin Fierro.webp",
        "Gin Tonic": "images/Gin Tonic.webp",
        "Golden Boulevard": "images/Golden Boulevard.webp",
        "Hamburguesa Azul": "images/Hamburguesa Azul.webp",
        "Heineken": "images/Heineken TIrada.webp",
        "Hot Chilli": "images/Hot Chili.webp",
        "La Havana Angosta": "images/La Havana Angosta.webp",
        "Lomo Clásico": "images/Lomo clasico.webp",
        "Luna de Otoño": "images/Luna de otoño.webp",
        "Moscow Mule": "images/Moscow Mule.webp",
        "Negroni": "images/Negroni.webp",
        "Papas Bravas": "images/Papas bravas.webp",
        "Papas con Cheddar": "images/Papas con Cheddar.webp",
        "Pinky Cerebro": "images/Pinky Cerebro.webp",
        "Provoleta": "images/Provoleta.webp",
        "Rabas": "images/Rabas.webp",
        "Ramazzotti": "images/Ramazoti Spritz.webp",
        "Roast Beef Sandwich": "images/Roast Beef Sandwich.webp",
        "Rosso": "images/Rosso.webp",
        "Secreto del Eden": "images/Secreto de Eden.webp",
        "Segundo Intento": "images/Segundo Intento.webp",
        "Southside": "images/Southside.webp",
        "Tabla de Fiambres": "images/Tabla de Fiambres.webp",
        "Tabla de Mar": "images/Tabla de Mar.webp",
        "Tabla de Quesos": "images/Tabla de quesos.webp",
        "Tacos de birria": "images/Tacos de birria.webp",
        "Tacos de pollo": "images/Tacos de pollo.webp",
        "Tom Collins": "images/Tom Collins.webp",
        "Tortilla Babé": "images/Tortilla Babe.webp"
    };

    // --- RENDER PROMOS (On any page with #promo-container) ---
    const promoContainer = document.getElementById('promo-container');
    if (promoContainer && promosData && promosData.length > 0) {
        // --- 1. PROMOS SECTION ---
        const promoSection = document.createElement('div');
        promoSection.className = 'promo-section-container';

        let promosHtml = '';
        promosData.forEach(promo => {
            promosHtml += `
                <div class="promo-card" id="${promo.id}">
                    <img src="${promo.image}" alt="${promo.title}" class="promo-img" loading="lazy" decoding="async">
                    <div class="promo-overlay">
                        <h3>${promo.title}</h3>
                        <p>${promo.desc}</p>
                    </div>
                </div>
            `;
        });

        promoSection.innerHTML = `
            <div class="promo-scroll-snap">
                ${promosHtml}
            </div>
        `;
        promoContainer.appendChild(promoSection);

    }

    if (menuContainer && isMenuPage) {

        // Fetch menu data asynchronously
        fetch('menu.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(menuData => {
                const categoryNav = document.getElementById('category-nav');

                // Group data by Parent
                const groups = {};
                const groupOrder = ["Cócteles", "Vinos", "Bebidas", "Medidas", "Comida"]; // Explicit order

                menuData.forEach(cat => {
                    if (cat.parent) {
                        if (!groups[cat.parent]) {
                            groups[cat.parent] = [];
                        }
                        groups[cat.parent].push(cat);
                    } else {
                        // Fallback for any missed categories
                        if (!groups['Otros']) groups['Otros'] = [];
                        groups['Otros'].push(cat);
                    }
                });

                let isScrollingByClick = false;

                // Category Navigation Click Handler
                if (categoryNav) {
                    // Sort by explicit order
                    const sortedKeys = Object.keys(groups).sort((a, b) => {
                        const indexA = groupOrder.indexOf(a);
                        const indexB = groupOrder.indexOf(b);
                        return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
                    });

                    sortedKeys.forEach((parentName, index) => {
                        const groupId = `group-${index}`;
                        const btn = document.createElement('button');
                        btn.className = 'cat-btn';
                        btn.textContent = parentName;
                        btn.dataset.target = groupId;

                        btn.addEventListener('click', () => {
                            isScrollingByClick = true; // Lock observer updates

                            // Reset search and filter to "Todos" automatically
                            const searchBox = document.getElementById('menu-search');
                            if (searchBox) {
                                searchBox.value = "";
                            }
                            const allFilterChip = document.querySelector('.chip[data-filter="all"]');
                            if (allFilterChip && !allFilterChip.classList.contains('active')) {
                                allFilterChip.click();
                            } else if (searchBox) {
                                // If already on "Todos" but search is active, trigger input event manually to clear
                                searchBox.dispatchEvent(new Event('input'));
                            }

                            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
                            btn.classList.add('active');

                            // Center horizontally in the nav
                            const navContainer = document.getElementById('category-nav');
                            if (navContainer) {
                                const btnRect = btn.getBoundingClientRect();
                                const navRect = navContainer.getBoundingClientRect();
                                navContainer.scrollBy({
                                    left: btnRect.left - navRect.left - (navRect.width / 2) + (btnRect.width / 2),
                                    behavior: 'smooth'
                                });
                            }

                            // Smooth scroll to the group
                            const targetEl = document.getElementById(groupId);
                            if (targetEl) {
                                // Calculate offset to account for fixed header + category nav
                                const headerHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 0;
                                const navHeight = categoryNav ? categoryNav.offsetHeight : 0;
                                const offset = headerHeight + navHeight + 20; // 20px extra padding

                                const elementPosition = targetEl.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - offset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                });

                                // Unlock observer updates after scrolling finishes
                                setTimeout(() => {
                                    isScrollingByClick = false;
                                }, 800); // 800ms covers the smooth scroll duration
                            }
                        });


                        categoryNav.appendChild(btn);
                        if (index === 0) btn.classList.add('active');
                    });

                    // Render Groups - OPTIMIZED WITH DOCUMENT FRAGMENT
                    const fragment = document.createDocumentFragment();

                    sortedKeys.forEach((parentName, groupIndex) => {
                        const groupContainer = document.createElement('div');
                        groupContainer.className = 'menu-group';
                        groupContainer.id = `group-${groupIndex}`;

                        // Group Header
                        const groupHeader = document.createElement('h2');
                        groupHeader.className = 'group-title';
                        groupHeader.textContent = parentName;
                        groupContainer.appendChild(groupHeader);

                        let groupHtml = ''; // Use string concat for inner contents to minimize DOM reflows

                        groups[parentName].forEach((cat) => {
                            let cardsHtml = '';

                            cat.items.forEach(item => {
                                const categoriesWithImages = [
                                    "Cocktelería de Autor", "Tikis", "Cocktelería Clásica",
                                    "Para Picotear", "Para Compartir", "Platos Principales"
                                ];
                                const showImage = categoriesWithImages.includes(cat.category);
                                const cardClass = showImage ? 'menu-card' : 'menu-card compact-card';

                                let tagsData = item.tags ? `data-tags="${item.tags.join(' ')}"` : '';
                                let historyData = item.history ? `data-history="${item.history.replace(/"/g, '&quot;')}"` : '';
                                let pairingData = item.pairing ? `data-pairing="${item.pairing.replace(/"/g, '&quot;')}"` : '';

                                let imageHtml = '';
                                if (showImage) {
                                    let defaultImg = 'images/default-wine.svg';
                                    if (cat.parent === 'Cócteles' || cat.parent === 'Bebidas' || cat.parent === 'Medidas') {
                                        defaultImg = 'images/default-cocktail.svg';
                                    } else if (cat.parent === 'Comida') {
                                        defaultImg = 'images/default-food.svg';
                                    }

                                    let imgSrc = window.imageMapping[item.name] || defaultImg;
                                    // Added loading="lazy" and decoding="async" for heavy performance boost on mobile
                                    imageHtml = `
                                    <div class="card-image">
                                        <img src="${imgSrc}" alt="${item.name}" loading="lazy" decoding="async">
                                    </div>`;
                                }

                                cardsHtml += `
                                    <div class="${cardClass}" ${tagsData} ${historyData} ${pairingData}>
                                        ${imageHtml}
                                        <div class="card-content">
                                            <div class="card-header">
                                                <span class="card-title">${item.name}</span>
                                                <span class="card-title" style="color:var(--text-light); text-align:right;">${item.price}</span>
                                            </div>
                                            ${item.desc ? `<p class="card-desc">${item.desc}</p>` : ''}
                                        </div>
                                    </div>
                                `;
                            });

                            groupHtml += `
                                <div class="menu-category">
                                    <h3 class="category-title">${cat.category}</h3>
                                    <div class="menu-grid">
                                        ${cardsHtml}
                                    </div>
                                </div>
                            `;
                        });

                        // Append the big HTML string to the group container at once
                        groupContainer.insertAdjacentHTML('beforeend', groupHtml);
                        fragment.appendChild(groupContainer);
                    });

                    // Single reflow when attaching to the actual DOM
                    menuContainer.appendChild(fragment);
                }

                // Appear Animation Lazy Load (Fixes PC lag spike)
                // Instead of adding .visible to ALL 100+ cards instantly, we fade them in strictly as they appear on screen.
                const appearObserverOptions = {
                    threshold: 0.1,
                    rootMargin: "50px 0px"
                };

                const appearObserver = new IntersectionObserver((entries, obs) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            obs.unobserve(entry.target); // Stop observing once visible to save memory
                        }
                    });
                }, appearObserverOptions);

                document.querySelectorAll('.menu-category, .menu-card').forEach(el => {
                    appearObserver.observe(el);
                });

                // Scroll Spy for Category Navigation
                const spyOptions = {
                    root: null,
                    rootMargin: '-20% 0px -40% 0px', // Wider detection zone to catch fast scrolling
                    threshold: 0
                };

                const spyObserver = new IntersectionObserver((entries) => {
                    if (isScrollingByClick) return; // Prevent observer from reacting during smooth scrolls

                    let activeId = null;
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            activeId = entry.target.id;
                        }
                    });

                    if (activeId) {
                        document.querySelectorAll('.cat-btn').forEach(btn => {
                            btn.classList.remove('active');
                            if (btn.dataset.target === activeId) {
                                btn.classList.add('active');
                                // Scroll the active button into view within the horizontal scroll container
                                const navContainer = document.getElementById('category-nav');
                                if (navContainer) {
                                    const btnRect = btn.getBoundingClientRect();
                                    const navRect = navContainer.getBoundingClientRect();

                                    if (btnRect.left < navRect.left || btnRect.right > navRect.right) {
                                        navContainer.scrollBy({
                                            left: btnRect.left - navRect.left - (navRect.width / 2) + (btnRect.width / 2),
                                            behavior: 'smooth'
                                        });
                                    }
                                }
                            }
                        });
                    }
                }, spyOptions);

                document.querySelectorAll('.menu-group').forEach(group => {
                    spyObserver.observe(group);
                });

                // Initialize Search & Filter AFTER menu generation
                initSearchAndFilter();

            })
            .catch(error => {
                console.error('Error fetching menu.json:', error);
                menuContainer.innerHTML = '<p style="color: red; text-align: center;">Error al cargar el menú. Por favor intentar nuevamente más tarde.</p>';
            });
    }

    // --- REVIEWS CAROUSEL (Only on index.html) ---
    const track = document.getElementById('reviews-track');
    if (track && reviewsData.length > 0 && isHomePage) {
        const dotsContainer = document.getElementById('dots-container');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        let currentIndex = 0;

        // Render Reviews
        reviewsData.forEach((review, index) => {
            const slide = document.createElement('div');
            slide.className = 'review-slide';
            slide.dataset.index = index;
            slide.innerHTML = `
                <div class="stars-static" style="margin-bottom: 15px; font-size: 1.5rem;">★★★★★</div>
                <p class="review-text">"${review.text}"</p>
                <div class="review-author">
                    <img src="${review.avatar}" alt="${review.author} avatar" loading="lazy" decoding="async">
                    <span>${review.author}</span>
                </div>
            `;
            track.appendChild(slide);

            // Create Dot
            const dot = document.createElement('div');
            dot.className = index === 0 ? 'dot active' : 'dot';
            dot.addEventListener('click', () => {
                const cardWidth = track.querySelector('.review-slide').offsetWidth + 30; // 30 is the gap
                track.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
            });
            dotsContainer.appendChild(dot);
        });

        // Update dots based on scroll position using IntersectionObserver
        const reviewObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = entry.target.dataset.index;
                    document.querySelectorAll('.dot').forEach((d, i) => {
                        d.classList.toggle('active', i == index);
                    });
                }
            });
        }, { root: track, threshold: 0.5 });

        document.querySelectorAll('.review-slide').forEach(slide => reviewObserver.observe(slide));

        function nextSlide() {
            if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
                // Reached end, loop back to start
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                const cardWidth = track.querySelector('.review-slide').offsetWidth + 30;
                track.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        }

        function prevSlide() {
            const cardWidth = track.querySelector('.review-slide').offsetWidth + 30;
            track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }

        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);

        // Auto Play
        setInterval(nextSlide, 5000);
    }

    // --- COMMON LOGIC ---

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
    }

    if (hamburger) hamburger.addEventListener('click', toggleMenu);
    if (closeMenu) closeMenu.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Intersection Observer for Home Page animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    if (document.querySelector('.about-section')) {
        const animatedElements = document.querySelectorAll('.category-title, .section-title, .about-title, .gallery-item, .about-text-center, .about-photo');
        animatedElements.forEach(el => observer.observe(el));
    }

    // --- SEARCH & FILTER LOGIC (Only on Menu Page) ---
    if (isMenuPage) {
        const searchInput = document.getElementById('menu-search');
        const filterChips = document.querySelectorAll('.chip');
        const menuCards = document.querySelectorAll('.menu-card'); // Note: This checks elements existing at load. If dynamic, we need to re-query or delegate.
        // Since we insert menu items via JS above, we must query AFTER insertion.
        // Wait a tick or execute after generation logic.

        // We will wrap this in a function to call AFTER menu generation
        function initSearchAndFilter() {
            const cards = document.querySelectorAll('.menu-card');
            const categories = document.querySelectorAll('.menu-category');
            const groups = document.querySelectorAll('.menu-group');

            // Search & Filter Function
            const updateVisibility = () => {
                const searchBox = document.getElementById('menu-search');
                const query = searchBox ? searchBox.value.toLowerCase() : "";
                const activeFilterChip = document.querySelector('.chip.active');
                const filter = activeFilterChip ? activeFilterChip.dataset.filter : "all";

                // 1. Filter Individual Cards
                cards.forEach(card => {
                    const title = card.querySelector('.card-title').textContent.toLowerCase();
                    const desc = card.querySelector('.card-desc') ? card.querySelector('.card-desc').textContent.toLowerCase() : "";
                    const tags = card.dataset.tags ? card.dataset.tags.split(' ') : [];

                    const matchesSearch = title.includes(query) || desc.includes(query);
                    const matchesFilter = filter === 'all' || tags.includes(filter);

                    if (matchesSearch && matchesFilter) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });

                // 2. Hide Empty Categories
                categories.forEach(cat => {
                    const visibleCards = Array.from(cat.querySelectorAll('.menu-card')).filter(card => card.style.display !== 'none');
                    const msg = cat.querySelector('.no-items-msg');
                    if (msg) msg.remove(); // Remove old messages

                    if (visibleCards.length > 0) {
                        cat.style.display = '';
                    } else {
                        cat.style.display = 'none'; // Completely Hide
                    }
                });

                // 3. Hide Empty Groups (If all children categories are hidden)
                groups.forEach(group => {
                    const visibleCategories = Array.from(group.querySelectorAll('.menu-category')).filter(category => category.style.display !== 'none');
                    if (visibleCategories.length > 0) {
                        group.style.display = '';
                    } else {
                        group.style.display = 'none';
                    }
                });
            };

            if (searchInput) {
                searchInput.addEventListener('input', updateVisibility);
            }

            // Filter Chips Function
            filterChips.forEach(chip => {
                chip.addEventListener('click', () => {
                    // Active State
                    filterChips.forEach(c => c.classList.remove('active'));
                    chip.classList.add('active');
                    updateVisibility();
                });
            });
        }

        // Delay init to ensure DOM is ready with injected items
        setTimeout(initSearchAndFilter, 500);

        // --- LIGHTBOX LOGIC ---
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const closeBtn = document.querySelector('.lightbox-close');

        // Event Delegation for dynamically created images
        if (menuContainer && lightbox) {
            menuContainer.addEventListener('click', (e) => {
                if (e.target.tagName === 'IMG' && e.target.closest('.card-image')) {
                    const img = e.target;
                    const card = img.closest('.menu-card');
                    const title = card.querySelector('.card-title').textContent;
                    const desc = card.querySelector('.card-desc') ? card.querySelector('.card-desc').textContent : '';

                    const history = card.dataset.history;
                    const pairing = card.dataset.pairing;

                    lightbox.style.display = "block";
                    lightboxImg.src = img.src;

                    let captionHTML = `<h3>${title}</h3><p>${desc}</p>`;

                    if (history) {
                        captionHTML += `<div class="lightbox-info"><h4 class="lightbox-section-title">Historia</h4><p class="lightbox-text">${history}</p></div>`;
                    }
                    if (pairing) {
                        captionHTML += `<div class="lightbox-info"><h4 class="lightbox-section-title">Maridaje Ideal</h4><p class="lightbox-text">${pairing}</p></div>`;
                    }

                    lightboxCaption.innerHTML = captionHTML;
                    document.body.style.overflow = 'hidden'; // Prevent scroll
                }
            });

            closeBtn.addEventListener('click', () => {
                lightbox.style.display = "none";
                document.body.style.overflow = 'auto';
            });

            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.style.display = "none";
                    document.body.style.overflow = 'auto';
                }
            });
        }
    }

    // --- PWA INSTALL PROMPT LOGIC ---
    let deferredPrompt;
    const pwaPrompt = document.getElementById('pwa-install-prompt');
    const pwaInstallBtn = document.getElementById('pwa-install-btn');
    const pwaCloseBtn = document.getElementById('pwa-close');

    if (pwaPrompt && isHomePage) {
        let promptShown = false;

        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
        });

        window.addEventListener('scroll', () => {
            if (promptShown || !deferredPrompt) return;

            // Calculate scroll percentage
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;

            if (scrollPercentage >= 50) {
                promptShown = true;
                pwaPrompt.classList.remove('hidden');
                // Small delay to allow display:block to apply before animating transform
                setTimeout(() => pwaPrompt.classList.add('visible'), 100);
            }
        });

        pwaInstallBtn.addEventListener('click', async () => {
            // Hide our custom UI
            pwaPrompt.classList.remove('visible');
            setTimeout(() => pwaPrompt.classList.add('hidden'), 500);

            if (deferredPrompt) {
                // Show the native install prompt
                deferredPrompt.prompt();
                // Wait for the user to respond to the prompt
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                // We've used the prompt, and can't use it again, throw it away
                deferredPrompt = null;
            }
        });

        pwaCloseBtn.addEventListener('click', () => {
            pwaPrompt.classList.remove('visible');
            setTimeout(() => pwaPrompt.classList.add('hidden'), 500);
        });
    }

    // --- BACK TO TOP LOGIC ---
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- PROMO DYNAMIC ANIMATIONS ---
    function initPromoAnimations() {
        const aperolImgs = [
            "images/Aperol Spritz.webp",
            "images/Branca Smash.webp",
            "images/Ramazoti Spritz.webp"
        ];
        
        let currentIndex = 0;
        const aperitivosCard = document.querySelector('.promo-card[id="aperitivos-2x1"]');
        if (!aperitivosCard) return;

        const imgElement = aperitivosCard.querySelector('.promo-img');
        if (!imgElement) return;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % aperolImgs.length;
            
            // Fade out
            imgElement.style.opacity = '0.3';
            
            setTimeout(() => {
                imgElement.src = aperolImgs[currentIndex];
                // Fade in
                imgElement.style.opacity = '1';
            }, 600); // Wait for fade out duration
        }, 3000);
    }

    if (promoContainer) {
        setTimeout(initPromoAnimations, 1000);
    }

});
