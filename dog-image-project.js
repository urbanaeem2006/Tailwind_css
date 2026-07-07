const btn = document.querySelector(".btn");
const dogImage = document.querySelector(".dogImage")

btn.addEventListener("click", function(){
        fetch("https://dog.ceo/api/breeds/image/random")
.then(function(response){
    return response.json()
})
.then(function(data){
    dogImage.src = data.message;    
    console.log(data)
})

})

