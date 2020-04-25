let container = document.createElement('container')
document.body.prepend(container)
let buttonDiv = document.createElement('div');
container.prepend(buttonDiv);

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
});

let submit = document.getElementsByClassName('submit')[0];
let inputVal = document.getElementsByClassName('inputVal')[0];
submit.addEventListener('click', function(e){
e.preventDefault();
let value = inputVal.value
console.log(value)
});

let inputDiv = document.getElementsByClassName('inputDiv')[0];
container.append(inputDiv);

let square = document.createElement('div');
square.className = 'square';
square.style.backgroundColor = 'rgb(245, 66, 197)';
container.append(square);
square.addEventListener('mouseover', function(){
    square.style.backgroundColor = 'rgb(0, 4, 255)';
});
square.addEventListener('mouseout',function(){
    square.style.backgroundColor = 'rgb(245, 66, 197)';
})

let someText = document.getElementsByClassName('paragraph')[0];
someText.addEventListener('click', function (){
   someText.style.color = getRandomColor();
})
container.appendChild(someText);

function getRandomColor() {
let r = Math.floor(Math.random() * 256); 
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
return color; 
}

let nameDiv = document.createElement('div');
let namePargph = document.createElement('p')
let nameBtn = document.createElement('button');
let nameText = document.createTextNode('What\'s My Name?');
nameBtn.appendChild(nameText);
nameDiv.appendChild(nameBtn);
nameDiv.appendChild(namePargph);
container.appendChild(nameDiv);
nameBtn.addEventListener('click', function (){
    Swal.fire({
        title: 'Got \'em',
        text: 'I\'m Pickle Rick James!',
        imageUrl: 'https://i.imgur.com/ti1yWeL.jpg/400/300',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
      let span = document.createElement('span')
      span.setAttribute('class', 'text')
      let spanText = document.createTextNode('Michelle');
      span.appendChild(spanText);
      namePargph.appendChild(span);
      console.log(spanText);

})

let squad = document.getElementsByClassName('squad')[0];
let squadGoals = document.getElementById('squadGoals');
let squadArray = ['Rey', 'BB-8', 'Pider-man', 'Luke', 'Chewy', 'Nightcrawler', 'Mickey Mouse', 'Rocket', 'Groot', 'Jesus'];
let squadBtn = document.getElementById('squadBtn');
squadBtn.addEventListener('click', function(){
    for (i = 0; i < squadArray.length; i++) {
        var li = document.createElement("li");
        var text = document.createTextNode(squadArray[i]);
        li.appendChild(text);
        squadGoals.appendChild(li);
      }
       
})