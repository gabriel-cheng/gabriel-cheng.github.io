const header = document.querySelector(".header_main-container");
const navigation = document.querySelector(".header-navigation");
const navigation_subcontainer = document.querySelector(".header_navigation-subcontainer");
let showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;

    if(showSidebar) {
        navigation.style.marginLeft = "0";
        navigation.style.animationName = "showSidebar";

        document.body.style.overflow = "hidden";
        
        navigation_subcontainer.style.marginLeft = "0";
        navigation_subcontainer.style.animationName = "showSidebar";
        
        return;
    }
    
    document.body.style.overflow = "unset";
    navigation.style.animationName = "";
    navigation.style.marginLeft = "-100vw";
    
    navigation_subcontainer.style.animationName = "";
    navigation_subcontainer.style.marginLeft = "-110vw";
}

function closeSidebar(event) {
    const element = event.target;

    if(element.classList.contains("header-navigation")) {
        if(showSidebar) {
            toggleSidebar();
        }
    }
}
