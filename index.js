const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Yay!! I dont have reload everytime')
});

const users = [
    {id:1, name:'Sabana', email:'sabana@gmail.com', phone:'01788888888'},
    {id:2, name:'Barsha', email:'Barsha@gmail.com', phone:'01788888888'},
    {id:3, name:'Lamia', email:'Lamia@gmail.com', phone:'01788888888'},
    {id:4, name:'Tabassum', email:'Tabassum@gmail.com', phone:'01788888888'},
    {id:5, name:'Fatema', email:'Fatema@gmail.com', phone:'01788888888'},
    {id:6, name:'Sadia', email:'Sadia@gmail.com', phone:'01788888888'},
    {id:7, name:'Rimi', email:'Rimi@gmail.com', phone:'01788888888'},
    {id:8, name:'Rodela', email:'Rodela@gmail.com', phone:'01788888888'},
    {id:9, name:'Sarmin', email:'sarmin@gmail.com', phone:'01788888888'},
    {id:10, name:'Nira', email:'Nira@gmail.com', phone:'01788888888'},
    {id:11, name:'Sumaiya', email:'Sumaiya@gmail.com', phone:'01788888888'}
];

app.get('/users', (req, res)=>{
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user=>user.name.toLowerCase().includes(search));
        res.send(matched);
    }else{
        res.send(users)
    }
});

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u=>u.id===id);
    res.send(user)
});

app.post('/user', (req, res)=>{
    console.log(req.body);
    const user =req.body;
    user.id=users.length+1;
    users.push(user);
    res.send(user)
})

app.listen(port, ()=>{
    console.log('listening to port', port);
});