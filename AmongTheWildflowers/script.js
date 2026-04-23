/* ============================================================
   AMONG THE WILDFLOWERS — script.js
   ============================================================ */

'use strict';

// ===========================
// PRODUCTS DATA
// ===========================
const PRODUCTS = [
    {
        id: 'lemon-verbena',
        name: 'Lemon & Verbena',
        category: 'Refreshing',
        price: 9.50,
        badge: 'New',
        badgeClass: 'product-badge--new',
        c1: '#f5e09a', c2: '#d4a83a',
        image: 'images/lemon-verbena.png',
        imageScale: 1,
        imageOffsetY: 0,
        shortDesc: 'Sun-ripened lemon verbena and sweet orange zest in a silky, brightening bar.',
        longDesc: 'Bright, uplifting, and impossibly fresh — our Lemon Verbena bar is a burst of sunshine in every lather. We blend pure lemon verbena extract with sweet orange and grapefruit essential oils, anchored by a creamy base of cold-pressed coconut and olive oils. Vitamin C-rich botanicals help even skin tone over time, while shea butter keeps your skin soft and dewy all day long.',
        ingredients: ['Lemon Verbena Extract', 'Sweet Orange Essential Oil', 'Grapefruit Essential Oil', 'Coconut Oil', 'Olive Oil', 'Shea Butter', 'Vitamin C'],
        rating: 4.9,
        reviewCount: 12,
        reviews: [
            { initial: 'H', author: 'Hannah G.', rating: 5, text: "This smells like a sunny lemon orchard. Completely obsessed — it's become my morning ritual and my skin has never looked brighter." },
            { initial: 'Z', author: 'Zoe K.', rating: 5, text: "The scent is so authentic and fresh, not at all synthetic. I've already ordered two more bars to stock up!" },
            { initial: 'W', author: 'Will T.', rating: 5, text: "Bought this for my girlfriend and she absolutely loves it. Great lather, gorgeous scent, and the bar holds up really well." }
        ]
    },
    {
        id: 'hibiscus-honey',
        name: 'Hibiscus & Honey',
        category: 'Floral',
        price: 10.00,
        badge: 'New',
        badgeClass: 'product-badge--new',
        c1: '#e8829a', c2: '#b84060',
        image: 'images/hibiscus-honey.png',
        imageScale: 1,
        imageOffsetY: 0,
        shortDesc: 'Tart hibiscus petals and golden honey in a softening, rosy lather.',
        longDesc: 'A love letter to bloom and sweetness. Our Hibiscus Honey bar combines antioxidant-rich hibiscus flower extract with raw wildflower honey for a bar that cleanses, brightens, and deeply nourishes. The hibiscus lends a natural rosy hue and a gentle AHA effect that leaves skin looking luminous, while honey seals in moisture for hours after your shower.',
        ingredients: ['Hibiscus Flower Extract', 'Raw Wildflower Honey', 'Sweet Almond Oil', 'Coconut Oil', 'Shea Butter', 'Rose Kaolin Clay'],
        rating: 4.8,
        reviewCount: 8,
        reviews: [
            { initial: 'A', author: 'Ava R.', rating: 5, text: "The colour is so beautiful and the scent is like a floral garden. My skin felt incredibly soft after just one use." },
            { initial: 'N', author: 'Nora L.', rating: 5, text: "I love everything about this bar — the pink tone, the honey sweetness, the lather. It's pure luxury for the price." },
            { initial: 'G', author: 'Grace M.', rating: 4, text: "Really lovely bar. The hibiscus scent is delicate and the honey keeps my skin so moisturised. Will definitely reorder." }
        ]
    },
    {
        id: 'oatmeal-milk-honey',
        name: 'Oatmeal Milk & Honey',
        category: 'Nourishing',
        price: 10.00,
        badge: 'New',
        badgeClass: 'product-badge--new',
        c1: '#f0ddb0', c2: '#c8a060',
        image: 'images/oatmeal-milk-honey.png',
        imageScale: 1.1,
        imageOffsetY: -10,
        shortDesc: 'Creamy goat milk, colloidal oats, and raw honey for ultra-soft, nourished skin.',
        longDesc: 'Pure comfort in bar form. Our Oatmeal Milk & Honey soap combines the soothing power of colloidal oatmeal with the deep moisture of creamy goat milk and raw wildflower honey. The oats gently exfoliate and calm irritated skin while the milk and honey wrap it in lasting softness. Perfect for sensitive skin, dry skin, or anyone who just wants to feel pampered every single morning.',
        ingredients: ['Colloidal Oatmeal', 'Goat Milk', 'Raw Wildflower Honey', 'Shea Butter', 'Sweet Almond Oil', 'Coconut Oil', 'Vitamin E'],
        rating: 4.9,
        reviewCount: 5,
        reviews: [
            { initial: 'L', author: 'Lily P.', rating: 5, text: "This is hands down the most moisturising soap I've ever tried. My skin literally glows after using it. Already on my third bar." },
            { initial: 'K', author: 'Kate M.', rating: 5, text: "I have very dry, sensitive skin and this is the only soap that doesn't leave me feeling tight. Absolutely incredible." },
            { initial: 'B', author: 'Brooke T.', rating: 5, text: "The scent is warm, creamy, and sweet without being too much. It's become a permanent part of my routine." }
        ]
    },
    {
        id: 'sandalwood-amber',
        name: 'Sandalwood & Amber',
        category: 'Earthy',
        price: 10.50,
        badge: 'New',
        badgeClass: 'product-badge--new',
        c1: '#c8956a', c2: '#8b5e3c',
        image: 'images/sandal-wood-amber.png',
        imageScale: 1.4,
        imageOffsetY: -10,
        shortDesc: 'Warm sandalwood, rich amber resin, and a touch of vanilla for a grounding, luxurious lather.',
        longDesc: 'Slow down and sink in. Our Sandalwood Amber bar is built for those who crave warmth and depth. Creamy sandalwood essential oil is blended with rich amber resin and a whisper of vanilla, creating a scent that feels like a warm embrace. Cold-pressed olive and coconut oils provide a nourishing, skin-softening base while shea butter seals in lasting moisture.',
        ingredients: ['Sandalwood Essential Oil', 'Amber Resin', 'Vanilla Extract', 'Shea Butter', 'Olive Oil', 'Coconut Oil', 'Vitamin E'],
        rating: 4.9,
        reviewCount: 6,
        reviews: [
            { initial: 'J', author: 'James R.', rating: 5, text: "This is the most luxurious soap I've ever used. The scent is deep, warm, and stays on my skin for hours. Absolutely worth it." },
            { initial: 'C', author: 'Clara S.', rating: 5, text: "The amber and sandalwood together are just perfect — sophisticated, warm, and grounding. I use it every evening." },
            { initial: 'M', author: 'Marcus L.', rating: 5, text: "Bought this on a whim and now I'm completely hooked. The lather is incredibly creamy and the scent lingers beautifully." }
        ]
    }
];

