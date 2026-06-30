const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke")

btn.addEventListener("click", function(){
    
     fetch("https://official-joke-api.appspot.com/random_jokee")
     .then(function (response) {
        return response.json()
     })
     .then(function (data){
        console.log(data.setup)
        console.log(data.punchline)
        // console.log(data)
         joke.innerHTML = `${data.setup} ${data.punchline}`
         .catch(function (error){
            console.log(error)
         })
     })

    

})