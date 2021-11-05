const bingoForm = document.getElementById('bingo-form');
const bingoFormInput = document.querySelector('.form-input');
const bingoFormBtn = document.getElementById('bingo-submit');
const bingoList = document.getElementById('bingo-list');

var bingoArr = [];
bingoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var bingoValue = bingoFormInput.value;
    bingoFormInput.value = '';
    if (!bingoValue) {
        return;
    }
    if (bingoArr.length > 14) {
        alert('You can only have 14 total!')
        return
    } else {
        bingoArr.push(bingoValue);
    }
    console.log(bingoArr);
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

//hide list
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function (e) {
    if (hideBox.checked) {
        bingoList.style.display = 'none';
    } else {
        bingoList.style.display = 'initial';
    }
})

// filter bingos
const searchBar = document.querySelector('#search-bar');
searchBar.addEventListener('keyup', function (e) {
    e.preventDefault();

    const term = e.target.value.toLowerCase();
    const bingos = bingoList.getElementsByTagName('li');
    Array.from(bingos).forEach(function (bingo) {
        const title = bingo.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            bingo.style.display = 'block';
        } else {
            bingo.style.display = 'none';
        };
    })
});

//delete button
bingoList.addEventListener('click', function (e) {
    if (e.target.className = 'delete-btn') {
        const li = e.target.parentElement;
        bingoList.removeChild(li);
    }
})