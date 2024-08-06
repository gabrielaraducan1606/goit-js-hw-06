const nameInput=document.getElementById('name-input');
let nameOutput = document.getElementById('name-ouput');

nameInput.addEventListener('input', (event) => {
  let currentValue = event.target.value;
    if (currentValue === "") {
        nameOutput = 'Anonymous';
    }
    else {
        nameOutput = currentValue ;
    }

    console.log(currentValue);
});
