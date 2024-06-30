const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
    console.log(xhr.response);
})

xhr.open('GET', 'https://api.github.com/users/Raifulalam');

xhr.send();