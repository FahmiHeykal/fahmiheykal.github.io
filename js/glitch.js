// Enhanced glitch effect for the hero text
document.addEventListener('DOMContentLoaded', function() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch-effect 0.5s infinite';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
    
    // Random glitch effect on page load
    setTimeout(() => {
        glitchElements.forEach(element => {
            element.style.animation = 'glitch-effect 0.3s 3';
            setTimeout(() => {
                element.style.animation = '';
            }, 1000);
        });
    }, 1000);
});