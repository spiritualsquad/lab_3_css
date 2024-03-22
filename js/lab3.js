    // Get all tab panels
    const tabPanels = document.querySelectorAll('.tabs div[role="tabpanel"]');
    
    // Add 'active' class to the first tab panel
    tabPanels[0].classList.add('active');
    
    // Add click event listener to tab links
    const tabs = document.querySelectorAll('.tabs ul li a');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            removeActive(tabPanels); // Pass tabPanels to the removeActive function
            const tabId = this.getAttribute('href').substring(1);
            const tabPanel = document.getElementById(tabId);
            tabPanel.classList.add('active');
        });
    });


function removeActive(tabPanels) {
    tabPanels.forEach(panel => {
        panel.classList.remove('active');
    });
}
