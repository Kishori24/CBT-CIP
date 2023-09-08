// Function to add a new task
function tasks() {
    const input = document.getElementById('input');
    const taskText = input.value.trim();
  
    if (taskText !== '') {
      const list = document.getElementById('list');
      const li = document.createElement('li');
      li.innerHTML = `
        ${taskText}
        <button class="delete" onclick="deleteTask(this)">Delete</button>
      `;
      list.appendChild(li);
      input.value = '';
    }
  }
  
  // Function to delete a task
  function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
  }
  