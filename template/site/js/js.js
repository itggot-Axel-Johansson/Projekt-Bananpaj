/**
 * Created by axel.johansson2 on 2017-01-23.
 */
function hello() {
    console.log("Hello, World");
}

function changeColor(grillkorv) {
    grillkorv.classList.toggle('red');
}
function reset() {
    var elements = document.querySelectorAll('.red')
    elements.forEach(function (element) {
        element.classList.remove('red');
    });
}
