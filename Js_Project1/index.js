const tar1=document.querySelector("#add")
const tar2=document.querySelector("#rm")
const tar3=document.querySelector(".text")
let check=0
tar1.addEventListener("click",()=>{
    if(check==0){
    tar3.innerHTML ="Friend"
    tar3.style.color="green"
    console.log("friend")
    check=1
    }
   else{
    tar3.innerHTML ="Stranger"
    tar3.style.color="red"
    console.log("stranger")
    check=0
   }
})