// ===========================
// NAVBAR SCROLL BEHAVIOR
// ===========================
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileNavClose = document.getElementById('mobileNavClose');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ===========================
// MOBILE NAV
// ===========================
function openMobileNav() {
    mobileNav.classList.add('active');
    mobileNav.setAttribute('aria-hidden', 'false');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
    mobileNav.classList.remove('active');
    mobileNav.setAttribute('aria-hidden', 'true');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMobileNav);
mobileNavClose.addEventListener('click', closeMobileNav);

// Close on link click
mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        closeMobileNav();
    }
});

// ===========================
// SCROLL REVEAL
// ===========================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const offset = navbar.offsetHeight + 16;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});

// ===========================
// NEWSLETTER FORM
// ===========================
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const input = newsletterForm.querySelector('.newsletter-input');
        const btn   = newsletterForm.querySelector('.btn');
        const email = (input.value || '').trim();

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            input.style.outline = '2px solid #c07870';
            input.focus();
            setTimeout(() => { input.style.outline = ''; }, 2400);
            return;
        }

        // Success state
        const originalText = btn.textContent;
        input.value = '';
        btn.textContent = 'You\'re In! ✓';
        btn.style.background = '#4a7a58';
        btn.style.borderColor = '#4a7a58';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.disabled = false;
        }, 4000);
    });
}

