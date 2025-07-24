const inlineSearchResults = document.getElementById('inline-search-results');

document.addEventListener('DOMContentLoaded', function() {
    // --- Ensure #inline-search-results is at the top of <body> for visibility ---
    const searchResultsEl = document.getElementById('inline-search-results');
    if (searchResultsEl && searchResultsEl.parentElement !== document.body) {
        document.body.insertBefore(searchResultsEl, document.body.firstChild);
    }

    // --- Wait for window.movies before initializing search handlers ---
    function initSearchHandlers() {
        // Elements
        const desktopSearchInput = document.querySelector('.desktop-search input');
        const desktopSearchBtn = document.querySelector('.desktop-search button');
        const mobileSearchIcon = document.querySelector('.mobile-search-icon');
        const mobileSearchBar = document.querySelector('.mobile-search-bar');
        const mobileSearchInput = mobileSearchBar.querySelector('input');
        const mobileSearchBtn = mobileSearchBar.querySelector('button');

        // Toggle mobile search bar
        if (mobileSearchIcon && mobileSearchBar) {
            mobileSearchIcon.addEventListener('click', function() {
                mobileSearchBar.classList.toggle('active');
                if (mobileSearchBar.classList.contains('active')) {
                    mobileSearchInput.focus();
                }
            });
        }

        // Show/hide results
        function showInlineSearchResults() {
            inlineSearchResults.style.display = 'block';
            inlineSearchResults.style.visibility = 'visible';
            inlineSearchResults.style.zIndex = '3000'; // ensure on top
        }
        function hideInlineSearchResults() {
            inlineSearchResults.style.display = 'none';
            inlineSearchResults.style.visibility = 'hidden';
        }

        // Search handler
        function handleInlineSearch(query) {
            if (!query.trim()) {
                hideInlineSearchResults();
                return;
            }
            const results = (window.movies || []).filter(movie =>
                movie.title.toLowerCase().includes(query.trim().toLowerCase())
            );
            console.log('Search results:', results);
            window.renderInlineSearchResults(results);
            showInlineSearchResults();
        }

        // Desktop search events
        if (desktopSearchInput && desktopSearchBtn) {
            desktopSearchInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const q = desktopSearchInput.value.trim();
                    if (q) {
                        window.location.href = `search.html?q=${encodeURIComponent(q)}`;
                    }
                }
            });
            desktopSearchBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const q = desktopSearchInput.value.trim();
                if (q) {
                    window.location.href = `search.html?q=${encodeURIComponent(q)}`;
                }
            });
        }

        // Mobile search events
        if (mobileSearchInput && mobileSearchBtn) {
            mobileSearchInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const q = mobileSearchInput.value.trim();
                    if (q) {
                        window.location.href = `search.html?q=${encodeURIComponent(q)}`;
                    }
                }
            });
            mobileSearchBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const q = mobileSearchInput.value.trim();
                if (q) {
                    window.location.href = `search.html?q=${encodeURIComponent(q)}`;
                }
            });
        }

        // Hide results when clicking outside
        document.addEventListener('click', function(e) {
            if (
                !e.target.closest('.desktop-search') &&
                !e.target.closest('.mobile-search-bar') &&
                !e.target.closest('#inline-search-results')
            ) {
                hideInlineSearchResults();
            }
        });
    }

    function waitForMoviesAndInitSearch() {
        if (window.movies && Array.isArray(window.movies)) {
            initSearchHandlers();
        } else {
            setTimeout(waitForMoviesAndInitSearch, 50);
        }
    }

    // Remove old search handler code and call the new function
    waitForMoviesAndInitSearch();

    // Render function
    window.renderInlineSearchResults = function(moviesArr) {
        inlineSearchResults.innerHTML = '';
        if (!moviesArr.length) {
            inlineSearchResults.innerHTML = '<div style="padding:1rem;color:#ccc;">No movies found.</div>';
            return;
        }
        moviesArr.forEach(movie => {
            const card = document.createElement('a');
            card.className = 'movie-card';
            card.href = "#";
            card.innerHTML = `
                <img src="${movie.bannerLink}" alt="${movie.title}">
                <div>
                    <div class="movie-title">${movie.title}</div>
                    <div class="movie-rating"><i class="fas fa-star"></i> ${movie.imdbRating}</div>
                    <div class="movie-release-date">${movie.releaseDate}</div>
                </div>
            `;
            card.addEventListener('click', function(e) {
                e.preventDefault();
                if (typeof showMoviePopup === "function") {
                    showMoviePopup(movie.id);
                    hideInlineSearchResults();
                }
            });
            inlineSearchResults.appendChild(card);
        });
    };

    // Featured Movies Slider (carousel) for #featured-movies
    function initFeaturedMoviesSlider() {
        const container = document.getElementById('featured-movies');
        if (!container) return;

        // Responsive: 5 per slide (desktop), 3 per slide (mobile)
        function getVisibleCount() {
            return window.innerWidth <= 600 ? 3 : 5;
        }

        let currentIndex = 0;
        let visibleCount = getVisibleCount();
        let cards = Array.from(container.children);

        // Create navigation buttons
        let leftBtn = document.createElement('button');
        leftBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        leftBtn.className = 'featured-slider-btn left';
        let rightBtn = document.createElement('button');
        rightBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        rightBtn.className = 'featured-slider-btn right';

        // Style buttons (or use your own CSS)
        Object.assign(leftBtn.style, {
            position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, background: '#181818cc', color: '#fff', border: 'none',
            fontSize: '2rem', cursor: 'pointer', height: '48px', width: '48px', borderRadius: '50%'
        });
        Object.assign(rightBtn.style, {
            position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, background: '#181818cc', color: '#fff', border: 'none',
            fontSize: '2rem', cursor: 'pointer', height: '48px', width: '48px', borderRadius: '50%'
        });

        // Parent relative
        container.parentElement.style.position = 'relative';
        container.parentElement.appendChild(leftBtn);
        container.parentElement.appendChild(rightBtn);

        function updateSlider() {
            visibleCount = getVisibleCount();
            cards = Array.from(container.children);
            cards.forEach((card, idx) => {
                if (idx >= currentIndex && idx < currentIndex + visibleCount) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
            // Disable/enable buttons
            leftBtn.disabled = currentIndex === 0;
            rightBtn.disabled = currentIndex + visibleCount >= cards.length;
            leftBtn.style.opacity = leftBtn.disabled ? '0.5' : '1';
            rightBtn.style.opacity = rightBtn.disabled ? '0.5' : '1';
        }

        leftBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
        rightBtn.addEventListener('click', function() {
            if (currentIndex + visibleCount < cards.length) {
                currentIndex++;
                updateSlider();
            }
        });

        // Responsive: update on resize
        window.addEventListener('resize', function() {
            let oldVisible = visibleCount;
            visibleCount = getVisibleCount();
            // Adjust currentIndex if needed
            if (currentIndex + visibleCount > cards.length) {
                currentIndex = Math.max(0, cards.length - visibleCount);
            }
            updateSlider();
        });

        // Autoplay
        let autoplayInterval;
        function startAutoplay() {
            clearInterval(autoplayInterval);
            autoplayInterval = setInterval(() => {
                // If at end, go back to start
                if (currentIndex + visibleCount >= cards.length) {
                    currentIndex = 0;
                } else {
                    currentIndex++;
                }
                updateSlider();
            }, 3000); // Change 3000 to your preferred ms (3000ms = 3s)
        }
        function stopAutoplay() {
            clearInterval(autoplayInterval);
        }

        // Optional: Pause on hover
        container.parentElement.addEventListener('mouseenter', stopAutoplay);
        container.parentElement.addEventListener('mouseleave', startAutoplay);

        // Initial show
        updateSlider();
        startAutoplay();
    }

    // Call after featured-movies rendered
    setTimeout(initFeaturedMoviesSlider, 500); // or call after renderMovieGrid()

    // Banner Slider (carousel) for #bannerSlider
    const bannerSlider = document.getElementById('bannerSlider');
    if (bannerSlider) {
        const track = bannerSlider.querySelector('.slider-track');
        const slides = Array.from(track.children);
        const dotsContainer = bannerSlider.querySelector('.slider-dots');
        let current = 0;
        let interval;
        const slideCount = slides.length;

        // Responsive: 1 slide on mobile, 3 on tablet, 4 on desktop
        function getVisible() {
            if (window.innerWidth <= 600) return 1;
            if (window.innerWidth <= 900) return 2;
            return 3;
        }

        function updateSlider() {
            const visible = getVisible();
            const slideWidth = slides[0].offsetWidth;
            track.style.transition = 'transform 0.6s cubic-bezier(.77,0,.18,1)';
            track.style.transform = `translateX(-${current * slideWidth}px)`;
            // Update dots
            dotsContainer.innerHTML = '';
            for (let i = 0; i <= slideCount - visible; i++) {
                const dot = document.createElement('span');
                dot.className = 'dot' + (i === current ? ' active' : '');
                dot.addEventListener('click', () => {
                    current = i;
                    updateSlider();
                    resetInterval();
                });
                dotsContainer.appendChild(dot);
            }
        }

        function nextSlide() {
            const visible = getVisible();
            if (current < slideCount - visible) {
                current++;
            } else {
                current = 0;
            }
            updateSlider();
        }

        function resetInterval() {
            clearInterval(interval);
            interval = setInterval(nextSlide, 3000);
        }

        window.addEventListener('resize', updateSlider);

        // Init
        updateSlider();
        resetInterval();
    }

    // Footer social icon click (example)
    document.querySelectorAll('.footer-social a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Social links coming soon!');
        });
    });

    // --- Mobile Menu Functionality ---
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileMenuIcon && mobileNav) {
        mobileMenuIcon.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            // Change icon between bars and times
            const icon = mobileMenuIcon.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        // Submenu slide toggle for mobile
        mobileNav.querySelectorAll('.menu-item > a').forEach(link => {
            link.addEventListener('click', function(e) {
                const submenu = this.nextElementSibling;
                if (submenu && submenu.classList.contains('submenu')) {
                    e.preventDefault();
                    // Close other submenus
                    mobileNav.querySelectorAll('.submenu').forEach(sm => {
                        if (sm !== submenu) {
                            sm.style.maxHeight = null;
                            sm.classList.remove('open');
                            // Reset icon for closed submenus
                            const closedLink = sm.parentElement.querySelector('a');
                            if (closedLink) {
                                closedLink.classList.remove('submenu-open');
                            }
                        }
                    });
                    // Toggle this submenu
                    if (submenu.classList.contains('open')) {
                        submenu.style.maxHeight = null;
                        submenu.classList.remove('open');
                        this.classList.remove('submenu-open');
                    } else {
                        submenu.style.maxHeight = submenu.scrollHeight + 'px';
                        submenu.classList.add('open');
                        this.classList.add('submenu-open');
                    }
                }
            });
        });
    }

    // --- Limit Latest Movies to 60 ---
    if (window.renderAllMoviesReverse) {
        window.renderAllMoviesReverse(window.movies, 'latest-movies', 60);
    }

    // --- Render Category Sections ---
    if (window.getUniqueCategories && window.renderCategorySections) {
        
        
        // Insert after latest-movies section
        const main = document.querySelector('main');
        if (main) {
            window.renderCategorySections(homepageCategories, 'main');
        }
    }

    // --- Search Results Fixed on All Devices ---
    // Already handled by CSS, but force fixed on mobile as well
    const inlineSearchResults = document.getElementById('inline-search-results');
    if (inlineSearchResults) {
        inlineSearchResults.classList.add('fixed-search-results');
    }
});


