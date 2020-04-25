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
