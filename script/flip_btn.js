

p_envelop_shown= true;

el_flip_btn= document.getElementById("flip_btn");

el_envelop= document.getElementById("envelop");
el_inner_card= document.getElementById("inner_card");
el_card= document.getElementById("card");



window.addEventListener("load", () => {
    el_envelop.style.display= "block";
    el_inner_card.style.display= "none";
    p_envelop_shown= true; // change this to set the first page
    el_envelop.style.animationName= "";
    el_inner_card.style.animationName= "";


    if(p_envelop_shown){
        el_envelop.style.display= "block";
        el_inner_card.style.display= "none";
    }else {
        el_envelop.style.display= "none";
        el_inner_card.style.display= "block";
    }

}, false)



var flipping= false; // important... prevent click on flip while flipping
el_flip_btn.addEventListener("click", e => {
    if(flipping) return;
    flipping= true;

    animatrion_duration= 500;

    console.log("Flip_started, envelop_shown= ", p_envelop_shown);

    if(p_envelop_shown) {
        element_to_hide= el_envelop;
        element_to_show= el_inner_card;
    } else {
        element_to_hide= el_inner_card;
        element_to_show= el_envelop;
    }

    setTimeout(() => {
        el_card.style.animationName= "flip_start";
        // element_to_hide.style.display= "none";
    }, animatrion_duration * 0);

    setTimeout(() => {
        element_to_hide.style.display= "none";
        element_to_show.style.display= "block";

        el_card.style.animationName= "flip_end";
    }, animatrion_duration * 1);

    setTimeout(() => {
        flipping= false;
        el_card.style.animationName= "";
        p_envelop_shown= p_envelop_shown^1;
    }, animatrion_duration * 2 + 200);

}, false)