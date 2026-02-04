// Configuration file for easy customization
const CONFIG = {
    // Profile Information
    profile: {
        name: "Your Name",
        bio: "Welcome to my personal link hub",
        image: "https://via.placeholder.com/120/4f46e5/ffffff?text=YL",
        email: "your.email@example.com"
    },
    
    // Theme Colors
    theme: {
        primary: "#4f46e5",
        social: "#3b82f6",
        project: "#10b981",
        contact: "#f59e0b",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    
    // Links Configuration
    links: {
        social: [
            { name: "GitHub", url: "#", icon: "fab fa-github" },
            { name: "LinkedIn", url: "#", icon: "fab fa-linkedin" },
            { name: "Twitter", url: "#", icon: "fab fa-twitter" }
        ],
        projects: [
            { name: "My Portfolio", url: "#", icon: "fas fa-code" },
            { name: "Blog", url: "#", icon: "fas fa-blog" },
            { name: "Resume", url: "#", icon: "fas fa-file-pdf" }
        ],
        contact: [
            { name: "Email Me", url: "mailto:your.email@example.com", icon: "fas fa-envelope" },
            { name: "Contact", url: "#", icon: "fas fa-phone" }
        ]
    },
    
    // Analytics (optional)
    analytics: {
        enabled: false,
        trackingId: "YOUR_GA_TRACKING_ID"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}