## Sample Read Me
WRITE YOUR DOCUMENTATIONS HERE!

==> Just open and run index.html file. Nothing else needed. <==

Html Classes :
=> 'trirong' and 'playfair' for Google font
=> 'radiobutton' for center alignment of pagination indicators. Pagination indicators invisible at
    small devices like mobile.
=> 'card' class contains cards. How many card will be shown in one time according to devices are given manually here.
    flex: 0 0 calc(100% / 5); /* Default to 5 visible cards */
    In "calc(100% / x)" here x defines how many card will display at same time.
=>  Inside 'radiobutton' we added n number radio button and n number label manually for n cards so that it will indicate current card index.


JavaScript :
=> 'cloneCards' function is for cloning card. Here,
const lastClone = cards[cards.length - 1].cloneNode(true); // cloning lastcard
        // cloning first 5 card and adding after last card [cause gonna display 5 at a time at max]
        for (let i = 0; i < 5; i++) {
            carousel.appendChild(cards[i].cloneNode(true));
        }
        carousel.insertBefore(lastClone, carousel.firstChild); // add lastclone before first card

By adding clones or using 'cloneCards' function If there are no cards to the right, clicking the right arrow will bring the first card in the list to the visible area. Similarly, if there are no cards to the left, clicking the left arrow will bring the last card in the list to the visible area.

=> 'updateCarousel' for updating card and animation
=> 'checkBoundary' for checking if currentIndex is 0 or greater then total card number. Adjusting currentIndex according it. It also sends currentIndex value to 'dot' function.
=> 'dot' function activate pagination indicator according to current index. It updates pagination indicator.
=> document.addEventListener("keydown", (event) => {}) is for handling the left and right keys on the keyboard.
=> 'autoratate' function used for create a autorotation affect.
=> 'rotation' function is for setting 2 second interval for calling 'autoratate' function.
=> "mouseover" event stop rotation or clear Interval when mouseover or hover on carousel area
    carousel.addEventListener("mouseover", () => {
        clearInterval(myinterval); // clear Interval
        temp = 0; // reset temp value to initial
    });
=> "mouseout" event Start rotation when mouseout or not hovering on carousel area
    carousel.addEventListener("mouseout", () => {
        temp++; 
        // When the mouseout event occurs, it continuously calls the 'rotation' function
        // To control this and ensure the 'rotation' function is called only once, here using 
        // "temp" as a temporary variable. It will help to execute 'rotation' function only 1 time
        if (temp == 1)
            rotation();
    });

=>  // For devices like mobile or similar touch devices, When touched
    carousel.addEventListener('touchstart', (event) => {
        clearInterval(myinterval); // clear Interval
        temp = 0; // reset temp value to initial value
      });
=> // When not touched
    carousel.addEventListener('touchend', () => {
        temp++;
        // When the mouseout event occurs, it continuously calls the 'rotation' function
        // To control this and ensure the 'rotation' function is called only once, here using 
        // "temp" as a temporary variable. It will help to execute 'rotation' function only 1 time
        if (temp == 1)
            rotation();
      });