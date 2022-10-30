const tbody = document.querySelector('tbody');

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    const camposSemCalc = [
        document.querySelector('#usuario'),
        document.querySelector('#adultos'),
        document.querySelector('#criancas'),
        document.querySelector('#diarias'),
        document.querySelector('#suite'),
    ];

    const tr = document.createElement('tr');

    camposSemCalc.forEach(e => {
        const td=document.createElement('td');

        td.textContent = e.value;

        tr.appendChild(td)
    })

    const imperial = 785.00;
    const master = 890.00;
    const bangalo = 1195.00;
    const palladium = 1520.00;
    const suite = document.querySelector('#suite');
    const diaria=document.createElement('td');


    if (suite.value=="Imperial Beach"){
        diaria.textContent = ('R$ ' +imperial);
    }
    else if (suite.value=="Master Beach"){
        diaria.textContent = ('R$ ' +master);
    }
    else if (suite.value=="Bangalô Beach"){
        diaria.textContent = ('R$ ' +bangalo);
    }
    else{
        diaria.textContent = ('R$ ' +palladium);
    }

    tr.appendChild(diaria);
    tbody.appendChild(tr);


    this.reset();

})