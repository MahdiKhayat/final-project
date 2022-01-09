const items = document.getElementsByClassName('ourMobiles-img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)





const items2 = document.getElementsByClassName('ourMobiles-img1');
const nbSlide1 = items2.length;
const suivant_S1 = document.querySelector('.right_slider1');
const precedent_S1 = document.querySelector('.left_slider1');
let count1 = 0;

function slideSuivante_S1(){
    items2[count1].classList.remove('active');

    if(count1 < nbSlide1 - 1){
        count1++;
    } else {
        count1 = 0;
    }

    items2[count1].classList.add('active')
    console.log(count1);
    
}
suivant_S1.addEventListener('click', slideSuivante_S1)


function slidePrecedente_S1(){
    items2[count1].classList.remove('active');

    if(count1 > 0){
        count1--;
    } else {
        count1 = nbSlide1 - 1;
    }

    items2[count1].classList.add('active')
    // console.log(count);
    
}
precedent_S1.addEventListener('click', slidePrecedente_S1)

// function keyPress(e){
//     console.log(e);
    
//     if(e.keyCode === 37){
//         slidePrecedente();
//     } else if(e.keyCode === 39){
//         slideSuivante();
//     }
// }
// document.addEventListener('keydown', keyPress)




const items3 = document.getElementsByClassName('ourMobiles-img2');
const nbSlide2 = items3.length;
const suivant_S2 = document.querySelector('.right_slider2');
const precedent_S2 = document.querySelector('.left_slider2');
let count2 = 0;

function slideSuivante_S2(){
    items3[count2].classList.remove('active');

    if(count2 < nbSlide2 - 1){
        count2++;
    } else {
        count2 = 0;
    }

    items3[count2].classList.add('active')
    console.log(count2);
    
}
suivant_S2.addEventListener('click', slideSuivante_S2)


function slidePrecedente_S2(){
    items3[count2].classList.remove('active');

    if(count2 > 0){
        count2--;
    } else {
        count2 = nbSlide2 - 1;
    }

    items3[count2].classList.add('active')
    // console.log(count);
    
}
precedent_S2.addEventListener('click', slidePrecedente_S2)



const items4 = document.getElementsByClassName('ourMobiles-img3');
const nbSlide3 = items4.length;
const suivant_S3 = document.querySelector('.right_slider3');
const precedent_S3 = document.querySelector('.left_slider3');
let count3 = 0;

function slideSuivante_S3(){
    items4[count3].classList.remove('active');

    if(count3 < nbSlide3 - 1){
        count3++;
    } else {
        count3 = 0;
    }

    items4[count3].classList.add('active')
    console.log(count3);
    
}
suivant_S3.addEventListener('click', slideSuivante_S3)


function slidePrecedente_S3(){
    items4[count3].classList.remove('active');

    if(count3 > 0){
        count3--;
    } else {
        count3 = nbSlide3 - 1;
    }

    items4[count3].classList.add('active')
    // console.log(count);
    
}
precedent_S3.addEventListener('click', slidePrecedente_S3)