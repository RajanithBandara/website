const fixdiv = document.getElementById("header-div");

const initialtop = fixdiv.getBoundingClientRect().top;

function handleScroll(){
    const scrollY = window.scrollY || window.pageYOffset;

    if (scroll >= initialtop){
        fixdiv.style.position = 'fixed';
        fixdiv.style.top = '0';
    } else{
        fixdiv.style.position = 'absolute';
        fixdiv.style.top = initialtop + 'px';
    }
}

window.addEventListener('scroll', handleScroll);