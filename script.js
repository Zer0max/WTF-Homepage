console.log("Oj ty niegrzeczny tutaj się nie zalgąda - ty hakierze :P");

const copyritheElement = document.querySelector('.footer-copyright--js');
const year = new Date().getFullYear();

copyritheElement.innerHTML = `Copyright © ${year} Mateusz Suberlak - `;
