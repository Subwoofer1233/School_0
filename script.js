const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const userList = document.querySelector("#my-form");
const msg = document.querySelector(".msg");


myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === "" || emailInput.value === ""){
        msg.classList.add("error");
        msg.innerHTML = "you missed a field please finish entering all fields"  
        setTimeout(() => msg.remove(), 3000); 
    }else {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
        
        nameInput.value = "";
        emailInput.value = "";
    }
}