document.addEventListener('DOMContentLoaded', () => {

    const nameListTextarea = document.getElementById("nameList");
    const randomNameButton = document.getElementById("randomNameButton");
    const displayName = document.getElementById("displayName");
    const namePopup = document.getElementById("namePopup");
    const overlay = document.getElementById("overlay");

    const confettiColors = ['#ffb3ba', '#ff8080', '#ff4d4d', '#ff1a1a', '#b30000'];

    randomNameButton.addEventListener("click", () => {
        const namesText = nameListTextarea.value;
        if (namesText.trim() === "") {
            alert("Please enter at least one name.")
            return;
        }

        const names = namesText.split(/\r?\n/).filter(name => name.trim() !== "");

        if (names.length === 0) {
            alert("Please enter at leat one name.");
            return;
        }

        const randomIndex = Math.floor(Math.random() * names.length);
        const chosenName = names[randomIndex];
        
        displayName.textContent = chosenName;

        namePopup.style.display = "block";
        overlay.style.display = "block";

        confetti({
            particleCount: 400,
            spread: 100,
            origin: { y: 0.6 },
            colors: confettiColors,
            scalar: 0.8,
            shapes: ['circle', 'square'],
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target == namePopup || event.target == overlay) {
            namePopup.style.display = "none";
            overlay.style.display = "none";
        }
    })
})
