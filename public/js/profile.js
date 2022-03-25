// const labelbtn = document.getElementById('dplab');
const imgsrc = document.getElementById('dp');
const pImage = document.getElementById('pImage');
const imgurl =document.getElementById('imgurl')
imgsrc.addEventListener('change',(e)=>{
    console.log(imgsrc.files[0]);
    const url = URL.createObjectURL(imgsrc.files[0]);
    console.log(ur)
    pImage.src = url
    pImage.value = imgsrc.files[0];

})

