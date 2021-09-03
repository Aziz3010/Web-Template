// Auto Change The Background For Landing Page.
let landing_page = document.querySelector(".Landing-Page");

// Array of background images
let landing_page_imgs_arr = [1,2,3,4,5,6,7];

// call func after 3s
setInterval(function(){

    // create random number
    let randNumber = Math.floor(Math.random() * landing_page_imgs_arr.length);

    // select img by randnumber
    landing_page.style.backgroundImage = `url(../img/background-${ landing_page_imgs_arr[randNumber]}.jpg)`;

} , 8000);

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

// console.log();

colorLi.forEach(li => {

    li.addEventListener("click",function(e){
        // let colorRGB = li.getAttribute("data-color");
        let colorRGB = e.target.dataset.color;

        // set color
        document.documentElement.style.setProperty('--main-color',colorRGB);

    })

});












