// function openModal() {
    // modalBackground.setAttribute("close");
// }

function closeModal() {

    let modalBackground = document.querySelector(".modal-container");
    let modalCloser = document.getElementsByTagName("i")[1];

    modalCloser.onclick = function(){        
        modalBackground.removeAttribute("open");    
    };

    modalBackground.onclick = function(){
        console.log("MB clicked")
    };

    document.body.onclick = function(){
        console.log("body clicked")
    };

}

closeModal();