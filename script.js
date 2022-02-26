const searchInput = document.querySelector('#search');
const userCards = document.querySelector(".user-cards");
let users = [];

searchInput.focus();

//  fetch data from jsonplaceholder API
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    console.log(data);
    users = data;
    const searchKey = '';
    appendCard(searchKey, users);
})

// event for entering search keyword in input field
searchInput.addEventListener("input", e => {
    let searchKey = e.target.value.trim().toLowerCase();
    let filteredUsers = [...users].filter(user => {
        const hasSearchKey = user.name.toLowerCase().includes(searchKey) || user.email.toLowerCase().includes(searchKey);
        if(hasSearchKey) return true;
        else return false;
    })
    appendCard(searchKey, filteredUsers);
})

// append a user data card to userCards
function appendCard(searchKey, usersArr){
    userCards.innerHTML = '';
    usersArr.forEach(user => {
            let newCard = document.createElement('div');
            newCard.innerHTML = `<div class="header">${user.name}</div>
            <div class="body">${user.email}</div>`;
            newCard.className = 'card';
            userCards.append(newCard); 
    });
}