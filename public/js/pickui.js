const btninc = document.querySelector('.increase');
const btndecrease = document.querySelector('.decrease');
const quantity = document.querySelector('#quantity');





btndecrease.addEventListener('click',(e)=>{
    // alert('we on')
    e.preventDefault();
    if (quantity.innerHTML >= 1) {
        quantity.innerHTML--;
        quantity.animate([
            {left:'48%'},
            {opacity:".6"},
            {left:'50%'},
            {opacity:"1"},

        ],{
            duration:1000,
        })
       
       

        if (quantity.innerHTML == 0) {
            quantity.innerHTML = 1;
            quantity.style.transition ='1s';
            btndecrease.style.backgroundColor ='gray';
            btndecrease.style.transition ='1s';


        }
    } else {
        qty.innerHTML = 1;
        btndecrease.style.backgroundColor ='gray';
        btndecrease.style.transition ='1s';
    }
    

})

btninc.addEventListener('click',(p)=>{
    // alert('we on')
    p.preventDefault();
    quantity.innerHTML++;
    quantity.animate([
        {left:'50%'},
        {opacity:".6"},
        {left:'48%'},
        {opacity:"1"},

    ],{
        duration:1000,
    })
    

})

