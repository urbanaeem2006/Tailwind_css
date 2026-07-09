const btn = document.querySelector("#btn")
const joke = document.querySelector('#joke')

btn.addEventListener("click",()=> {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        joke.innerHTML = data.setup
    })
});