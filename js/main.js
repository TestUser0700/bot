document.addEventListener('DOMContentLoaded', () => {
    // Scroll-triggered reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect on hero showcase cards based on mouse movement (very subtle)
    const showcase = document.querySelector('.showcase-cards.hero-overlap');
    if (showcase) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 60;
            const y = (window.innerHeight / 2 - e.pageY) / 60;
            
            showcase.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    // Click to copy commands
    const commandTags = document.querySelectorAll('.command-tag');
    commandTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const textToCopy = tag.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                tag.classList.add('copied');
                setTimeout(() => {
                    tag.classList.remove('copied');
                }, 1500);
            });
        });
    });

    // Nav blur background opacity on scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    // Disable right-click
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});
