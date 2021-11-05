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
    deleteBtn.className = 'btn btn-danger'
    // append elements
    li.appendChild(bingoItem);
    li.appendChild(deleteBtn);
    bingoList.appendChild(li);
})