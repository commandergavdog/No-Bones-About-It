

function openModal() {
    window.onload = function() {
        setTimeout(function(){
            let modalContainer = document.querySelector(".modal-container");        
            modalContainer.style.visibility= "visible";
        }, 1000)
    }
}

function closeModal() {

    document.addEventListener(
        "click",
        function (event) {
            // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
            if (
                event.target.matches(".mc") ||
                !event.target.closest(".modal")
            ) {
                closeModal()
            }
        },
        false
    )
    
    function closeModal() {
        document.querySelector(".modal-container").style.display = "none"
    }

}

closeModal();
openModal();

