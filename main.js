// class MainHeader extends HTMLElement{
//     connectedCallBack(){
//         this.innerHTML = `
//             <header>
//             <div class="logo">
//                 <a href="#"><img src="images/logo.png" alt="leaf logo"/></a>
//             </div>
//             <nav>
//                 <ul id="links">
//                     <li><a href="takeAction.html">Take Action</a></li>
//                     <li><a href="#">About Us</a></li>
//                     <li><a href="#">Learning Centre</a></li>
//                     <li><a href="#">Donation</a></li>
//                     <img src="images/close.png" alt="close icon" onclick="closeMenu()"/>     
//                 </ul>
//                 <img src="images/open.png" alt="open icon" onclick="openMenu()"/>
//             </nav>    
//             <button class="loginBtn">Login</button>
//             </header>
//         `
//     }
// }

// customElements.define("main-header", MainHeader);


let links = document.getElementById("links");
          function openMenu(){
              links.style.right = "0px";
          }
          function closeMenu(){
              links.style.right = "-100%";
          }


// let bg = getElementById("bg");
//  window.addEventListener("scroll", function(){
//     var value = window.scrollY;
//     bg.style.top = value * 1.5 + "px";
//  })