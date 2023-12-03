const hanberger=document.getElementById("hanberger")
const ul=document.querySelector(".ul")
console.log(ul)
const navList=document.querySelector(".navList")
const h=document.querySelector(".h-class")
const v=document.querySelector(".v-class")
hanberger.addEventListener("click",()=>{
 navList.classList.toggle("h-class")
 ul.classList.toggle("v-class")

 })