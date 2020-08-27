let rateButtons=document.querySelectorAll('.rate-buttons');


for(let i =0; i<= rateButtons.length-1; i++){
    let maxRating = rateButtons[i].dataset.maxRating;
    let rating = rateButtons[i].dataset.rating;
    console.log(rating);
    for(let k = 0; k<= rating-1; k++){
        let createButtons = document.createElement('i');
        createButtons.classList.add('material-icons');
        createButtons.innerHTML = 'star';
        rateButtons[i].appendChild(createButtons);
    }
    for(let j=0; j<= maxRating-rating-1; j++){
        let createButtons = document.createElement('i');
        createButtons.classList.add('material-icons');
        createButtons.innerHTML = 'star_border';
        rateButtons[i].appendChild(createButtons);
    }

}
