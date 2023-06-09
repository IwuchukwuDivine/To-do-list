let todoList = [{task: 'read my books', duedate: '2023-05-21'},
{task: 'make my hair ', duedate: '2023-05-10'},
{task: 'sweep the house', duedate: '2023-05-19'},
{task: 'take a stroll', duedate: '2023-05-10'},
{task: 'mop the house', duedate: '2023-05-18'},
{task: 'socialize', duedate: '2023-05-23'},
{task: 'visit my mum', duedate: '2023-05-18'}];

renderTodoList();

let toAddElement = document.querySelector('.js-add-button');
toAddElement.addEventListener('click', toAddTodo);

function toAddTodo () {
  let taskElement = document.querySelector('.js-todo-name');
  let task = taskElement.value;
  let duedateElement = document.querySelector('.js-todo-duedate');
  let duedate = duedateElement.value;
  todoList.push({task, duedate});
  console.log(todoList);
  document.querySelector('.js-todo-name').value = '';
  document.querySelector('.js-todo-duedate').value = '';
  renderTodoList();
}



function renderTodoList() {
  let htmlLists = '';
  todoList.forEach((todo, index) => {
    let {task, duedate} = todo;
    const htmlValue = `
      <div>${task}</div>
      <div>${duedate}</div>
      <div>
      <button class="delete-button js-delete-button">Delete</button>
      </div>
    `;
    htmlLists += htmlValue;
  });

  document.querySelector('.js-todo-list').innerHTML = htmlLists;
  document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}