// ===========================
// ADD TO CART (placeholder)
// ===========================
document.querySelectorAll('.product-card .btn--small').forEach(btn => {
    btn.addEventListener('click', function () {
        const originalText = this.textContent;
        this.textContent = 'Added ✓';
        this.style.background = '#4a7a58';
        this.style.borderColor = '#4a7a58';

        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
            this.style.borderColor = '';
        }, 2000);
    });
});

// ===========================
// PRODUCT CAROUSEL
// ===========================
(function initCarousel() {
    const track    = document.getElementById('carouselTrack');
    const prevBtn  = document.querySelector('.carousel-arrow--prev');
    const nextBtn  = document.querySelector('.carousel-arrow--next');
    if (!track) return;

    let currentIndex = 0;

    function getVisible() {
        if (window.innerWidth < 640)  return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    }

    function getMax() {
        return PRODUCTS.length - getVisible();
    }

    // Build slides from PRODUCTS data
    PRODUCTS.forEach(function (p) {
        const slide = document.createElement('article');
        slide.className = 'carousel-slide';
        slide.setAttribute('role', 'group');
        slide.setAttribute('aria-label', 'Product: ' + p.name);

        const badge = p.badge
            ? '<span class="float-badge ' + p.badgeClass + '">' + p.badge + '</span>'
            : '';

        const scale = p.imageScale || 1;
        const offsetY = p.imageOffsetY || 0;
        const soapVisual = p.image
            ? '<img src="' + p.image + '" alt="' + p.name + '" class="float-soap-img" style="transform:scale(' + scale + ') translateY(' + offsetY + 'px);">'
            : '<div class="float-soap-bar" style="--soap-c1:' + p.c1 + '; --soap-c2:' + p.c2 + '"></div>';

        slide.innerHTML =
            '<a href="product.html?id=' + p.id + '" class="float-card">' +
                '<div class="float-soap-wrap">' +
                    soapVisual +
                    badge +
                '</div>' +
                '<div class="float-card-info">' +
                    '<h3 class="float-card-name">' + p.name + '</h3>' +
                    '<p class="float-card-price">$' + p.price.toFixed(2) + '</p>' +
                '</div>' +
                '<span class="btn btn--ghost float-card-btn">Learn More</span>' +
            '</a>';

        track.appendChild(slide);
    });

    function updateCarousel() {
        const visible       = getVisible();
        const containerW    = track.parentElement.offsetWidth;
        const slideW        = containerW / visible;

        // Set each slide's pixel width
        Array.from(track.children).forEach(function (slide) {
            slide.style.width = slideW + 'px';
        });

        track.style.transform = 'translateX(' + (-currentIndex * slideW) + 'px)';
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= getMax();
    }

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) { currentIndex--; updateCarousel(); }
    });

    nextBtn.addEventListener('click', function () {
        if (currentIndex < getMax()) { currentIndex++; updateCarousel(); }
    });

    // Recalculate on resize
    var resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            currentIndex = Math.min(currentIndex, getMax());
            updateCarousel();
        }, 150);
    }, { passive: true });

    updateCarousel();

    // Register carousel cards with reveal observer
    track.querySelectorAll('.carousel-slide').forEach(function (el, i) {
        el.style.transitionDelay = (i * 0.07) + 's';
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
}());

