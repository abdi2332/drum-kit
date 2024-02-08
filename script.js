window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // Exit if no audio element found for the pressed key
    audio.play(); // Play the audio associated with the pressed key
    key.classList.add("style")
   setTimeout(() => {
       key.classList.remove("style")
    }, 2000); 

});
