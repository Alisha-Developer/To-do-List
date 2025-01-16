const mainToDo = document.querySelector(".todolistselem");
const inputValue = document.getElementById("inputValue");


//get data from localstorage
const gettodolistfromlocal = () => {
    const data = localStorage.getItem("todolist");
    return data ? JSON.parse(data) : [];
  };


const addToDoThisLocalStorage= (arr) => {
    return localStorage.setItem("todolist",JSON.stringify(arr));
};

//add data to localstorage
let arr = gettodolistfromlocal();

//add data dynamically when page loads
const addToDoDynamicElement = (element) => {
  const divElement = document.createElement("div");
  divElement.classList.add("addToDoList");
  divElement.innerHTML = `<li>${element}</li><button class="deleteBtn">Delete</button>`;
  mainToDo.append(divElement);
};

const toDoList = (e) => {
  e.preventDefault();

  //add data to localstorage
  const todolistvalue = inputValue.value.trim();
  console.log(!arr.includes(todolistvalue));
  if (todolistvalue != "" && !arr.includes(todolistvalue)) {
    arr.push(todolistvalue);
    localStorage.setItem("todolist", JSON.stringify(arr));

    //add data to list
    addToDoDynamicElement(todolistvalue);
  }
  //remove data from input value
  inputValue.value = "";
};

const showToDoList = () => {
  arr.forEach((element) => {
    addToDoDynamicElement(element);
  });
};

showToDoList();

const removeToDoElem = (e) => {
    const element = e.target;
    const sblgele = element.previousElementSibling.innerText;
    arr = arr.filter((element)=>{
        return  element!=sblgele;
    })
    element.parentElement.remove();
    addToDoThisLocalStorage(arr);
};



mainToDo.addEventListener("click", (e) => {
  e.preventDefault();

  
  removeToDoElem(e);

  
});

document.querySelector(".btn").addEventListener("click", (e) => {
  toDoList(e);
});
