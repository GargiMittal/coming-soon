var t1 = gsap.timeline(); // Add repeat to loop the animation

// Animate the heading (fade in and fade out)
t1.from("#content1 h1", {
    opacity: 0,
    duration: 2, // Shortened duration for smooth looping
})
  .to("#content1 h1", {
    opacity: 0,
    duration: 2,
});

t1.fromTo("#myVideo",
    { opacity: 0, filter: "brightness(0)" }, // Start hidden and black
    { opacity: 1, filter: "brightness(1)", duration: 13, ease: "power2.out" },
    "+=0.5");

    t1.fromTo(
        "#content2 h1",
        { 
          opacity: 0 // Start with opacity 0
        },
        { 
          opacity: 1, // Transition to opacity 1
          duration: 3, // Duration of the fade-in
          ease: "power2.out" // Optional easing
        },
        "<" // Start at the same time as the previous animation
      )
      .to(
        "#content2 h1",
        { 
          opacity: 0, // Fade back to 0
          duration: 3, // Duration of the fade-out
          ease: "power2.in" // Optional easing for smooth transition
        }
      );
      
t1.from("#content3 h1",{
    opacity:0,
    duration:4,
    delay:4
},"<")
.to(
    "#content3 h1",
    { 
      opacity: 0, // Fade back to 0
      duration: 3, // Duration of the fade-out
      ease: "power2.in" // Optional easing for smooth transition
    }
  );;
// Start with a fade-out effect for the whole screen
t1.to("body", { 
    filter: "brightness(1)",  // Dim the screen for suspense
    opacity: 0.5,               // Apply a darkened opacity effect
    duration: 2,                // Duration of the fade-out
    ease: "power2.inOut"
  })
    .to("body", {
      background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1))", // Apply gradient overlay
      duration: 2,   // Duration of the gradient application
      ease: "power2.inOut"
    });
  
  // Reveal the "COMING SOON" text with a fade-in effect
  t1.to(".coming-soon h1", { 
    opacity: 1,             // Fade in the text
    scale: 1.1,             // Slight scale-up for emphasis
    duration: 1.5,          // Duration of the fade-in
    ease: "power2.out",
    delay: 0.5              // Delay after the fade-out and gradient
  });
  
  // Slide in the social media icons after the "COMING SOON" text
  t1.to(".socials", { 
    opacity: 1,            // Fade in the social media container
    duration: 1,           // Duration of the fade-in
    delay: 1,              // Wait until "COMING SOON" text is visible
  })
    .fromTo(
      ".socials a", 
      { opacity: 0, y: 50 },  // Start the icons off-screen and hidden
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out", 
        stagger: 0.2           // Stagger the animation for each icon
      }
    );
    
  // Fade out the background gradient after social icons are visible
  t1.to("body", { 
    background: "transparent",  // Remove the gradient effect
    opacity: 1,                 // Fade the screen back to normal
    filter: "brightness(1)",    // Restore the screen brightness
    duration: 1, 
    ease: "power2.out"
  });
  // Select the link
const galleryLink = document.getElementById('galleryLink');

// Create an audio object for the click sound
const clickSound = new Audio('clicksound2.mp3');

// Add an event listener to play the sound on link click
galleryLink.addEventListener('click', (event) => {
  clickSound.play();
  
  // Optional: Add a small delay before navigating
  // Prevent default action temporarily
  event.preventDefault();

  // Navigate to the link after the sound plays
  setTimeout(() => {
    window.location.href = galleryLink.href;
  }, 200); // Delay matches the length of your sound
});

  
