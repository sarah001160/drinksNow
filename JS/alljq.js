$(document).ready(function(){
    window.addEventListener('scroll',function(){
        let header = document.querySelector('[data-head]');
        header.classList.toggle("jqtransparent",window.scrollY>5);
        
    })
})

$('#myModal').modal('show')

//$(document).ready(function(){
  //  ....寫內容
//})