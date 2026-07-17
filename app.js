import express from 'express'

const app =  express();
app.use(express.json());
const users = [{
    id : 1,
    nom : "dalogba",
    prenom : "daleba"
},

{
    id : 2,
    nom : "maaaa",
    prenom : "biooo"
}
];
app.get('/users', (req , res)=>{
    res.json(users);
});

app.get('/', (req , res )=>{
    res.send('bienvenue ');
});

app.get('/users/:id', (req ,res )=>{
    const id = Number(req.params.id );
    const user = users.find((e)=>e.id === id);
    res.json(user);
    
});

app.post('/users' , (req , res) => {
    const {nom , prenom, age} = req.body;
    const newid = users.length+1;
    users.push({id:newid,nom,prenom,age});
    res.json(users);
});

app.listen(3000);

