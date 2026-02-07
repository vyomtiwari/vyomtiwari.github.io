// ============================================
// VYOM TIWARI - PORTFOLIO WEBSITE
// Vanilla JavaScript - No frameworks needed
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // MOBILE NAVIGATION TOGGLE
    // ========================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const hamburger = this.querySelector('.hamburger');
            if (navMenu.classList.contains('active')) {
                hamburger.style.transform = 'rotate(45deg)';
                hamburger.style.backgroundColor = 'transparent';
            } else {
                hamburger.style.transform = 'rotate(0)';
                hamburger.style.backgroundColor = 'var(--color-black)';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const hamburger = navToggle.querySelector('.hamburger');
                hamburger.style.transform = 'rotate(0)';
                hamburger.style.backgroundColor = 'var(--color-black)';
            }
        });
    });
    
    
    // ========================================
    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Only prevent default for internal links (not resume link)
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    
    // ========================================
    // NAVBAR BACKGROUND ON SCROLL
    // ========================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    
    // ========================================
    // ACTIVE NAVIGATION LINK HIGHLIGHTING
    // ========================================
    const sections = document.querySelectorAll('.section');
    
    function highlightNavigation() {
        let scrollPosition = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.style.fontWeight = '400';
                    link.style.opacity = '0.7';
                });
                
                // Add active style to current section link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.style.fontWeight = '500';
                    activeLink.style.opacity = '1';
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    
    // ========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ========================================
    // Animate elements when they come into view
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe project cards for staggered animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = `all 0.6s ease ${index * 0.15}s`;
        observer.observe(category);
    });
    
    
    // ========================================
    // FORM VALIDATION & HANDLING
    // ========================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic validation
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            
            // Validate name
            if (nameInput.value.trim() === '') {
                isValid = false;
                nameInput.style.borderColor = '#dc2626';
            } else {
                nameInput.style.borderColor = 'var(--color-gray-light)';
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                isValid = false;
                emailInput.style.borderColor = '#dc2626';
            } else {
                emailInput.style.borderColor = 'var(--color-gray-light)';
            }
            
            // Validate message
            if (messageInput.value.trim() === '') {
                isValid = false;
                messageInput.style.borderColor = '#dc2626';
            } else {
                messageInput.style.borderColor = 'var(--color-gray-light)';
            }
            
            // If form is not valid and using Formspree placeholder, prevent submission
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all fields correctly.');
            }
            
            // Note: If you've set up Formspree correctly, the form will submit normally
            // If using the placeholder action, you may want to add additional handling
        });
        
        // Clear error styling on input
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = 'var(--color-gray-light)';
            });
        });
    }
    
    
    // ========================================
    // TYPING EFFECT FOR HOME SECTION (OPTIONAL)
    // ========================================
    // Uncomment this section if you want a typing effect for the title
    /*
    const titleElement = document.querySelector('.home-title');
    const titleText = titleElement.textContent;
    titleElement.textContent = '';
    
    let charIndex = 0;
    function typeTitle() {
        if (charIndex < titleText.length) {
            titleElement.textContent += titleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeTitle, 50);
        }
    }
    
    // Start typing effect after a delay
    setTimeout(typeTitle, 1000);
    */
    
    
    // ========================================
    // CONSOLE MESSAGE (EASTER EGG)
    // ========================================
    console.log('%c👋 Hello, fellow developer!', 'font-size: 20px; font-weight: bold;');
    console.log('%cInterested in the code? Check out the repository!', 'font-size: 14px;');
    console.log('%c💻 Built with vanilla HTML, CSS, and JavaScript', 'font-size: 12px; color: #666;');
    
    
    // ========================================
    // PERFORMANCE OPTIMIZATION
    // ========================================
    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll handler
    window.addEventListener('scroll', debounce(highlightNavigation, 50));
    
});


// ============================================
// ADDITIONAL UTILITY FUNCTIONS
// ============================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get scroll percentage
function getScrollPercentage() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (scrollTop / scrollHeight) * 100;
}


// ============================================
// CUSTOMIZATION NOTES
// ============================================
/*
TO CUSTOMIZE THIS WEBSITE:

1. CONTENT:
   - Edit text directly in index.html
   - Update links, email, social media URLs in HTML

2. COLORS:
   - Change CSS variables in style.css (:root section)
   - Modify --color-* variables for different color scheme

3. FONTS:
   - Replace Google Fonts links in HTML
   - Update --font-* variables in CSS

4. ANIMATIONS:
   - Adjust animation timings in CSS (--transition-* variables)
   - Modify delays in .delay-* classes

5. CONTACT FORM:
   - Sign up at formspree.io
   - Replace YOUR_FORM_ID in the form action attribute
   - Form will work automatically after setup

6. RESUME:
   - Place your resume.pdf file in the same folder as index.html
   - Or update the href in the Resume button to your resume filename

TIPS:
- Test on mobile devices after making changes
- Keep the design minimal - less is more
- Optimize images before adding them
- Run Chrome DevTools Lighthouse for performance insights
*/
