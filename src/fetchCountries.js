// fetch(
//     'https://pixabay.com/api/?key=22968833-cf9b798f42870513c2372fa03&image_type=illustration&orientation=horizontal',
// )
//     .then(response => response.json())
//     .then(data => createGalery(data.hits))
//     .catch(err => console.log('err'));

const root = document.querySelector('#root');

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

const SOURSE = 'https://restcountries.eu/rest/v2/name/usa'

fetch(SOURSE).then(response => {
    return response.json()
}).then(array => {
    return array[0]
})