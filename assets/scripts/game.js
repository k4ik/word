function initGame() {
    let overlay = document.getElementById('overlay');
    overlay.style.display = "none";
    
    generateWord();
}

async function generateWord() {
    try {
        let apiData = await fetch('https://random-word-api.herokuapp.com/word?length=5');
        let dataJson = await apiData.json();

        let word = dataJson[0];

        console.log(word);
    } catch(e) {
        console.error(e);
    }
}