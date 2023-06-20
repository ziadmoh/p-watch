window.onload = function() {
    initializeSidebar();

    if(window.location.pathname == '/index.html' || window.location.pathname == '/'){
        initializeDashboard()
    }
    
    if(window.location.pathname == '/units.html'){
        initializeUnits()
    }
    sidebarItemLabel = document.querySelectorAll('.item-label')
    sidebarItemLink = document.querySelectorAll('.menu-link')
};