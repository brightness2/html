let headerEl = document.querySelector('#header'); 
document.addEventListener('scroll',(e)=>{
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop>60){
        headerEl.classList.add('fixed');
    }else{
        headerEl.classList.remove('fixed');
    }
});

let mobileBtn = document.querySelector('#mobile-btn');
mobileBtn.addEventListener('click',function(){
    mobileBtn.classList.toggle('active');
    headerEl.classList.toggle('active');

})