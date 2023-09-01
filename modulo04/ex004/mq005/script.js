function clickMenu(){
    if (menu.style.display == 'none'){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

function changedSize(){
    if (window.innerWidth >= 768){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}