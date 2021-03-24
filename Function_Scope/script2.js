//users.sort((a, b) => b.age - a.age);

(function () {
    window.addEventListener("DOMContentLoaded", (event) => {
        const users = getUsers(); // when the page loads we get the unsorted array of user obj 

        document.getElementById("sort-btn").addEventListener(`click`, event => {

            const sortedUsers = sortUsers(users);
            renderTable(sortedUsers);
        });

        renderTable(users);

        const oldestPerson = getOldest(users);
        console.log(`The oldest person is`, oldestPerson.name, oldestPerson.age)
    });
})();

function renderTable(userObjs) {
    document.getElementById("values").innerHTML = ``; // clear the table body
    // itterate through the userObjs array and for each of them call the addUer()
    userObjs.forEach(user => addUser(user));
}

function sortUsers(userObjs) {
    for (let i = 0; i < userObjs.length - 1; i++) {
        for (let j = i + 1; j < userObjs.length; j++) {
            if (userObjs[i].age < userObjs[j].age) {
                let place = userObjs[j];
                userObjs[j] = userObjs[i];
                userObjs[i] = place;
            }

        }
    }
    return userObjs
}

function getOldest(userObjs) {
    let oldest = userObjs[0];
    for (let a = 1; a < userObjs.length; a++) {
        if (userObjs[a].age > oldest.age) {
            oldest = userObjs[a]
        }
    }
    return oldest
}

//expect an array of userObj as input and for eac of them add a new row
function addUser(userObj) {
    let newRow = document.createElement(`tr`);
    newRow.innerHTML = `
    <td>${userObj.studentNo}</td>
    <td>${userObj.name}</td>
    <td>${userObj.age}</td>
    <td>${userObj.studentNo > 0}</td>
    `
    document.getElementById(`values`).appendChild(newRow)

}

function getUsers() {
    return [
        {
            studentNo: 123,
            name: 'harry',
            age: 15
        },
        {
            studentNo: 234,
            name: 'Ron',
            age: 16
        },
        {
            studentNo: 135,
            name: 'Hermione',
            age: 17
        },
        {
            studentNo: -1,
            name: 'Snape',
            age: 55
        },
        {
            studentNo: -1,
            name: 'Hagrid',
            age: 65
        }]
};

