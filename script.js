const surpriseButton = document.querySelector('#surpriseButton');
const factListItems = document.querySelectorAll('ul li');
const randomFactDisplay = document.querySelector('#randomFact');

function showRandomFact(){
    const randomIndex = Math.floor(Math.random() * factListItems.length);
    const randomFact = factListItems[randomIndex].textContent;
    randomFactDisplay.textContent = randomFact; 
};
surpriseButton.addEventListener('click', showRandomFact);