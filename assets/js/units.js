    const unitsSection = document.getElementById('unitsSection')



    const unitsItems = [
        {
            address : 'Jumeirah Bay X1, Jumeirah lake towers',
            image:'./assets/img/room1.png',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, modi! Eius magnam perferendis corporis sed quasi, tenetur nihil dignissimos vel libero officia neque, eligendi aut, hic atque dolor maxime aperiam.',
            unitNumber : 10,
            unitType : 'parking',
            bedrooms : 3,
            sizeSqm : '',
            unitStatus : 'rented',
            nextPayment : '5\/1\/2025',
            till : '5\/1\/2025',
            balance : 10,
            rent : '120,000',
        },
        {
            address : 'Jumeirah Bay X2, Jumeirah lake towers',
            image:'./assets/img/room2.png',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, modi! Eius magnam perferendis corporis sed quasi, tenetur nihil dignissimos vel libero officia neque, eligendi aut, hic atque dolor maxime aperiam.',

            unitNumber : 10,
            unitType : 'parking',
            bedrooms : 3,
            sizeSqm : '',
            unitStatus : 'rented',
            nextPayment : '5\/1\/2025',
            till : '5\/1\/2025',
            balance : 10,
            rent : '14,050',
        },
        {
            address : 'Jumeirah Bay X3, Jumeirah lake towers',
            image:'./assets/img/room3.png',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, modi! Eius magnam perferendis corporis sed quasi, tenetur nihil dignissimos vel libero officia neque, eligendi aut, hic atque dolor maxime aperiam.',

            unitNumber : 10,
            unitType : 'parking',
            bedrooms : 3,
            sizeSqm : '',
            unitStatus : 'rented',
            nextPayment : '5\/1\/2025',
            till : '5\/1\/2025',
            balance : 100,
            rent : '167,000',
        },
        
        
        
    ]
    
    function initializeUnits(){
        unitsItems.forEach(item =>{
              
            let unit = document.createElement('div');
            let unitDesc = document.createElement('div');
            unit.classList.add('col-lg-9','my-2')
            unitDesc.classList.add('col-lg-3', 'desc-card','d-flex','justify-content-center','align-items-center' ,'p-4','my-2')
            unit.innerHTML = `
                <div class="container-fluid">
                    <div class="unit-card row">
                    <div class="col-lg-3 p-0 img-container">
                        <img class="img-fluid" alt="${item.address}" src="${item.image}">
                    </div>
                    <div class="col-lg-9 details-container p-3">
                        <h4 class="detail-title">${item.address}</h4>
                        <div class="container">
                        <div class="d-flex flex-wrap">
                            <div class="my-2 mx-2 ">
                            <div class="d-flex flex-column">
                                <span>Unit number</span>
                                <small>${item.unitNumber ? item.unitNumber :'--'}</small>
                            </div>
                            <div class="d-flex flex-column my-3 p-2 card-details-block">
                                <span class="text-light title">Unit status</span>
                                <span class="text-white desc">${item.unitStatus ? item.unitStatus :'--'}</span>
                            </div>
                            </div>
                            <div class="my-2 mx-2 ">
                            <div class="d-flex flex-column">
                                <span>Unit Type</span>
                                <small>${item.unitType ? item.unitType :'--'}</small>
                            </div>
                            <div class="d-flex flex-column my-3 p-2 card-details-block">
                                <span class="text-light">Next payment</span>
                                <span class="text-white">${item.nextPayment ? item.nextPayment :'--'}</span>
                            </div>
                            </div>
                            <div class="my-2 mx-2 ">
                            <div class="d-flex flex-column">

                                <span>Bedrooms</span>
                                <small>${item.bedrooms ? item.bedrooms :'--'}</small>
                            </div>
                            <div class="d-flex flex-column my-3 p-2 card-details-block">
                                <span class="text-light">Till Date</span>
                                <span class="text-white">${item.till ? item.till :'--'}</span>
                            </div>
                            </div>
                            <div class="my-2 mx-2 ">
                            <div class="d-flex flex-column">
                                
                                <span>Size Sqm</span>
                                <small>${item.sizeSqm ? item.sizeSqm :'--'}</small>
                            </div>
                            <div class="d-flex flex-column my-3 p-2 card-details-block">
                                <span class="text-light">Balance</span>
                                <span class="text-white">${item.balance ? item.balance :'--'}</span>
                            </div>
                            </div>
                            <div class="my-2 mx-2 ">
                            <div class="d-flex flex-column">

                                <span>Size Sqm</span>
                                <small>${item.sizeSqm ? item.sizeSqm :'--'}</small>
                            </div>
                            <div class="d-flex flex-column my-3 p-2 card-details-active">
                                <span class="text-black">Rent AED</span>
                                <span class="text-black">${item.rent ? item.rent :'--' }</span>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            `

            unitDesc.innerHTML = `
                ${item.desc}
            `
            unitsSection.appendChild(unit)
            unitsSection.appendChild(unitDesc)
        })
    }

