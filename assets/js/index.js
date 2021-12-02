const bingoForm = document.getElementById('bingo-form');
const bingoFormInput = document.querySelector('.form-input');
const bingoFormBtn = document.getElementById('bingo-submit');
const bingoList = document.getElementById('bingo-list');


var bingoArr = [];
// bingoArr = ["Make a three columns grid layout where the first row is 150px high",
//     " a three cwhere the first row is 150px high",
//     " three coluasdgfasdf the first row is 150px high",
//     "gxcfvst row is 150px high",
//     "Make grid layout where the first row is 150px high",
//     "Make a three columns grid layout where the first row is 150px high",
//     "s 150px high",
//     "67586 the first row is 150px high",
//     "n45345he first row is 150px high",
//     "umns grid layout where the first row is 150px high",
//     "Make a t4563456784568796ut where the first row is 150px high",
//     "ere the first row is 150px high",
//     "56456first row is 150px high",
//     "Make a three columns grid layout where the first row is 15456456grid layout where the first row is 150px high",
//     "6here the first row is 150px high",
//     "Make a three columns grid layout45645645out where the first row is 150px high",
//     "rtgmns grid layout where the first row is 150px high",
//     "Make a three columns grid layout where the first row is 150px high",
//     "fasdfasdfMake a three columns grid la456ow is 150px high",
//     "asdfasdghdgMake a three columns grid layout where the first row is 150px high",
//     "Maasdfasdsake a three columns 456456456rst row is 150px high",


// ]
// USE FOR AUTOFILLING ARRAY ERASE ON DEPLOY
// function buildArray() {
//     for (var i = 0; i < 25; i++) {
//         bingoArr.push(i);
//     }
// }
// buildArray();

// ADDING BINGO TERM TO LIST
bingoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var bingoValue = bingoFormInput.value;
    bingoFormInput.value = '';
    if (!bingoValue) {
        return;
    }
    if (bingoArr.length > 24) {
        alert('You can only have 25 total!')
        return
    } else {
        bingoArr.push(bingoValue);
    }
    // console.log(bingoArr);
    // create elements
    const li = document.createElement('li');
    const bingoItem = document.createElement('span');
    const deleteBtn = document.createElement('button');
    //add content
    deleteBtn.innerText = 'delete';
    bingoItem.innerText = bingoValue;

    //add classes
    deleteBtn.className = 'btn btn-danger delete-btn'
    // append elements
    li.appendChild(bingoItem);
    li.appendChild(deleteBtn);
    bingoList.appendChild(li);
})

//HIDE LIST
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function (e) {
    if (hideBox.checked) {
        bingoList.style.display = 'none';
    } else {
        bingoList.style.display = 'initial';
    }
})

// filter bingos
// const searchBar = document.querySelector('#search-bar');
// searchBar.addEventListener('keyup', function (e) {
//     e.preventDefault();

//     const term = e.target.value.toLowerCase();
//     const bingos = bingoList.getElementsByTagName('li');
//     Array.from(bingos).forEach(function (bingo) {
//         const title = bingo.firstElementChild.textContent;
//         if (title.toLowerCase().indexOf(term) != -1) {
//             bingo.style.display = 'block';
//         } else {
//             bingo.style.display = 'none';
//         };
//     })
// });

//DELETE BUTTON
bingoList.addEventListener('click', function (e) {
    if (e.target.className = 'delete-btn') {
        const li = e.target.parentElement;
        console.log(li.firstElementChild.textContent)
        var bingoValue = li.firstElementChild.textContent
        const index = bingoArr.indexOf(bingoValue)
        if (index > -1) {
            bingoArr.splice(index, 1);
        }
        bingoList.removeChild(li);
    }
})

// Display list to table button
const displayBtnEl = document.getElementById("displayBtn");
const tdEl = document.querySelectorAll("td");

displayBtnEl.addEventListener('click', function (e) {
    // console.log("push to table button clicked");
    for (var i = 0; i < bingoArr.length; i++) {
        if (i === 12) {

        } else {

            tdEl[i].textContent = bingoArr[i];
        }
    }
    tdEl[12].textContent = "";


})

//Shuffle button
const shuffleBtnEl = document.getElementById('shuffleBtn');
shuffleBtnEl.addEventListener('click', function (e) {
    console.log("shuffle clicked");
    var shuffledList = bingoArr.sort((a, b) => .5 - Math.random());
    for (var i = 0; i < shuffledList.length; i++) {

        tdEl[i].textContent = shuffledList[i];

    }
    tdEl[12].textContent = "";
    // console.log(shuffledList);
})

const foo = {
    bar() {
        console.log("hello");
    },
    name: "albert",
    age: 26,
}
// when bingo is clicked turn change color
const tableEl = document.getElementById("table");
tableEl.addEventListener('click', function (e) {
    if (e.target.className === "checked") {
        e.target.className = "unchecked"
    } else {
        e.target.className = "checked"
    }
    // console.log(e.target.textContent)

    // console.log(e.target.className)
})