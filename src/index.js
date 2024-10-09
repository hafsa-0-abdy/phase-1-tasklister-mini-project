// This is for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const tasksList = document.getElementById('tasks');
  const sortAscBtn = document.getElementById('sortAsc');
  const sortDescBtn = document.getElementById('sortDesc');
  let tasksArray = [];

  // This adds eventListeners for the form submission
  form.addEventListener('submit', (event) => {
      event.preventDefault();

      // This will get the input value for the form submission
      const taskDescription = document.getElementById('new-task-description').value;
      const user= document.getElementById('user').value;
      const dueDate = document.getElementById('dueDateInput').value;
      const time=document.getElementById('duration').value;
      const priority = document.getElementById('priorityInput').value;
      
      if (taskDescription === '') {
          alert('Task description cannot be empty!');
          return;
      }

      // This creates a task object
      const task = {
          description: taskDescription,
          user:user,
          dueDate: dueDate || 'No due date',
          time:duration,
          priority: priority,
      };
      tasksArray.push(task);
      renderTasks(tasksArray);
      form.reset();
      function renderTasks(tasks) {
          tasksList.innerHTML = '';
          tasks.forEach((task, index) => {
              const li = document.createElement('li');
              li.innerHTML = `${task.description}- Username:${task.user}-Due:${task.dueDate}- Deadline: ${time}- Priority: ${task.priority}
                              <button class="delete-btn" data-index="${index}">Delete</button>`;
              tasksList.appendChild(li);
              });
              addDeleteListeners();
          }
          function addDeleteListeners() {
              const deleteButtons = document.querySelectorAll('.delete-btn');
              deleteButtons.forEach(button => {
              button.addEventListener('click', (e) => {
                  const taskIndex = e.target.getAttribute('data-index');
tasksArray.splice(taskIndex, 1);
renderTasks(tasksArray);
});
});
}
sortAscBtn.addEventListener('click', () => {
  tasksArray.sort((a, b) => a.description.localeCompare(b.description));
  renderTasks(tasksArray);
});
sortDescBtn.addEventListener('click', () => {
  tasksArray.sort((a, b) => b.description.localeCompare(a.description));
renderTasks(tasksArray);
});
  });










})