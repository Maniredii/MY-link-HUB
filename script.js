// Add click tracking and smooth interactions
document.addEventListener('DOMContentLoaded', function() {
    // Visitor counter
    function updateVisitorCount() {
        let count = localStorage.getItem('visitorCount');
        if (!count) {
            count = 0;
        }
        count = parseInt(count) + 1;
        localStorage.setItem('visitorCount', count);
        
        // Animate the count
        const counterElement = document.getElementById('visitorCount');
        if (counterElement) {
            let current = 0;
            const increment = Math.ceil(count / 50);
            const timer = setInterval(() => {
                current += increment;
                if (current >= count) {
                    current = count;
                    clearInterval(timer);
                }
                counterElement.textContent = current.toLocaleString();
            }, 20);
        }
    }
    
    updateVisitorCount();
    
    // Create audio element for click sound
    const clickSound = new Audio('matthewvakaliuk73627-mouse-click-290204.mp3');
    clickSound.volume = 0.3; // Set volume to 30%
    
    // Typing animation for status badge
    const typingBadge = document.getElementById('typingBadge');
    if (typingBadge) {
        const text = 'OPEN FOR WORK';
        let index = 0;
        let isDeleting = false;
        
        function type() {
            if (!isDeleting && index < text.length) {
                typingBadge.textContent = text.substring(0, index + 1);
                index++;
                setTimeout(type, 150);
            } else if (!isDeleting && index === text.length) {
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 2000);
            } else if (isDeleting && index > 0) {
                typingBadge.textContent = text.substring(0, index - 1);
                index--;
                setTimeout(type, 100);
            } else if (isDeleting && index === 0) {
                isDeleting = false;
                setTimeout(type, 500);
            }
        }
        
        type();
    }
    
    const linkItems = document.querySelectorAll('.link-item, .project-card');
    
    // Add click tracking
    linkItems.forEach(link => {
        link.addEventListener('click', function(e) {
            // Play click sound
            clickSound.currentTime = 0; // Reset sound to start
            clickSound.play().catch(err => console.log('Audio play failed:', err));
            
            // Add a subtle click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Track clicks (you can integrate with analytics here)
            const linkText = this.querySelector('span') || this.querySelector('h3');
            if (linkText) {
                console.log(`Link clicked: ${linkText.textContent}`);
            }
            
            // Add ripple effect
            createRipple(e, this);
        });
    });
    
    // Create ripple effect function
    function createRipple(event, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Add hover sound effect (optional)
    linkItems.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // You can add a subtle hover sound here if desired
        });
    });
    
    // Profile image click to change (optional feature)
    const profileImg = document.getElementById('profileImg');
    if (profileImg) {
        profileImg.addEventListener('click', function() {
            // You can implement image change functionality here
            console.log('Profile image clicked');
        });
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // Enhance tab navigation visibility
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
});

// Utility function to update links dynamically
function updateLink(index, url, text, icon) {
    const links = document.querySelectorAll('.link-item');
    if (links[index]) {
        links[index].href = url;
        links[index].querySelector('span').textContent = text;
        if (icon) {
            links[index].querySelector('i:first-child').className = icon;
        }
    }
}

// Function to add new link
function addLink(url, text, icon, category = 'project') {
    const linksSection = document.querySelector('.links-section');
    const newLink = document.createElement('a');
    newLink.href = url;
    newLink.className = `link-item ${category}`;
    newLink.innerHTML = `
        <i class="${icon}"></i>
        <span>${text}</span>
        <i class="fas fa-external-link-alt"></i>
    `;
    linksSection.appendChild(newLink);
    
    // Add event listeners to new link
    newLink.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        console.log(`Link clicked: ${text}`);
    });
}