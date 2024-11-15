 // starts by referencing the DOM elements involved in the animation by using the .getElementByID allowing the script to kind of take note of where those elements are
 const memeImage = document.getElementById('memeImage');
 const startButton = document.getElementById('start');
 const stopButton = document.getElementById('stop'); 
 // this defines a class that encapsulates the animation logic. 
 class AnimatedImage {
   // the constructor acts as my initilizer method that defines my variables for the AnimatedImage class.
   constructor(imageElement, maxX) {
   // defines what the class animates
     this.image = imageElement;
    // defines the starting position of the image
     this.x = 0;
   // defines the speed of the image
     this.speed = 5;
   // defines the direction of the image (as a positive)
     this.direction = 1;
   // defines the value of maxX variable
     this.maxX = 250;
   // positions the element to its nearest positioned parent
     this.image.style.position = 'absolute';
   }
 
 // the move method is what makes the image move when it hits the edges of the defined area. the fact that this is declared inside the AnimatedImage curly braces makes it a definition of the class instead of a standalone function
   move() {
 // Tells the function how to move: The += operator adds the value from the right to the left operand and assigns the result to the left operand.
     this.x += this.speed * this.direction;
 // Tells the function it needs to be applied in pixels. by referencing the images css
     this.image.style.left = this.x + 'px';
 // Uses the conditional statement of IF to check if the following statmments are true. 
     if (this.x >= this.maxX || this.x <= 0) {
 // When it finds either of those to be true it executes
       this.direction *= -1;
 // This uses the *= operator to multiply the variable on the left by the value on the right reversing the  direction. 
 // a negative x a negative = a positive 
 // so if this.direction was -1 * -1 = 1 making it go right
 // a positive x a negative = a negative 
 // so if this.direction was 1 * -1 = -1 making it go left
     }
   }
 }
 
 const animatedMeme = new AnimatedImage(memeImage, 200); 
 // This creates a new AnimatedImage object named animatedMeme, 
 // passing the memeImage object and the maximum x-coordinate (200) 
 // as arguments to the constructor.
 
 let animationInterval;
 // This declares a variable named animationInterval to store the ID 
 // of the interval timer that will control the animation. 
 // It's initially undefined.
 
 startButton.addEventListener('click', () => {
 // This sets up an event listener that will trigger the following 
 // code block when the startButton is clicked:
 
   clearInterval(animationInterval);
 // This clears any existing animation interval, ensuring that only 
 // one animation is running at a time.
 
   animationInterval = setInterval(() => {
 // This starts a new interval timer that repeatedly calls the 
 // following code block every 50 milliseconds:
 
     animatedMeme.move(); 
 // This calls the move() method on the animatedMeme object, 
 // which updates the image's position and handles the bouncing logic 
 // as defined in the AnimatedImage class.
   }, 50);
 });
 
 stopButton.addEventListener('click', () => {
 // this attaches a event listener to the stopButton element to trigger the next line of code when the button is clicked.
   clearInterval(animationInterval);
 // this line stops the animation by clearing the animationInterval variable. stopping the move method from being called stopping the animation theres no need for anything more because this only stops the animation. The page will wait for the start event trigger to begin the animation again. 
 });