const express = require('express')
const app = express()
app.use(express.json());
const PORT = 1234;

const users = [
  {name:'jose',lastname: 'river'},
  {name:'pedro',lastname:'ricaurte'},
  {name:'camilo',lastname:'peralta'}
];
// // buscar todos los usuarios
 app.get('/users',(req, res)=> {
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

// metodo post and push
app.post('/users',  (req,res)=>{
  console.log(req.body)
  users.push(req.body)
  res.status(201)
  return res.send(req.body)
})

//modificar usuario por id
app.put('/users/:id',  (req,res)=>{
  const index = req.params.id;
  users[index]= req.body;
  res.status(201)
  return res.send(users[index])
})

app.delete('/user/:id',(req,res)=>{
  const index = req.params.id
  users.splice(index,1)
  res.status(201)
  console.log(req)
  return res.send(users)
}
)



app.listen(PORT,()=>console.log(`The app is running in the port`+ PORT));