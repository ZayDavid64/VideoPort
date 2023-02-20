function myFunction() {
    let x = document.getElementById("myNavBar");
    if (x.className === "navBar") {
      x.className += " responsive";
      
    } else {
      x.className = "navBar";
    }
  }

function nav(link){
        window.location.href= "#"+link
     }

const cont= document.getElementsByClassName("contacts")[0]
let mail= document.getElementsByClassName("mail")[0]
mail.addEventListener("click",() =>{
     if(cont && cont.style.display == "flex"){
     cont.style.display= "none"
     }
     else{
        cont.style.display= "flex"
     }
     window.scrollTo(0, document.body.scrollHeight);
})