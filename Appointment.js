// diplaying hamburger
const hamburger = document.querySelector(".hamburger");
const navItem = document.querySelector(".nav-item");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navItem.classList.toggle("active");
})
// const search = () =>{
//     const searchbox = document.getElementById("Search-doctor").value.toUpperCase();
//     const mainitems = document.getElementById("main-list")
//     const card = document.querySelectorAll(".card")
//     const cname = mainitems.getElementsByTagName("h1")

//     for(var i=0; i<cname.length; i++){
//         let match = card[i].getElementsByTagName("h1")[0];

//         if(match){
//             let textvalue = match.textContent || match.innerHTML
//             if(textvalue.toUpperCase().indexOf(searchbox) > -1){
//                 card[i].style.display = "";
//             }
//             else{
//                 card[i].style.display = "none";
//             }
//         }
//     }
// }