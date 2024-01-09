 let inputName1 = document.querySelector('#inputName1');
    let addList = document.querySelector('#addList');
    let output = document.querySelector('#todo');
    let Arr = [];

    // ADD BUTTON
    addList.addEventListener("click", (event) => {
        event.preventDefault();
        if (inputName1.value) {
            Arr.push(inputName1.value);
            inputName1.value = "";
            inputName1.style.color = 'black'; // Reset the color to black
        } else {
            inputName1.style.color = 'red';
        }

        updateTodoList();
    });

    // Update the Todo List
    function updateTodoList() {
        localStorage.setItem("names", JSON.stringify(Arr));
        output.innerHTML = "";
        Arr.forEach((name) => {
            output.innerHTML += `
            <li>
                <input type="checkbox" onclick="toggleLineThrough(this)">
                <p class="itemName">${name}</p> 
                <button class="edit" onclick="editItem('${name}')">Edit</button>
                <button class="deleteButton" onclick="deleteItem('${name}')">X</button>
            </li>`;
        });
    }

    // Delete Item
    function deleteItem(name) {
        let index = Arr.indexOf(name);
        if (index !== -1) {
            Arr.splice(index, 1);
            updateTodoList();
        }
    }

    // Edit Item
    function editItem(name) {
        let editedName = prompt("Edit item:", name);
        if (editedName !== null && editedName.trim() !== "") {
            let index = Arr.indexOf(name);
            if (index !== -1) {
                Arr[index] = editedName;
                updateTodoList();
            }
        }
    }

    // checked function
    function toggleLineThrough(element) {
        if (element.checked) {
            element.parentNode.style.textDecoration = "line-through";
        } else {
            element.parentNode.style.textDecoration = "none";
        }
    }

    // sort function
    function renderTodoList() {
        Arr.sort(); // Sort the array alphabetically
        updateTodoList();
    }
