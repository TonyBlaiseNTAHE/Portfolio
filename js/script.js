function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger.icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/DSC_7370 (6).jpg") {
        myImage.setAttribute("scr", "images/DSC_7370 (4).jpg");
    } else {
        myImage.setAttribute("scr", "images/DSC_7370 (6).jpg");
    }
};