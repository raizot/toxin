
//SCSS imports
import './home.scss'
import '../../assets/fonts/fonts.scss'

let imageContainer = document.querySelector(".home-main");
let i=1;
function styleSlider(){
    imageContainer.style.opasity = '0%';
    imageContainer.style.backgroundImage = `url(img/home/homeSlide-${i}.jpg)`;
    imageContainer.style.opasity = '100%';
    if (i == 3) {
        i = 0;
        imageContainer.style.backgroundPosition = "right center";
    }
    if (i == 1) {
        imageContainer.style.backgroundPosition = "center center";
    }
    if (i == 2) {
        imageContainer.style.backgroundPosition = "bottom right";
    }

    i++;
}
styleSlider();
setInterval(styleSlider, 5000);
