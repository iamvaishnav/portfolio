//Change icons

document.getElementById('c++').addEventListener('mouseenter', logoChange)
document.getElementById('c++').addEventListener('mouseleave', revertBack)

function logoChange() {
    document.getElementById('c++').src = 'icons8-c++ (1).svg';
}

function revertBack() {
    document.getElementById('c++').src = 'icons8-c++ .svg'
}