document.addEventListener('DOMContentLoaded', () => {
    const letterDOM = document.getElementById('letter');

    const lowercaseAsciiStart = 65;
    const letterIndex = Math.floor(Math.random() * 26);
    const letter = String.fromCharCode(lowercaseAsciiStart + letterIndex);

    letterDOM.textContent = letter;

    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
    
    letterDOM.style.backgroundColor = randomColor;
});
