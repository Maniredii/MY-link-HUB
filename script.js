// Add click tracking and smooth interactions
document.addEventListener('DOMContentLoaded', function() {
    const linkItems = document.querySelectorAll('.link-item');
    
    // Add click tracking
    linkItems.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a subtle click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Track clicks (you can integrate with analytics here)
            const linkText = this.querySelector('span').textContent;
            console.log(`Link clicked: ${linkText}`);
        });
    });
    
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