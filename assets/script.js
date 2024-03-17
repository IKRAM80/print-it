const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); //Sélectionnez tous les points 


let position = 0; 
const numberOfSlide = slides.length;

left.addEventListener("click", function () {
	console.log('test-left');
    if (position == 0) {
        position = numberOfSlide - 1;
    }
    else {
        position--;
    }
});
right.addEventListener("click", function () {
	console.log('test-right');
    if (position == 0) {
        position = numberOfSlide + 1;
    }
    else {
        position++;
    }
});
// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}





