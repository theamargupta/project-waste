document.addEventListener("click", (a)=>{
    if (a.target.classList.contains("edit-me")) {
       let userInput = prompt('enter what you want to edit', a.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
       if (userInput){
        axios.post('/update-item', {text: userInput, id: a.target.getAttribute("data-id")}).then(()=>{
            a.target.parentElement.parentElement.querySelector(".item-text").innerHTML =userInput
        }).catch(()=>{
            console.log('please tryagain...')
        })
       }
    }
})