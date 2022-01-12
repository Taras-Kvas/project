// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    return response.json()
}).then(users => {
    let divElement = document.createElement('div');
    divElement.classList.add('wrapper')
    for (const user of users) {
        let divCard = document.createElement('div');
        divCard.classList.add('user');
        divCard.innerHTML = `
                <h1>ID: ${user.id}</h1>
                <h2>Name: ${user.name}</h2> 
        `;
        let btn = document.createElement('button');
        btn.classList.add('btnClick')
        btn.innerText = 'User'
        btn.onclick = function (e) {
            e.preventDefault()
            localStorage.setItem('user', JSON.stringify(user));
            location.href = 'user-details.html'
        }
        divElement.appendChild(btn)
        divElement.appendChild(divCard)
        document.body.appendChild(divElement);
    }
})