// fetch(
//     'https://pixabay.com/api/?key=22968833-cf9b798f42870513c2372fa03&image_type=illustration&orientation=horizontal',
// )
//     .then(response => response.json())
//     .then(data => createGalery(data.hits))
//     .catch(err => console.log('err'));

// function createGalery(arr) {
//     for (let el of arr) {
//         createImage(el);
//     }
// }
// function createImage(obj) {
//     const img = document.createElement('img');
//     img.src = obj.webformatURL;
//     root.appendChild(img);
// }

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
    console.log(capital);
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

        const flagSrc = array[0].flag
        const img = document.createElement('img');
        img.src = flagSrc;
        const capital = document.createElement('h1')
        capital.innerText = array[0].capital
        root.appendChild(capital);
        root.appendChild(img);

    }).catch(err => console.log('err'));

}

btnRequest.addEventListener('click', fetchCountry)



