new Slider({
    el : document.getElementById("adv-slider"),
    slideClass : 'adv-slider_item',
});


let categories = document.getElementById('categories');

categories.addEventListener("click" , () =>{
    let menu = document.querySelector('.categories_menu');
    menu.classList.toggle('categories_menu_show')
})

let city = document.getElementById('main-search');
let popup = document.querySelector(".city_popup-menu");
let popupBox = document.querySelector(".city_popup-menu-box")
city.addEventListener("click" , (e)=>{
    popup.classList.add("city_popup-menu_show")
    
    popup.addEventListener("click" , (e)=>{
        if(e.target == e.currentTarget){
            popup.classList.remove("city_popup-menu_show")
        }
    })
});

let closePCity = document.getElementById("city_popup-menu-box_close");
closePCity.addEventListener("click" , ()=>{
    popup.classList.remove("city_popup-menu_show")
})

// Go To Top Page
let backToUp = document.getElementById("backToUp");

backToUp.addEventListener("click" , ()=>{
    // document.body.scrollTop = 0;
    let y = document.documentElement.scrollTop;

    let intScroll = setInterval(() => {
        if(y > 0){
            window.scrollTo(0, y);
            y -= 80;
        }else {
            window.scrollTo(0, 0);
            removeInterval(intScroll);
        }
        
    }, 10);
    
})

function removeInterval(interv){
    clearInterval(interv)
}

function scrollFunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backToUp.classList.add('backToUp_show')
    }else{
        backToUp.classList.remove("backToUp_show");
    }
}

window.onscroll = ()=>scrollFunction();