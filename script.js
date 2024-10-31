document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    // Add task
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value;
        if (taskText.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            // Add complete/active functionality
            li.addEventListener('click', function() {
                li.classList.toggle('completed');
            });

            // Add remove functionality
            const removeButton = document.createElement('span');
            removeButton.textContent = '❌';
            removeButton.classList.add('remove');
            removeButton.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent triggering the completed event
                taskList.removeChild(li);
            });

            li.appendChild(removeButton);
            taskList.appendChild(li);
            taskInput.value = ''; // Clear input
        }
    });

    // Optional: Allow adding tasks with the Enter key
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
