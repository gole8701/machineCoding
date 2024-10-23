import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json())

const PORT = 5111;

app.all('/', (req,res)=>{
    // console.log('req',req);
    // console.log('res',res);
    res.send('i am up')
})

const todos = [{
    id: '1',
    title: 'task 1',
    completed: false,
},
{
    id: '2',
    title: 'task 2',
    completed: true,
}
];

app.get('/todos', (req, res)=>{
res.send(todos)
})

app.post('/todos', (req, res)=>{
    const newTodo =req.body;
    todos.push(newTodo);
    res.status(201).json({
        message: "new todo added!"
    })

})

app.put('/todos/:id', (req, res)=>{
const newTodoData = req.body;
const todoParamsId = req.params.id;
const todoIndex = todos.findIndex(td => td.id === todoParamsId);
if(todoIndex !== -1){
    todos[todoIndex] = {
        id: todoParamsId,
        ...newTodoData,
    }
    res.send({ message: "todo updated successfully!"})
}else {
res.status(400).send({ message: "todo id doesnt exist"})
}})

app.delete('/todos/:id', (req, res)=>{
    const todoParamsId = req.params.id;
    const todoIndex = todos.findIndex(td => td.id === todoParamsId);
    if(todoIndex !== -1){
       todos.splice(todoIndex, 1);
    }
    res.send({message: "todo deleted successfully!" })
    })

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
})