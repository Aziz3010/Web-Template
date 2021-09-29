let randomBg = true;

// background Interval
let backgroundInterval;

// Auto Change The Background For Landing Page.
let landing_page = document.querySelector(".Landing-Page");

// Array of background images
let landing_page_imgs_arr = [1,2,3,4,5,6,7];

// ////////////////////////////////////////

// set color in local storage
let colorInLocal = localStorage.getItem("colorSelected");

if(localStorage.getItem("colorSelected") != null){
    // set color
    document.documentElement.style.setProperty('--main-color',colorInLocal);
}

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


        // set selected color in storage
        localStorage.setItem("colorSelected",colorRGB);

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
randomBgFunc();

// go to sections smoothly when click in link
$("header .container .ul-Links li a").click(function(e){
    let currentSection = $(e.target).attr("href");
    let sectionOffset = $(`${currentSection}`).offset().top;
    $("body , html").animate({scrollTop:sectionOffset},1500);
});

// Select skills selector
$(window).scroll(function(){
    // ourSkills offset
    let ourSkills_Offset_Top = $("#our-skills").offset().top;

    // outer height
    let ourSkills_outerHeight = $("#our-skills").outerHeight();

    // window height
    let windowHeight = this.innerHeight;

    // window scroll top
    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop > (ourSkills_Offset_Top + ourSkills_outerHeight - windowHeight)){
        let allSkills = document.querySelectorAll(".skill-box .skill-progress .progress-color");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    } else {
        let allSkills = document.querySelectorAll(".skill-box .skill-progress .progress-color");
        allSkills.forEach(skill => {
            skill.style.width = 0;
        });
    }
})

// Create Popup with imgs
let ourGallery = document.querySelectorAll("#Gallery .image-box img");
// console.log(ourGallery);

ourGallery.forEach(img => {
    img.addEventListener("click",function(e){
        // Create overlay div
        let overLayDiv = document.createElement("div");

        // Add class to overlay div
        overLayDiv.className = "Popup-overlay";

        // Append overlay to the body
        document.body.appendChild(overLayDiv);
    
        // Create Popup box
        let popupBox = document.createElement("div");

        // Add class to Popup box div
        popupBox.className = "Popup-Box";


        // create close BTN
        let closeBTN = document.createElement("span");

        // Add class to closeBTN
        closeBTN.className = "closeBTN";

        // create BTN text
        let closeText = document.createTextNode("X");

        // append text to closeBTN 
        closeBTN.appendChild(closeText);

        // append closeBTN to popup box 
        popupBox.appendChild(closeBTN);


        // check alt
        if(img.alt !== null){
            // create heading
            let heading = document.createElement("h3");
            
            // Add class to heading
            heading.className = "heading";


            // text in heading from alt
            let headingText = document.createTextNode(img.alt);

            // append the text to heading
            heading.appendChild(headingText);

            // append the heading to popup
            popupBox.appendChild(heading);
        }

        // Create Popup img
        let popupImg = document.createElement("img");

        // Add class to Popup img
        popupImg.className = "Popup-img";

        // set img src
        popupImg.src = img.src;

        // add img to popup
        popupBox.appendChild(popupImg);

        // append popup to body
        document.body.appendChild(popupBox);

    });
});

// close popup
document.addEventListener("click",function(e){
    if(e.target.className == "closeBTN"){
        // remove popup
        e.target.parentNode.remove();

        // remove overlay
        document.querySelector(".Popup-overlay").remove();
    }
});

// when scrolling the navbar-bg-color will change

$(window).scroll(function(){
    let header_Offset = $("header").offset().top;
    
    if(header_Offset > 39){
        // navbar
        $("header").css("background","#fff");
        // logo text
        $("header #logo-box .logo h2").css("color","#999");
        // burgerBTN
        $("header #logo-box #burgerBTN span").css("background","#999");
        // links color
        $("header .ul-Links ul li a").css("color","#999")
        // actv anchur
        $("header .ul-Links ul li a.actv").css("color","#f69314")
        // hover on links
        changeColorHoverOnLink();
        // setting-box
        $("#setting-box").css("background","#fff");
        // option-box
        $("#setting-box .setting-options .option-box h4,#setting-box .setting-options .option-box h6").css("color","#f69314");

    } else{
        // navbar
        $("header").css("background","#ffffff33");
        // logo text
        $("header #logo-box .logo h2").css("color","#fff");
        // burgerBTN
        $("header #logo-box #burgerBTN span").css("background","#f1f1f1");
        // actv anchur
        $("header .ul-Links ul li a.actv").css("color","#f69314")
        // setting-box
        $("#setting-box").css("background","#ffffff33");
        // option-box
        $("#setting-box .setting-options .option-box h4,#setting-box .setting-options .option-box h6").css("color","#999");

    }
})

function changeColorHoverOnLink(){
    let header_Offset = $("header").offset().top;

    $("header .ul-Links ul li a").mousemove(function(event){
        $(event.target).css("color","#f69314");
    })

    $("header .ul-Links ul li a").mouseout(function(event){
        $(event.target).css("color","#999")
    })

    // actv anchur
    $("header .ul-Links ul li a.actv").css("color","#f69314")
}

// all bullets
let allBullets = document.querySelectorAll("#nav-bullets .bullet");

allBullets.forEach(bullet => {
    bullet.addEventListener("click",function(e){
        let currentSection = e.target.dataset.section;
        let sectionOffset = $(`${currentSection}`).offset().top;
        $("body , html").animate({scrollTop:sectionOffset},1500);
    
        allBullets.forEach(BLT => {
            BLT.classList.remove("active");
        })
        bullet.classList.add("active");
    });
});















