const darkMode = document.querySelector('.darkmode input');
const switchDark = document.querySelector('.darkmode span');
const info = document.querySelector('.info');
// console.log(darkMode);
/* darkMode.addEventListener('checked',function(){
    switchDark.classList.remove('span-btn');
}) */

// * functions
let switchDarkFunction = function(){
    info.classList.toggle('info__dark')
}

darkMode.addEventListener('click',function(){
    if(darkMode.checked){
        switchDark.classList.toggle('span-btn-active');
        switchDarkFunction();
    }
    else{
        switchDark.classList.toggle('span-btn-active');
        switchDarkFunction();
    }
})


