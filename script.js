// Registrazione di ScrollTrigger (Plugin GSAP per animazioni allo scorrimento)
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Animazione Iniziale Hero Section
    const heroTl = gsap.timeline();
    
    heroTl.from(".hero-content .subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=1.5")
    .from(".hero-content .title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=1.2")
    .from(".hero-content .description", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=1")
    .from(".scroll-indicator", {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5");

    // 2. Animazione Titolo Sezione Percorso
    gsap.from(".section-title", {
        scrollTrigger: {
            trigger: ".tour-section",
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // 3. Animazione Steps Timeline
    const steps = gsap.utils.toArray('.step');
    
    steps.forEach((step, i) => {
        const content = step.querySelector('.step-content');
        const marker = step.querySelector('.step-marker');
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: step,
                start: "top 85%", // Inizia l'animazione quando la cima dello step raggiunge l'85% della viewport
                toggleActions: "play none none reverse" // Gioca quando entra, inverti quando esce
            }
        });
        
        tl.from(marker, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)"
        })
        .from(content, {
            x: i % 2 === 0 ? 50 : -50, // Effetto alternato (destra/sinistra non marcato per ora data la singola colonna, ma offset orizzontale)
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.3");
    });

    // 4. Animazione Bonus Section
    const bonusTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".bonus-section",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    bonusTl.from(".bonus-badge", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    })
    .from(".bonus-text h2", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.4")
    .from(".bonus-text p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from(".bonus-video", {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out"
    }, "-=0.4");
});
