document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const createMobileMenu = () => {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.menu-toggle')) {
                const menuToggle = document.createElement('button');
                menuToggle.className = 'menu-toggle';
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.appendChild(menuToggle);
                
                menuToggle.addEventListener('click', function() {
                    const sidebar = document.querySelector('.sidebar');
                    sidebar.classList.toggle('active');
                    
                    if (sidebar.classList.contains('active')) {
                        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
                    } else {
                        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', function(event) {
                    const sidebar = document.querySelector('.sidebar');
                    const menuToggle = document.querySelector('.menu-toggle');
                    
                    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && sidebar.classList.contains('active')) {
                        sidebar.classList.remove('active');
                        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                });
            }
        } else {
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) {
                menuToggle.remove();
            }
        }
    };
    
    // Call initially
    createMobileMenu();
    
    // Update on resize
    window.addEventListener('resize', createMobileMenu);
});