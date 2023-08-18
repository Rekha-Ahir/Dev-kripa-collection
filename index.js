console.log("hy")

// const toggleButton=document.getElementsByClassName('toggle-button')[0]
 const navbar=document.getElementsByClassName('navbar')
// toggleButton.addEventListener('click',()=>{
//     navbar.classList.toggle('active')
// })


const toggleButton=document.getElementsByClassName('toggle-button')[0]
toggleButton.onclick=function(){
   navbar.classList.toggle('active')
}
