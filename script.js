function printHackerNoteInConsole() {
    console.log("Oj ty niegrzeczny tutaj się nie zalgąda - ty hakierze :P");
}

function setCopyritheInformationIntoElement(fotterSelector) {
    const copyritheElement = document.querySelector('.footer-copyright--js');
    const year = new Date().getFullYear();
    
    copyritheElement.innerHTML = `Copyright © ${year} Mateusz Suberlak - `;
}

this.printHackerNoteInConsole();
this.setCopyritheInformationIntoElement('.footer-copyright--js');