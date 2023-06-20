    const sidebar = document.getElementById('sidebar')
    const layout = document.getElementById('layout')
    const navbar = document.getElementById('navbar')
    const appName = document.getElementById('appName')
    const sidebarItemsList = document.getElementById('sidebarItemsList')
    let sidebarItemLabel;
    let sidebarItemLink;


    const sidebarItems = [
        {label : 'My Dashboard',iconClass:'fa-solid fa-coins',href:'index.html'},
        {label : 'My Units (Landlord)',iconClass:'fa-solid fa-house',href:'units.html'},
        {label : 'Tenancy Contract',iconClass:'fa-solid fa-house-laptop',href:'tenancy-contract.html'},
        {label : 'Rent Claims',iconClass:'fa-solid fa-file-pen',href:'rent-claims.html'},
        {label : 'Maintenance Request',iconClass:'fa-solid fa-file-invoice-dollar',href:'maintenance-request.html'},
        {label : 'Request History',iconClass:'fa-solid fa-clock',href:'request-history.html'},
        {label : 'Add New Request',iconClass:'fa-solid fa-file-circle-plus',href:'add-new-request.html'},
        {label : 'Settings',iconClass:'fa-solid fa-gear',href:'settings.html'},
    ]
  
    function openSidebar() {
        
        layout.classList.add('sidebar-open') 
        navbar.classList.add('app-nav-open')
        navbar.classList.remove('app-nav-closed')
        appName.innerText = 'Property Watch'

        sidebarItemLabel.forEach(el =>{
            el.classList.remove('d-none')
        })

        
        sidebarItemLink.forEach(el =>{
            el.classList.add('px-4')
        })
    }

    function toggleSidebar() {

        if ( layout.classList.contains('sidebar-open') ){
            closeSidebar()
        }else{
            openSidebar()
        }

    }
  

    function closeSidebar() {

        layout.classList.remove('sidebar-open')
        navbar.classList.add('app-nav-closed')
        navbar.classList.remove('app-nav-open')
        appName.innerText = 'PW'

        sidebarItemLabel.forEach(el =>{
            el.classList.add('d-none')
        })

        sidebarItemLink.forEach(el =>{
            el.classList.remove('px-4')
        })
    }


    function initializeSidebar(){
        sidebarItems.forEach(item =>{
            let li = document.createElement('li');
            li.classList.add('sidebar-li-item', 'position-relative', 'mb-3')
            li.innerHTML = `
                <a
                    id="itemLink"
                    href="${item.href}"
                    class="${item.href == window.location.href.substring(window.location.href.lastIndexOf('/') + 1) || (item.href == 'index.html' && window.location.href.substring(window.location.href.lastIndexOf('/') + 1) == '')  ? 'active' :'' } d-flex align-items-center px-4 py-2 mb-2 cursor-pointer w-full menu-link">

                    <i class="${item.iconClass} menu-icon "></i>
                    <div
                        class="open d-flex justify-between align-items-center flex-1 menu-group">
                        <span
                        class=" text-capitalize item-label mx-2"
                        id="itemLabel">${item.label}</span>
                    </div>
                </a>
            `
            sidebarItemsList.appendChild(li)
        })
    }


    

