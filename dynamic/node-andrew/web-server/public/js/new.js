const weatform = document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('#forcast')



weatform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    if (location) {
        fetch(`http://127.0.0.1:3000/weather?city=${location}`).then((res)=>{
            res.json().then((data)=>{
                if(data.err){
                    message.textContent=data.err
                } else {
                    message.textContent=data.forcast
                }
            })
        })
    }
})