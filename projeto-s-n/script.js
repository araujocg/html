let button_yes = document.getElementById('yes')
let url_yes = "sim.hmtl"
let button_no = document.getElementById('no')
let url_no = "nao.html"
let height = window.innerHeight - 50
let width = window.innerWidth - 50

button_no.addEventListener('mouseover', function(){
    button_no.style.position = 'absolute'
    button_no.style.top = Math.random() * height + 'px'
    button_no.style.left = Math.random() * width + 'px'
})

button_yes.addEventListener("click", function() {
    window.location.href = url_yes;
})

button_no.addEventListener("click", function() {
    window.location.href = url_no;
})