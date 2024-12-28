
window.onload = function () {
    // Your code here
    const carousel = document.querySelector('.carousel');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth; // card width
    let currentIndex = 1; // current index

    function cloneCards() {
        const lastClone = cards[cards.length - 1].cloneNode(true); // cloning lastcard
        // cloning first 5 card and adding after last card [cause gonna display 5 at a time at max]
        for (let i = 0; i < 5; i++) {
            carousel.appendChild(cards[i].cloneNode(true));
        }
        carousel.insertBefore(lastClone, carousel.firstChild); // add lastclone before first card
        carousel.style.transform = `translateX(-${cardWidth}px)`;
    }

    function updateCarousel() {
        carousel.style.transition = 'transform 0.5s ease-in-out'; // updating card and animation
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function checkBoundary() {
        if (currentIndex === 0) { // when index 0
            carousel.style.transition = 'none';
            currentIndex = cards.length;
            carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            dot(currentIndex); // activing pagination indicator according to index
        } else if (currentIndex === cards.length + 1) { // for index greaterthen total card length
            carousel.style.transition = 'none';
            currentIndex = 1; // updating to initial index
            carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            dot(currentIndex); // activing pagination indicator according to index
        }
        else {
            dot(currentIndex); // activing pagination indicator according to index
        }
    }
    // Dot checker or Radio checker or pagination indicator update
    function dot(currentIndex) {
        if (currentIndex == 1) {
            document.getElementById("radio1").checked = true;
            document.getElementById("radio2").checked = false;
            document.getElementById("radio3").checked = false;
            document.getElementById("radio4").checked = false;
            document.getElementById("radio5").checked = false;
            document.getElementById("radio6").checked = false;
            document.getElementById("radio7").checked = false;
        }
        else if (currentIndex == 2) {
            document.getElementById("radio1").checked = false;
            document.getElementById("radio2").checked = true;
            document.getElementById("radio3").checked = false;
            document.getElementById("radio4").checked = false;
            document.getElementById("radio5").checked = false;
            document.getElementById("radio6").checked = false;
            document.getElementById("radio7").checked = false;
        }
        else if (currentIndex == 3) {
            document.getElementById("radio1").checked = false;
            document.getElementById("radio2").checked = false;
            document.getElementById("radio3").checked = true;
            document.getElementById("radio4").checked = false;
            document.getElementById("radio5").checked = false;
            document.getElementById("radio6").checked = false;
            document.getElementById("radio7").checked = false;
        }
        else if (currentIndex == 4) {
            document.getElementById("radio1").checked = false;
            document.getElementById("radio2").checked = false;
            document.getElementById("radio3").checked = false;
            document.getElementById("radio4").checked = true;
            document.getElementById("radio5").checked = false;
            document.getElementById("radio6").checked = false;
            document.getElementById("radio7").checked = false;
        }
        else if (currentIndex == 5) {
            document.getElementById("radio1").checked = false;
            document.getElementById("radio2").checked = false;
            document.getElementById("radio3").checked = false;
            document.getElementById("radio4").checked = false;
            document.getElementById("radio5").checked = true;
            document.getElementById("radio6").checked = false;
            document.getElementById("radio7").checked = false;
        }
        else if (currentIndex == 6) {
            document.getElementById("radio1").checked = false;
            document.getElementById("radio2").checked = false;
            document.getElementById("radio3").checked = false;
            document.getElementById("radio4").checked = false;
            document.getElementById("radio5").checked = false;
            document.getElementById("radio6").checked = true;
            document.getElementById("radio7").checked = false;
        }
        else if (currentIndex == 7) {
            document.getElementById("radio1").checked = false;
            document.getElementById("radio2").checked = false;
            document.getElementById("radio3").checked = false;
            document.getElementById("radio4").checked = false;
            document.getElementById("radio5").checked = false;
            document.getElementById("radio6").checked = false;
            document.getElementById("radio7").checked = true;
        }
    }
    // right arrow button event
    rightArrow.addEventListener('click', () => {
        currentIndex++; // updating index
        updateCarousel();
        setTimeout(checkBoundary, 500);
        clearInterval(myinterval);
    });
    // left arrow button event
    leftArrow.addEventListener('click', () => {
        currentIndex--; // updating index
        updateCarousel();
        setTimeout(checkBoundary, 500);
        clearInterval(myinterval);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            // Code to handle left arrow key
            currentIndex--; // updating index
            updateCarousel();
            setTimeout(checkBoundary, 500);
            clearInterval(myinterval);
        } else if (event.key === "ArrowRight") {
            // Code to handle right arrow key
            currentIndex++; // updating index
            updateCarousel();
            setTimeout(checkBoundary, 500);
            clearInterval(myinterval);
        }
    });

    window.addEventListener('resize', () => {
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${currentIndex * cards[0].offsetWidth}px)`;
    });

    cloneCards();
    // autoratate Function to execute every 2 seconds
    function autoratate() {
        currentIndex++;
        updateCarousel();
        setTimeout(checkBoundary, 500);
    }

    // Set the interval to 2000 milliseconds (2 seconds) for autorotation
    let myinterval; let temp = 0;
    // function to control rotation
    function rotation() {
        myinterval = setInterval(autoratate, 2000);
    }
    // Stop rotation when mouseover
    carousel.addEventListener("mouseover", () => {
        clearInterval(myinterval); // clear or stoping Interval
        temp = 0; // reset temp value
    });
    // Start rotation when mouseout
    carousel.addEventListener("mouseout", () => {
        temp++;
        // When the mouseout event occurs, it continuously calls the rotation function in a short time period
        // To control this and ensure the rotation function is called only once, useing temp as a temporary variable
        if (temp == 1)
            rotation();
    });
    // For touch devices 
    // When touched
    carousel.addEventListener('touchstart', (event) => {
        clearInterval(myinterval);
        temp = 0; // reset temp value to initial value
      });
    // When not touched
    carousel.addEventListener('touchend', () => {
        temp++;
        // When the mouseout event occurs, it continuously calls the rotation function in a short time period
        // To control this and ensure the rotation function is called only once, useing temp as a temporary variable
        if (temp == 1)
            rotation();
      });

    // End here
    let mytext = document.querySelector(".atext");
    mytext.style = "background-color: red;";

};