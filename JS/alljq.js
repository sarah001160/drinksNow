$(document).ready(function(){
    // alert("jQuery is on!")
    window.addEventListener('scroll',function(){
        let header = document.querySelector('.header');
        header.classList.toggle("jqtransparent", window.scrollY>5);
    })
})


