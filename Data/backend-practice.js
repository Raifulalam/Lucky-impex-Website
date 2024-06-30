const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
    console.log(xhr.response);
})

xhr.open('GET', 'https://www.facebook.com/raiful.alam.31149');

xhr.send();