let main = $('[id="main"]')
//#1
let niceDiv = $('<div class=nice-div></div>');
let niceBtn = $('<button class=nice-btn>Click Me</button>');
$(main).prepend(niceDiv);
$('.nice-div').append(niceBtn);
niceBtn.click(function () {
    Swal.fire(
        'Hey Rock Star!',
        'Have a super awesome day!!',
        'success'
    )
})

//#2

$('.submit').click(function () {
    event.preventDefault()
    let value = $('[type="text"]').val();
    console.log(value)
    $('[type="text"]').val('');

})

//#3
let square = $('<div class="square"></div>')
square.css('background-color', 'rgb(245, 66, 197)');
$('[class="squreDiv"]').append(square);
square.mouseover(function () {
    square.css('background-color', 'rgb(0, 4, 255)');
})
square.mouseout(function () {
    square.css('background-color', 'rgb(245, 66, 197)');
})

//#4

let pTag = $('[id="pTag"]')
pTag.click(function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    pTag.css('color', color);

})

//#5
let nameDiv = $('[id=nameDiv]');
let nameBtn = $('[id=nameBtn]');
nameBtn.click(function () {
    Swal.fire({
        title: 'Michelle',
        text: 'Cause I\'m so magical!',
        imageUrl: 'https://i.pinimg.com/564x/a1/ed/22/a1ed229fc9d37662846b81c641d2e860.jpg',
        imageWidth: 250,
        imageHeight: 450,
        imageAlt: 'Custom image',
    })
    let name = $('<span>Michelle</span>')
    $('[id=nameDiv]').append(name)
}
)

//#6
let array = ['Rey', 'BB-8', 'Pider-man', 'Luke', 'Chewy', 'Nightcrawler', 'Mickey Mouse', 'Rocket', 'Groot', 'Jesus'];
$('[id=squadBtn]').click(function () {
    for (i = 0; i < array.length; i++) {
        var name = array[i]
        var list = $('<li></li>')
        $(list).append(name)
        $('[id=squadGoals]').append(list)
    }
})
