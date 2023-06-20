window.onload = function() {
    initializeSidebar();

    if(window.location.href.substring(window.location.href.lastIndexOf('/') + 1) == 'index.html' || window.location.href.substring(window.location.href.lastIndexOf('/') + 1) == ''){
        initializeDashboard()
    }
    
    if(window.location.href.substring(window.location.href.lastIndexOf('/') + 1) == 'units.html'){
        initializeUnits()
    }
    sidebarItemLabel = document.querySelectorAll('.item-label')
    sidebarItemLink = document.querySelectorAll('.menu-link')
};