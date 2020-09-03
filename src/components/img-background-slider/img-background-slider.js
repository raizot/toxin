
//SCSS imports
import './img-background-slider.scss'
import '../../assets/fonts/fonts.scss'

let imageContainer = document.querySelector(".slider-background-main");
let maxImg = imageContainer.dataset.maxImg;
let folder = imageContainer.dataset.folder;
let prefixImg = imageContainer.dataset.prefixImg;
let filesExtention = imageContainer.dataset.filesExtention;

let i=1;
function styleSlider(){
        imageContainer.style.opasity = '0%';
        imageContainer.style.backgroundImage = `url(img/${folder}/${prefixImg}-${i}.${filesExtention})`;
        imageContainer.style.opasity = '100%';
        imageContainer.style.backgroundPosition = "center center";
            if (i == Number(maxImg)) {
                i = 0;
              
            }
        i++;
     
        
}
styleSlider();
setInterval(styleSlider, 5000);
