alert('hello');
function hide(el) {
    el.style.visibility = 'hidden';    
    return el;
}

function show(el) {
    el.style.visibility = 'visible';    
    return el;
}

hide(document.querySelector("#primary"));