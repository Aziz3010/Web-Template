let randomBg = true;

// background Interval
let backgroundInterval;

// Auto Change The Background For Landing Page.
let landing_page = document.querySelector(".Landing-Page");

// Array of background images
let landing_page_imgs_arr = [1,2,3,4,5,6,7];

// ////////////////////////////////////////

// click on burger BTN to open & close the menu
$("#burgerBTN").click(function(){
    if($(".ul-Links").offset().top == 0){
        $(".ul-Links").slideDown(1000);
    } else {
        $(".ul-Links").slideUp(1000);
    }
});

// open & close setting box
let setting_options_width = $(".setting-options").innerWidth() ;

$(".setIconBox").click(function(){
    
    if($(".setting-box").css("left") == "0px"){
        $(".setting-box").css("left", - setting_options_width);
        $(".setting-box").css("transition","1000ms");
    } else {
        $(".setting-box").css("left",0);
        $(".setting-box").css("transition","1000ms");
    }

});

// autoClose setting-box
(function autoClose(){
        if($(".setting-box").css("left") == "0px"){
            $(".setting-box").css("left", - setting_options_width);
            $(".setting-box").css("transition","1000ms");
        } else {
            $(".setting-box").css("left",0);
            $(".setting-box").css("transition","1000ms");
        }
})();

// Switch Colors
const colorLi = document.querySelectorAll(".color-list li");

colorLi.forEach(li => {

    li.addEventListener("click",function(e){
        // let colorRGB = li.getAttribute("data-color");
        let colorRGB = e.target.dataset.color;

        // set color
        document.documentElement.style.setProperty('--main-color',colorRGB);

        // remove all active class from all li
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // set active class on the current li
        e.target.classList.add("active");


    })

});

// Switch random background
const randomBackground = document.querySelectorAll(".randomBackg span");

randomBackground.forEach(span => {

    span.addEventListener("click",function(e){
        // remove all active class from all span
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // set active class on the current span
        e.target.classList.add("active");


        if(e.target.dataset.backg == "yes") {
            randomBg = true;
            randomBgFunc();
        } else {
            randomBg = false;
            clearInterval(backgroundInterval);
        }

    })

});

// run BG imgs
function randomBgFunc() {
    if(randomBg === true){
        // call func after 4s
        backgroundInterval = setInterval(function(){

            // create random number
            let randNumber = Math.floor(Math.random() * landing_page_imgs_arr.length);

            // select img by randnumber
            landing_page.style.backgroundImage = `url(../img/background-${ landing_page_imgs_arr[randNumber]}.jpg)`;

        } , 4000);
    }
};
