const searchform = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");

/* buttons */

const searchbtn = document.querySelector("#search-btn")
const cartbtn = document.querySelector("#cart-btn")

searchbtn.addEventListener("click", function(){
    searchform.classList.toggle("active");
   document.addEventListener("click", function(e){
    if(
        !e.composedPath().includes(searchbtn) && 
        !e.composedPath().includes(searchform)
        )
    searchform.classList.remove("active");
    
   })
});

cartbtn.addEventListener("click", function(){
    cartItem.classList.toggle("active");
   document.addEventListener("click", function(e){
    if(
        !e.composedPath().includes(cartbtn) && 
        !e.composedPath().includes(cartItem)
        )
        cartItem.classList.remove("active");
    
   })
});