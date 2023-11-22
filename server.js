const express = require('express')
const app = express()
app.use(express.json());
const PORT = 3000;

const users = [
  {name:'jose',lastname: 'river'},
  {name:'pedro',lastname:'ricaurte'},
  {name:'camilo',lastname:'peralta'}
];
// // buscar todos los usuarios
 app.get('/users', function (req, res) {
   res.send(users)
 })

//buscar por nombre
app.get('/nombre',(req,res)=>{
  const name = req.query.name;
  const lastname = req.query.lastname;
  const inserUsuarios = users.find(users=>users.name === name && users.lastname === lastname);
  console.log(req.query.name);
  return res.send(inserUsuarios)
})


//filtrar por id
app.get('/users/:id',(req,res)=>{
  const index = req.params.id;
return  res.send(users[index])
})

// metodo post
app.post('/users',  (req,res)=>{
  console.log(req.body)
  users.push(req.body)
  return res.send(req.body)
})

//metodo push



app.listen(PORT,()=>console.log(`The app is running in the port`+ PORT));