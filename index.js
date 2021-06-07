// // Add your code here




function submitData (fName, email){
    let personalDetail = {
        name: fName,
        email: email 
    }
let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(personalDetail)
}

    return fetch("http://localhost:3000/users", configObj)
    .then(resp => {return resp.json()})
    .then(JSON=>{
        let elem = document.createElement('h1')
        elem.textContent = JSON.id
        document.body.appendChild(elem)
    })
    .catch(err=>{
        let elem = document.createElement('h1')
        elem.textContent = err
        document.body.appendChild(elem)
    })
}
document.addEventListener('keydown', (e)=>{

    if (e.key === 'ArrowLeft'){
        console.log('sup?')
        submitData('thomas', 'tm@gmail.com')}})

    

