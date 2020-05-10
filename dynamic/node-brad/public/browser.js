// Create feature
document.getElementById("create-form").addEventListener("submit", (e)=>{
    e.preventDefault()
})



document.addEventListener("click", (a)=>{
    //Delete feature
    if (a.target.classList.contains("delete-me")) {
        if (confirm('Are you sure')){
            axios.post('/delete-item', {id: a.target.getAttribute("data-id")}).then(()=>{
                a.target.parentElement.parentElement.remove()
            }).catch(()=>{
                console.log('please tryagain...')
            })
        }        
    }
    //udate feature
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