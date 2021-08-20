
const root = document.querySelector('#root');
const btnRequest = document.querySelector('#btnRequest')
const flag = document.querySelector('#flag')
const addressOfData = 'https://restcountries.eu/rest/v2/name/'
const header = document.querySelector('#nameReveal')



function createImage(array) {
    header.innerHTML = array[0].capital
    const flagSrc = array[0].flag
    const img = document.createElement('img');
    img.src = flagSrc;
    const capital = document.createElement('h1')
    root.appendChild(img);
    root.appendChild(capital);
}


function fetchCountry(e) {
    e.preventDefault()
    const input = String(document.querySelector('#countryName').value)

    const requestAddress = `${addressOfData}${input}`

    fetch(requestAddress).then(response => {
        return response.json()
    }).then(array => {
        console.log(array);
        let i = array.length
        console.log(i);
       
    const flagSrc = array[0].flag
    const img = document.createElement('img');
    img.src = flagSrc;
    const capital = document.createElement('h1')
    capital.innerText = array[0].capital
    root.appendChild(capital);
    root.appendChild(img);

}).catch (err => console.log('err'));

}

btnRequest.addEventListener('click', fetchCountry)



