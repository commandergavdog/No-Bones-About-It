function openModal() {
    window.onload = function () {
        setTimeout(function () {
            let modalContainer = document.querySelector(".modal-container");            
            modalContainer.style.visibility = "visible";

            let mobileNav = document.querySelector("#menuToggle");
            mobileNav.style.visibility = "hidden"

            document.body.style.overflowY = "hidden";
            document.body.style.height = "100vh";
        }, 3000)
    }

    document.querySelector(".newsletter-button").onclick = function () {
        let modalContainer = document.querySelector(".modal-container");
        modalContainer.style.visibility = "visible";

        let mobileNav = document.querySelector("#menuToggle");
        mobileNav.style.visibility = "hidden"
            
        document.body.style.overflowY = "hidden";
        document.body.style.height = "100vh";
    }
}

function closeModal() {

    document.addEventListener(
        "click",
        function (event) {
            // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
            if (event.target.matches(".newsletter-button")){
                openModal()
            }
            else if (
                event.target.matches(".mc") ||
                !event.target.closest(".modal")
            ) {
                closeModal()
            }
        },
        false
    )

    function closeModal() {
        document.querySelector(".modal-container").style.visibility = "hidden"
        document.body.style.overflowY = "";
        document.body.style.height = "";

        let mobileNav = document.querySelector("#menuToggle");
        mobileNav.style.visibility = "visible"
    }

}

function handleFooter() {
    window.onscroll = function () { stickyFooter() };    
    const footer = document.getElementById("footer");
    let sticky = footer.offsetHeight;

    function stickyFooter() {
        if (window.pageYOffset >= sticky) {
            footer.classList.add("sticky")
        } else {
            footer.classList.remove("sticky");
        }
    }

    // Apply margin to bottommost section to account for footer
    window.onload  = function () {

        let footer = document.querySelector("#footer");
        let footerHeight = window.getComputedStyle(footer).height;			
        let instaSection = document.querySelector(".instagram-section");
    
        instaSection.style.marginBottom = footerHeight;        
    };
    
    window.onresize = function() {
        let footer = document.querySelector("#footer");
        let footerHeight = window.getComputedStyle(footer).height;			
        let instaSection = document.querySelector(".instagram-section");

        instaSection.style.marginBottom = footerHeight;        
    };

}

function handleMobileNav() {

    document.querySelector("#menuToggle").onclick = function () {    

        let checkBox = document.querySelector(".checkbox");        

        if (checkBox.checked == true) {            
            document.documentElement.style.overflowY = "hidden";            
            document.documentElement.style.height = "100vh";
            
        } else {            

            document.documentElement.style.overflowY = "";
            document.documentElement.style.height = "";
        }
    }
}

function scrollTo() {
    let aboutSection = document.querySelector(".about-section");
    let heroScroll = document.querySelector(".hero-scroll");

    heroScroll.onclick = function() {aboutSection.scrollIntoView({behavior: "smooth"});}
}

handleMobileNav();
handleFooter();
// openModal();
closeModal();
scrollTo();



