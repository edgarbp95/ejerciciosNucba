
const cajas = document.querySelectorAll(".caja");
const caja1 = document.querySelector(".caja1");
const caja2 = document.querySelector(".caja2");
const caja3 = document.querySelector(".caja3");
const caja4 = document.querySelector(".caja4");
const caja5 = document.querySelector(".caja5");




const verifyVisibility = (entries) =>{

    for (entry of entries){
        if(entry.isIntersecting){
            console.log(entry.target.textContent)
            entry.target.style.animation = "aparecer 1s forwards";
        } 
        else if(!entry.isIntersecting){
            entry.target.style.animation = "desaparecer 1s";
        }
    }
}

const observer = new IntersectionObserver(verifyVisibility);

for(caja of cajas){
    observer.observe(caja)
}