// ===========================
// PRODUCT DETAIL PAGE
// ===========================
(function initProductPage() {
    const detailSection = document.getElementById('productDetail');
    if (!detailSection) return;

    const params  = new URLSearchParams(window.location.search);
    const id      = params.get('id');
    const product = PRODUCTS.find(function (p) { return p.id === id; });

    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    // Page title + meta
    document.title = product.name + ' — Among The Wildflowers';
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', product.shortDesc);

    // Breadcrumb
    document.getElementById('breadcrumbName').textContent = product.name;

    // Soap visual
    var soapWrap = document.getElementById('detailSoapWrap');
    if (product.image) {
        soapWrap.classList.add('detail-soap-image-mode');
        var soapVisualEl = document.getElementById('detailSoapVisual');
        var detailScale = product.imageScale || 1;
        var detailOffsetY = product.imageOffsetY || 0;
        soapVisualEl.innerHTML = '<img src="' + product.image + '" alt="' + product.name + '" class="detail-soap-img" style="transform:scale(' + detailScale + ') translateY(' + detailOffsetY + 'px);">';
        if (product.badge) {
            var imgBadge = document.createElement('span');
            imgBadge.className = 'product-badge ' + product.badgeClass;
            imgBadge.textContent = product.badge;
            soapVisualEl.appendChild(imgBadge);
        }
    } else {
        soapWrap.style.setProperty('--soap-c1', product.c1);
        soapWrap.style.setProperty('--soap-c2', product.c2);
        if (product.badge) {
            var badge = document.createElement('span');
            badge.className = 'product-badge ' + product.badgeClass;
            badge.textContent = product.badge;
            document.querySelector('.detail-soap-visual').appendChild(badge);
        }
    }

    // Text content
    document.getElementById('detailCategory').textContent    = product.category;
    document.getElementById('detailName').textContent        = product.name;
    document.getElementById('detailPrice').textContent       = '$' + product.price.toFixed(2);
    document.getElementById('detailDescription').textContent = product.longDesc;

    // Stars
    var full     = Math.floor(product.rating);
    var starsStr = '★'.repeat(full) + (product.rating % 1 >= 0.5 ? '½' : '');
    document.getElementById('detailStars').textContent      = starsStr;
    document.getElementById('detailRatingText').textContent = product.rating + ' · ' + product.reviewCount + ' reviews';

    // Ingredients
    var ingList = document.getElementById('detailIngredients');
    product.ingredients.forEach(function (ing) {
        var li = document.createElement('li');
        li.textContent = ing;
        ingList.appendChild(li);
    });

    // Reviews
    var reviewsContainer = document.getElementById('detailReviews');
    product.reviews.forEach(function (r) {
        var stars = '★'.repeat(r.rating);
        var div   = document.createElement('div');
        div.className = 'review-card';
        div.innerHTML =
            '<div class="review-header">' +
                '<div class="author-avatar">' + r.initial + '</div>' +
                '<div><strong>' + r.author + '</strong><span>Verified Customer</span></div>' +
                '<div class="review-stars">' + stars + '</div>' +
            '</div>' +
            '<p class="review-text">' + r.text + '</p>';
        reviewsContainer.appendChild(div);
    });

    // Quantity selector
    var qty      = 1;
    var qtyValue = document.getElementById('qtyValue');
    document.getElementById('qtyMinus').addEventListener('click', function () {
        if (qty > 1) { qty--; qtyValue.textContent = qty; }
    });
    document.getElementById('qtyPlus').addEventListener('click', function () {
        qty++;
        qtyValue.textContent = qty;
    });

    // Add to cart
    document.getElementById('detailCartBtn').addEventListener('click', function () {
        var btn      = this;
        var original = btn.textContent;
        btn.textContent   = 'Added to Cart ✓';
        btn.style.background   = '#4a7a58';
        btn.style.borderColor  = '#4a7a58';
        btn.disabled = true;
        setTimeout(function () {
            btn.textContent        = original;
            btn.style.background   = '';
            btn.style.borderColor  = '';
            btn.disabled = false;
        }, 2500);
    });
}());

