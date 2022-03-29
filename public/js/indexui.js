const cartbtn = document.getElementById('carttt');
const favbtn = document.getElementById('favttle');
const largecart = document.getElementById('largecart')
const largefav = document.getElementById('largefav')

cartbtn.addEventListener('click',()=>{
    if (cartbtn.classList.contains('active')) {
    //   alert('cart')  
     largecart.style.marginLef   
    } else {
    // alert("Not active")
    cartbtn.classList.add('active');
    favbtn.style.transition ='.7s'
    cartbtn.style.transition ='.7s'
    favbtn.classList.remove('active');
        
    }
})


favbtn.addEventListener('click',()=>{

    if (favbtn.classList.contains('active')) {
        // alert('favourite')
        
    } else {
    // alert("Not active")
            favbtn.classList.add('active');
        favbtn.style.transition ='.7s'
    cartbtn.classList.remove('active');
        
    }
})