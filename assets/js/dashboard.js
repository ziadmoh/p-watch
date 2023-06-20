    const dashboardSection = document.getElementById('dashboardSection')



    const dashboardItems = [
        {label : 'My Units',iconClass:'fa-solid fa-house',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {label : 'Tenancy Contract',iconClass:'fa-solid fa-house-laptop',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {label : 'Rent Claims',iconClass:'fa-solid fa-file-pen',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {label : 'Maintenance Request',iconClass:'fa-solid fa-file-invoice-dollar',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {label : 'Book Facilities',iconClass:'fa-solid fa-calendar-days',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {label : 'Request History',iconClass:'fa-solid fa-clock-rotate-left',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {label : 'Add New Request',iconClass:'fa-solid fa-plus',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {label : 'Vehicle',iconClass:'fa-solid fa-car',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {label : 'Statics',iconClass:'fa-solid fa-signal',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {label : 'My Documents',iconClass:'fa-solid fa-copy',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {label : 'Latest News',iconClass:'fa-solid fa-tower-broadcast',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {label : 'Blog',iconClass:'fa-solid fa-blog',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {label : 'Emergency Contact',iconClass:'fa-solid fa-phone-volume',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {label : 'Contact US',iconClass:'fa-solid fa-square-phone',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        
        
    ]
    
    function initializeDashboard(){
        dashboardItems.forEach(item =>{
              
            let div = document.createElement('div');
            div.classList.add('col-lg-3', 'col-md-6', 'my-2')
            div.innerHTML = `
                <div class="card dashboard-card">
                    <div class="card-body p-0 d-flex flex-column align-items-center justify-content-center">
                    <i class="${item.iconClass} card-icon"></i>
                    <span class="card-title mt-3 mb-0">${item.label}</span>
                    <p class="card-desc m-0 text-center">
                        ${item.desc}
                    </p>
                    </div>
                </div>
            `
            dashboardSection.appendChild(div)
        })
    }

