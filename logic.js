function openModal() {
    window.onload = function () {
        setTimeout(function () {
            let modalContainer = document.querySelector(".modal-container");
            modalContainer.style.visibility = "visible";

            document.body.style.overflowY = "hidden";
            document.body.style.height = "100vh";
        }, 5000)
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
        document.body.style.overflowY = "";
        document.body.style.height = "";
    }

}

function handleFooter() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () { myFunction() };

    // Get the navbar
    var footer = document.getElementById("footer");

    // Get the offset position of the navbar
    var sticky = footer.offsetHeight;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            footer.classList.add("sticky")
        } else {
            footer.classList.remove("sticky");
        }
    }
}


closeModal();
// openModal();
handleFooter();

document.querySelector(".newsletter-button").onclick = function () {
    let modalContainer = document.querySelector(".modal-container");
    modalContainer.style.visibility = "visible";

    console.log(modalContainer);
    document.body.style.overflowY = "hidden";
    document.body.style.height = "100vh";
}
