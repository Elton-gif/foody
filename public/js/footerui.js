const tabbtn = [...document.querySelectorAll('#tabbtn')];
const index = document.getElementById('index').innerHTML;


// tabbtn.forEach((e)=>{
//    e.addEventListener('click',()=>{
//       var meindex  = tabbtn.indexof(e);
//       alert(meindex)

//    })
// })
    tabbtn[index].style.backgroundColor ='white'
    tabbtn[index].style.transition ='2s'


    tabbtn[index].style.borderRadius ='50%'
    tabbtn[index].style.padding ='5px'

    console.log(index)

// tabbtn.forEach((e)=>{
//     console.log(e)

//     tabbtn[index].style.color ='white'
// })

