window.addEventListener('load', () => {

    // animationOne

    const word = document.getElementById('word');
    const answer = ["fast.", "easy.", "effective.", "fun."];

    let time = 100;
    let answerInx = 0;

    function timer(s) {
        return new Promise((resolve) => setTimeout(resolve, s));
    }

    const animationCycle = async () => {
        while (true) {
            let thisAnswer = answer[answerInx]
            for (let i = 0; i < thisAnswer.length; i ++) {
                word.innerText = thisAnswer.substring(0, i + 1);
                await timer(time);
            } await timer(750);

            for (let i = thisAnswer.length; i > 0; i --) {
                word.innerText = thisAnswer.substring(0, i - 1);
                await timer(time - 25);
            } await timer(500);

            if (answerInx === answer.length - 1) {
                answerInx = 0;
            } else {
                answerInx ++;
            }
        }
    }; animationCycle();

    // animationTwo 

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const tileHeight = 48;
    const tileWidth = 23
    const tileSpacing = 25;
    const loadingTime = 150;
    canvas.width = 1000;
    canvas.height = 50;

    const loadCycle = async () => {
        while (true) {
            for (let i = 0; i < 40; i ++) {
                let thisBar = i * tileSpacing;
                ctx.fillStyle = 'grey';
                ctx.fillRect(thisBar + 1, 1, tileWidth, tileHeight)
                await timer(loadingTime);
            } ctx.clearRect(0, 0, canvas.width, canvas.height);
            await timer(loadingTime);
        }
    }; loadCycle()

})