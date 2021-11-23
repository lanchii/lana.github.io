let image = 5;
function changeImagesRight () {
    let saveFirstNumber = document.images[0].src;
    for (let i = 0; i < 5; i++){
        if(i != 4){
            document.images[i].src = document.images[(i + 1)].src;
        } else {
            document.images[i].src = saveFirstNumber;
        }
    }
}

function changeImagesLeft () {
    let saveFirstNumber = document.images[4].src;
    for (let i = 4; i >= 0; i--){
        if(i != 0){
            document.images[i].src = document.images[(i - 1)].src;
        } else {
            document.images[i].src = saveFirstNumber;
        }
    }
}
