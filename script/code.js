let inputName1 = document.querySelector('#inputName1');
let addList = document.querySelector('#addList');
let output=document.querySelector('#todo');
let Arr= [];
let deleteButtons = [];
// ADD BUTTON
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
        <ul>
        <input type="checkbox" onclick="toggleLineThrough(this)">
        <p class="itemName">${name}</p> 
        <button class= "edit" id="EDIT">Edit</button><button class= "deleteButton" id="THEBUT">X</button>
        </ul>`

        deleteButtons = [...document.querySelectorAll('.deleteButton')];
        deleteButtons.forEach((button) => {
          button.addEventListener('click', function () {
          console.log(event.target )
            let listItem = [...document.querySelectorAll('.itemName')];
        
            listItem.forEach(item => {
        
              console.log(listItem)
              // listItem.remove();
          
             
              let index =Arr.indexOf(item.textContent);
              console.log(Arr.indexOf(item.textContent))
              if(index != -1){
                console.log('Hello')
                console.log(typeof index)
                Arr.splice(index,1);
        
                output.innerHTML = '';
                Arr.forEach((name)=> {
                  output.innerHTML += `
                  <ul>
                  <input type="checkbox" onclick="toggleLineThrough(this)">
                  <p class="itemName">${name}</p> 
                  <button class= "edit" id="EDIT">Edit</button><button class= "deleteButton" id="THEBUT">X</button>
                  </ul>`
          
              })
              console.log(Arr)
              } else {
                console.log('Hey')
              }
            })
            // localStorage.setItem("names", JSON.stringify(Arr));
          });
        });
    });

})


// checked function
function toggleLineThrough(element) {
    if (element.checked) {
      element.parentNode.style.textDecoration="line-through"
      // document.getElementById("todo").style.textDecoration = "line-through";
    }
    else {
      element.parentNode.style.textDecoration="line-through"
      // document.getElementById("todo").style.textDecoration = "none";
    }
}
// sort function
function renderTodoList() {
    Arr.sort(); // Sort the array alphabetically
    output.innerHTML = Arr.map(name => `
      <ul>
        <input type="checkbox" onclick="toggleLineThrough(this)">
        ${name}<button class= "deleteButton" id="THEBUT">X</button>
      </ul>
      `).join("");
  }





