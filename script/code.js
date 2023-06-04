let inputName1 = document.querySelector('#inputName1');
// let sort =document.querySelector('#sort');
let addList = document.querySelector('#addList');
let output=document.querySelector('#todo');
let Arr= [];

addList.addEventListener("click",(event)=>{
    event.preventDefault()
    if(inputName1.value){
        Arr.push(inputName1.value)
        inputName1.value = ""
    }else{
        inputName1.style='color:red'
    }


    localStorage.setItem("names", JSON.stringify(Arr))
    output.innerHTML= "";
    Arr.forEach((name)=> {
        output.innerHTML += `
        <li>
        <input type="checkbox" onclick="toggleLineThrough(this)">${name}</li>
        `

    })
})

function toggleLineThrough(element) {
    if (element.checked) {
      document.getElementById("todo").style.textDecoration = "line-through";
    }
    else {
      document.getElementById("todo").style.textDecoration = "none";
    }
}

function renderTodoList() {
    Arr.sort(); // Sort the array alphabetically
    output.innerHTML = Arr.map(name => `
      <li>
        <input type="checkbox" onclick="toggleLineThrough(this)">
        ${name}
      </li>
    `).join("");
  }

