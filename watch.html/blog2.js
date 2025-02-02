const slides = document.querySelectorAll(".slide");
let counter = 0;
const maxSlides = slides.length - 1; 

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`; 
});

const goPrev = () => {
    if (counter > 0) {  
        counter--;
        slideImage();
    }
    updateButtons();
};

const goNext = () => {
    if (counter < maxSlides) {  
        counter++;
        slideImage();
    }
    updateButtons();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`; 
    });
};

const updateButtons = () => {
    document.querySelector("button[onclick='goPrev()']").disabled = (counter === 0);
    document.querySelector("button[onclick='goNext()']").disabled = (counter === maxSlides);
};

updateButtons();