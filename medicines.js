// diplaying hamburger
const hamburger = document.querySelector(".hamburger");
const navItem = document.querySelector(".nav-item");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navItem.classList.toggle("active");
})

// search-box
const storeProducts = document.querySelectorAll(".store-product");
const search = document.getElementById("search");

search.addEventListener("keyup", (e) =>{
    e.preventDefault();
    const searchValue = search.value.toLowerCase().trim();

    for(i = 0; i < storeProducts.length; i++){
        if(storeProducts[i].classList.contains(searchValue)){
            storeProducts[i].style.display = "block";
        }else if(searchValue == ""){
            storeProducts[i].style.display = "block";
        }else{
            storeProducts[i].style.display = "none";
        }
    }
})

// making search box responsive
let inputBox = document.querySelector(".input-box");
let searchClass = document.querySelector(".search");
let closeIcon = document.querySelector(".close-icon");

searchClass.addEventListener("click", () => inputBox.classList.add("open"));
closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));

