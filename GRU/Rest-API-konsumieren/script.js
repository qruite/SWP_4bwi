document.getElementById("load").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
        result.json().then((data)=>{
            alert("hallo leute")
        })
    })
})