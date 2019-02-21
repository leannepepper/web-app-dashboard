const alertButton = document.querySelector(".alert-close"); 

alertButton.addEventListener('click', function(){
    const alertModal= document.querySelector('.alert-modal'); 
    alertModal.style.display = "none";
})