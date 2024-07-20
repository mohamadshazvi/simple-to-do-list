// Add an event listener to the button with id 'push'
document.querySelector('#push').onclick = function() {
    // Check if the input field inside the element with id 'newtask' is empty
    if (document.querySelector('#newtask input').value.length == 0) {
        // If empty, show an alert message
        alert("Please enter a task");
    } else {
        // If not empty, add the input value as a new task in the tasks container
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        // Select all delete buttons and assign a click event to each
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                // Remove the task (parent element) when the delete button is clicked
                this.parentNode.remove();
            }
        }

        // Select all task elements and assign a click event to each
        var tasks = document.querySelectorAll(".task");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                // Toggle the 'completed' class on the task element when clicked
                this.classList.toggle('completed');
            }
        }

        // Clear the input field after adding the task
        document.querySelector('#newtask input').value = "";
    }
}
