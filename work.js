document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.card');
  
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            button.classList.add('active');
  
            // Filter project cards
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
  
    // Show all cards and highlight 'All Projects' button by default on load
    const defaultButton = document.querySelector('.filter-btn[data-filter="all"]');
    defaultButton.classList.add('active'); 
    defaultButton.click();
  });
  
 
      document.addEventListener('DOMContentLoaded', function () {
        const burgerMenu = document.querySelector('[data-collapse-toggle="navbar-cta"]');
        const navbarCta = document.getElementById('navbar-cta');
        
        burgerMenu.addEventListener('click', function () {
          navbarCta.classList.toggle('hidden');
          const expanded = burgerMenu.getAttribute('aria-expanded') === 'true' || false;
          burgerMenu.setAttribute('aria-expanded', !expanded);
        });
      });

    