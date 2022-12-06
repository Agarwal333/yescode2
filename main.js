


let links = document.getElementById("links");
          function openMenu(){
              links.style.right = "0px";
          }
          function closeMenu(){
              links.style.right = "-100%";
          }




// const reveal = document.querySelectorAll(".imageScroll");

// window.addEventListener("scroll", checkboxes);
// checkboxes();
// function checkboxes(){
//     const triggerBottom = window.innerHeight/ 5 * 4;
// reveal.froEach((image)=>{
//     const imageTop = image.getBoundingClientRect().top;

//     if(imageTop < triggerBottom){
//         image.classList.add("show");
//     }else{
//         image.classList.remove("show");
//     }
// })

// }


let container = document.querySelector(".helpContainer1");
let layer = document.querySelectorAll(".layer");

container.onmousemove = function(e){
    let X = e.pageX;
    let Y = e.pageY;

    layer[0].style.transform = 'translate('+ X/100*2 +'px, '+ Y/100*2 +'px)';
    layer[1].style.transform = 'translate('+ X/100*2 +'px, '+ Y/100*2 +'px)';
    layer[2].style.transform = 'translate('+ X/100*4 +'px, '+ Y/100*4 +'px)';

}


let container2 = document.querySelector(".helpContainer2");
let layer2 = document.querySelectorAll(".layer2");

container2.onmousemove = function(e){
    let X = e.pageX;
    let Y = e.pageY;

    layer2[0].style.transform = 'translate('+ X/100*2 +'px, '+ Y/100*2 +'px)';
    layer2[1].style.transform = 'translate('+ X/100*4 +'px, '+ Y/100*4 +'px)';
    layer2[2].style.transform = 'translate('+ X/100*6 +'px, '+ Y/100*6 +'px)';

}

// loginpage cursor

