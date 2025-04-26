const btnSearch = document.getElementById('btnSearch');

function showDetails() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    resultDiv = document.getElementById('details');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        const detail = data.details.find(item => item.name.toLowerCase() === input)
        if (detail){
            const details = detail.description;

            resultDiv.innerHTML += `<h1>${details}`
        } else {
            resultDiv.innerHTML = 'destination not found.'
        }
    })
    .catch(error=> {
        console.error('error', error);
        resultDiv.innerHTML = "an error occured while fetching data."
    });

    
}

btnSearch.addEventListener('click', searchInput);