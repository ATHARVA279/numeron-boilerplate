// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.

const playButton = document.getElementById("play-button")

playButton.onclick = ()=>{
    window.location.href = "./game.html" //taking the page to new html

    //if you dont wan tot reload the page we can use window.location.reload
}