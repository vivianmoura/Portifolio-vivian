let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 200){
        header.style.backgroud = '#191919'
    }else {
        header.style.backgroud = 'transparent' 
    }

})