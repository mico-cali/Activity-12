
document.querySelector("#addTask").addEventListener("click", () => {

    if( document.querySelector("#todoInput").value != "") {
        document.querySelector("#toList").innerHTML += 
        `<div>
            <button class="btn btn-success chButton">✓</button>
            <button class="btn btn-danger delButton">✕</button>
            <span>${document.querySelector("#todoInput").value}</span>
        </div>
        <hr>`;
        document.querySelector("#todoInput").value = "";
    } else {
        alert("Field cannot be empty!✖️");
    }

    //Check  
    const chButtons = document.querySelectorAll(".chButton");
    chButtons.forEach((chButton) => {
        chButton.addEventListener("click", (event1) => {
            event1.target.parentElement.lastElementChild.style = "text-decoration: line-through; font-weight: 900; color: green;";
            event1.target.remove();
        });
    });

    //Delete 
    const delButtons = document.querySelectorAll(".delButton");
    delButtons.forEach((delButton) => {
        delButton.addEventListener("click", (event2) => {
            event2.target.parentElement.remove();
        });
    });

});


