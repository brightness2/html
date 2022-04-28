let closeNav = document.querySelector('#mobile-nav .close-nav');
let showNav = document.querySelector('#mobile-nav .show-nav');
let mobileNav = document.querySelector('#mobile-nav');
showNav.onclick = function () { 
    this.classList.add('hide');
    closeNav.classList.remove('hide');
    mobileNav.classList.add('active');
}

closeNav.onclick = function(){ 
    this.classList.add('hide');
    showNav.classList.remove('hide');
    mobileNav.classList.remove('active');
}

//监听鼠标滚动

document.addEventListener('scroll',(e)=>{
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop>100){
        document.querySelector('#pc-header').classList.add('fixed')
    }else{
        document.querySelector('#pc-header').classList.remove('fixed')
    }
})