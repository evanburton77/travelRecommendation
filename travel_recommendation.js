const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

function showDetails() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    resultDiv = document.getElementById('details');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        const detail = data.countries.find(item => item.name.toLowerCase() === input);
 if(input === "temples"){
        const temple = data.temples;
        resultDiv.innerHTML += `<h1>${temple[1].name}</h1>`
        resultDiv.innerHTML += `<p>${temple[1].description}</p>` 
        resultDiv.innerHTML += `<img width="50%" src="${temple[1].imageUrl}">`
        resultDiv.innerHTML += `<h1>${temple[0].name}</h1>`
        resultDiv.innerHTML += `<p>${temple[0].description}</p>` 
        resultDiv.innerHTML += `<img src="${temple[0].imageUrl}">`
    }   else if(input === "beaches"){
        const beach = data.beaches; 
        resultDiv.innerHTML += `<h1>${beach[1].name}</h1>`
        resultDiv.innerHTML += `<p>${beach[1].description}</p>` 
        resultDiv.innerHTML += `<img width="50%" src="${beach[1].imageUrl}">`
        resultDiv.innerHTML += `<h1>${beach[0].name}</h1>`
        resultDiv.innerHTML += `<p>${beach[0].description}</p>` 
        resultDiv.innerHTML += `<img src="${beach[0].imageUrl}">`
    } else if(detail){
        resultDiv.innerHTML += `<h1>${detail.cities[1].name}</h1>`
        resultDiv.innerHTML += `<p>${detail.cities[1].description}</p>` 
        resultDiv.innerHTML += `<img width="50%" src="${detail.cities[1].imageUrl}">`
        resultDiv.innerHTML += `<h1>${detail.cities[0].name}</h1>`
        resultDiv.innerHTML += `<p>${detail.cities[0].description}</p>` 
        resultDiv.innerHTML += `<img src="${detail.cities[0].imageUrl}">`
    }

        
    })
    .catch(error=> {
        console.error('error', error);
        resultDiv.innerHTML = "an error occured while fetching data."
    });

    
}


function clear(){
    document.getElementById('conditionInput').value = ''
    
}
btnSearch.addEventListener('click', showDetails);
btnClear.addEventListener('click', clear);