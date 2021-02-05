let todos = [
  {id:1, todo: "belajar coding"},
  {id:2, todo: "nanti tidur"}
]

const printAll = () => {
  todos.map((todo) => {
    console.log(todo.id, todo.todo)
  })
}

const printById = () => {
  console.log(todos[0].id, todos[0].todo)
}

const addTodos = (newTodo) => {
  todos.push({
    id: todos.length+1,
    todo: newTodo
  })
  printAll()
}
const deleteByID = (id) => {
  delete todos[id-1];
  printAll()
}

const updateByID = (id, newTodo) => {
  todos[id-1].todo = newTodo;
  printAll()
}

printAll();
printById();
addTodos("Suka main");
deleteByID(1)
updateByID(3, "Cinta Javascript")