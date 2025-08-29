let btn = document.querySelector(".btn");
let add = document.querySelector("#taskinput");
let card = document.querySelector(".card")


btn.addEventListener("click",function(){
    let task = document.createElement("div")
    task.classList.add("addedtask")
    task.innerHTML = `<input type="checkbox">${"  "}${add.value}`;

    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash");
    task.appendChild(icon)
    card.appendChild(task);

    icon.addEventListener("click",function(){
        task.remove()
    })
    if (add.value === ""){
        alert("Please Enter Task");
    }
    add.value = ""
});




