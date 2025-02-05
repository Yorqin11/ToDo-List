


document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inp");
    const sendButton = document.getElementById("btn1");
    const todoList = document.getElementById("todo-list");

    sendButton.addEventListener("click", () => {
        const taskText = input.value.trim();
        if (taskText === "") return;
        
        const newTask = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            label.classList.toggle("completed", checkbox.checked);
        });

        const label = document.createElement("label");
        label.textContent = taskText;

        const editButton = document.createElement("img");
        editButton.src = "./img/qalam.png";
        editButton.classList.add("img11");
        editButton.addEventListener("click", () => {
            const newText = prompt("Edit task:", label.textContent);
            if (newText !== null) label.textContent = newText.trim();
        });

        const deleteButton = document.createElement("img");
        deleteButton.src = "./img/musr.png";
        deleteButton.classList.add("img12");
        deleteButton.addEventListener("click", () => {
            todoList.removeChild(newTask);
        });

        newTask.appendChild(checkbox);
        newTask.appendChild(label);
        newTask.appendChild(editButton);
        newTask.appendChild(deleteButton);
        todoList.appendChild(newTask);

        input.value = "";
    });

    input.addEventListener("input", () => {
        const filter = input.value.toLowerCase();
        const tasks = todoList.getElementsByTagName("li");
        Array.from(tasks).forEach(task => {
            const label = task.querySelector("label").textContent.toLowerCase();
            task.style.display = label.includes(filter) ? "flex" : "none";
        });
    });
});


