modal.addEventListener("click", (e)=>{
    if (modal === e.target) {
        e.target.style.display = "none";
    }
})

document.querySelector("#modal .close-btn").addEventListener("click", ()=>{
    modal.style.display = "none";
})