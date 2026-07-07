const btn = document.querySelector(".search-btn");
const country  = document.querySelector(".country-name");
const dataBox = document.querySelector(".data")

btn.addEventListener("click", function(){
    if(country.value.trim()===""){
        alert("please enter a country name")
        return
    }
fetch(`https://countries.dev/name/${country.value.trim()}`)
    
        .then(function(response){
            if (!response.ok) {
                throw new Error("Country not found")
            }
            return response.json();
        }) 
        .then(function(data) {
            console.log(data)
            
            dataBox.innerHTML = `
            <img src="${data[0].flags.png}" alt="Flag">
            <h2> ${data[0].name} </h2>
            <p><strong>Capital:</strong>: ${data[0].capital} </p>
            <p><strong>Population:</strong>: ${data[0].population.toLocaleString()} </p>
            <p><strong>Region</strong>: ${data[0].region}</p>
            `;

            country.value = "";

})
        .catch(function(error){
            dataBox.innerHTML = `<h2>${error.message}</h2>`;
        })  

})
