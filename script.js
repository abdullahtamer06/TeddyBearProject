const nextBtn = document.getElementById("next-btn");
const bearGif = document.getElementById("bear-gif");
const question = document.getElementById("question");
const buttonsDiv = document.querySelector(".buttons");

nextBtn.addEventListener("click", () => {
    // Update the question and GIF
    question.innerText = "Would you like to go out with me?";
    bearGif.src = "teddy-no.gif";

    // Replace the button with YES and NO buttons
    buttonsDiv.innerHTML = `
        <button id="yes-btn">YES</button>
        <button id="no-btn">NO</button>
    `;

    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");

    noBtn.addEventListener("mouseover", () => {
        // Move the NO button randomly
        const randomX = Math.random() * window.innerWidth * 0.8;
        const randomY = Math.random() * window.innerHeight * 0.8;
        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });

    yesBtn.addEventListener("click", () => {
        // Change teddy's GIF to show a heart
        bearGif.src = "teddy-love.gif";

        // Update the question and remove buttons
        question.innerText = "Yeayy! I would love to.";
        buttonsDiv.innerHTML = `<p class="love-message">I love you ❤️</p>`;
    });
});
