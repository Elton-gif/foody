const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const request  = require('request');
const { json } = require('body-parser');
const app = express();


var admin = require("firebase-admin");

var serviceAccount = require("./public/fb/foody-36890-firebase-adminsdk-po36u-b8112faf34.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



app.set('view-engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());



const firestore = admin.firestore();
const auth = admin.auth();
// console.log(auth)

app.get('/home',(req,res)=>{
    const index = 1;
    res.render('index.ejs',{index:index});
    console.log(req.hostname);
})

app.get('/cart',async(req,res)=>{
    const index = 2;

    res.render('cart.ejs',{index:index})
})
app.post('/cart',async(req,res)=>{
    console.log(req.body)
})
app.post('/cart-delete',async(req,res)=>{
    console.log(req.body)
})


app.get('/',(req,res)=>{
  res.render('signup.ejs')
})

app.post('/',(req,res)=>{
    const {phone,email,username,password} =req.body;
   firestore.collection('user').doc().set({
       phone:phone,
       email:email,
       username:username,
       password:password
   })
   .then(()=>{
       console.log('saved')
       res.redirect('/home')
   })
})

app.get('/login',(req,res)=>{
res.render('login.ejs')
console.log('login')
})
app.post('/login',(req,res)=>{
    const {phone,password} =req.body;
    firestore.collection('user').doc().set({
        phone:phone,
       
        password:password
    })
    .then(()=>{
        console.log('saved')
        res.redirect('/home')
    })
})
app.get('/pick',(req,res)=>{
    res.render('pick.ejs')
   
})
app.route('/profile')
.get((req,res)=>{
    const index = 3;

    res.render('profile.ejs',{index:index});
})

app.route('/admin')
.get((req,res)=>{
res.render('admin/admin.ejs')
})
.post((req,res)=>{
    
})

app.route('/fav')
.get((req,res)=>{
const index = 0;

res.render('fav.ejs',{index:index})
})
.post((req,res)=>{
    
})

// const request = require('request');
// const request = require('request');

// const options = {
//   method: 'GET',
//   url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
//   qs: {ingr: 'salt'},
//   headers: {
//     'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com',
//     'x-rapidapi-key': '985b9956cfmsh7bab8624d7c0875p156e51jsn349d7eddd807',
//     useQueryString: true
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);
//     var empty = []
//     var foods = JSON.parse(body);
//     var foodready = foods.hints;
    
//     foodready.forEach(element => {
//         console.log(element.food)
//         if (element.food.image === undefined) {
//             console.log('no image')
//         }else{
//             console.log(element.food.image)
//             var blueprint ={
//                 foodId:element.food.foodId,
//                 Link:element.food.uri,
//                 label:element.food.label,
//                 nutrients:[element.food.nutrients],
//                 image:element.food.image,
               
//                 category:element.food. category,
//                 categoryLabel:element.food.categoryLabel
//             }

//             console.log(blueprint)
//             firestore.collection('foods').doc().set(blueprint)
//             .then(console.log('saved'))
//             .catch(err=>{
//                 console.log(err.message)
//             })

//         }
        
      
//     });
// });

// const request = require('request');

// const option2 = {
//   method: 'GET',
//   url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
//   qs: {query: 'italian wedding soup'},
//   headers: {
//     'x-rapidapi-host': 'recipe-by-api-ninjas.p.rapidapi.com',
//     'x-rapidapi-key': '985b9956cfmsh7bab8624d7c0875p156e51jsn349d7eddd807',
//     useQueryString: true
//   }
// };

// request(option2, function (error, response, body) {
// 	if (error) throw new Error(error);

//     const lists = JSON.parse(body)

//     lists.forEach((e)=>{
//         const store ={
//             title:e.title,
//             ingredients:e
//         }
//     })
// 	console.log(lists);
// });

      

let port = process.env.PORT;

if (port == null || port =='') {
    port = 8000;
}


app.listen(port,console.log('listening ...'))