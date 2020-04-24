
let buttonDiv = document.createElement('div');
document.body.prepend(buttonDiv);

let niceBtn = document.createElement("button");
niceBtn.id = ('niceBtn');
let text = document.createTextNode("Click Me");
niceBtn.appendChild(text);
buttonDiv.appendChild(niceBtn);
niceBtn.addEventListener('click', function (){
    Swal.fire(
        'Good job!',
        'You Rock!',
        'success'
      )
})
let submit = document.getElementsByClassName('submit')[0];
let inputVal = document.getElementsByClassName('inputVal')[0];
submit.addEventListener('click', function(e){
e.preventDefault();
let value = inputVal.value
console.log(value)
})
