console.log("hy")

// const toggleButton=document.getElementsByClassName('toggle-button')[0]
// const navbar=document.getElementsByClassName('navbar')[0]
// toggleButton.addEventListener('click',()=>{
//     navbar.classList.toggle('active')
// })


const toggleButton=document.getElementsByClassName('toggle-button')[0]
toggleButton.onclick=function(){
    toggleButton.classList.toggle('active')
}