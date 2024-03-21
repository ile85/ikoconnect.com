function waveAnimation() {
    gsap.to('.wave1', {
        duration: 5,
        y: '+=10',
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    gsap.to('.wave2', {
        duration: 5,
        y: '+=8',
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    gsap.to('.animated-wave-text', {
        duration: 5, // Match with wave animation duration
        x: '+=10', // Move text left and right by 10px; adjust as per your wave's movement
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut' // Use an easing function similar to the waves
    });
}