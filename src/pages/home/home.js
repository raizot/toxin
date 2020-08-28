
import 'jquery/dist/jquery.min'
import '../../components/dropdown/dropdown'
import '../../components/date-mask/date-mask'
import '../../js/jquery.mask.min.js'
import 'air-datepicker/dist/js/datepicker.min'
import '../../components/datepicker/datepicker'
import '../../components/calculator/calculator'
import '../../components/checkbox-list/checkbox-list'
import '../../components/like-button/like-button'
import '../../components/rate-button/rate-button'
import 'ion-rangeslider/js/ion.rangeSlider.min'
import '../../components/range-slider/range-slider'
import 'paginationjs/Gruntfile'
import 'tui-pagination'
import '../../components/pagination/pagination'
import 'slick-carousel/slick/slick.min'
import '../../cards/room-slider/room-slider'

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
