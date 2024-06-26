    // Get all tab panels
    const tabPanels = document.querySelectorAll('.tabs div[role="tabpanel"]');
    
    // Add 'active' class to the first tab panel
    tabPanels[0].classList.add('active');
    
    // Add click event listener to tab links
    const tabs = document.querySelectorAll('.tabs ul li a');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            removeActive(tabPanels); // Pass tabPanels to the removeActive function
        // learned this from https://stackoverflow.com/questions/25931155/how-to-get-attribute-of-href-on-the-basis-of-selected-text
            this.parentNode.classList.add('active');
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
