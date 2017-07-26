document.addEventListener('DOMContentLoaded', () => {

// Variables

// Reference to video player
const player = document.getElementById('player');

// Reference to caption text in span elements
const caption = document.querySelectorAll('.subtitles span');

// Reference to parent node of captions
const captionsDiv = document.querySelector('.subtitles');


// Highlighting Transcript

// getting the timeupdate handler based on currentTime attribute
player.addEventListener('timeupdate', () =>{
  // loop through caption spans
  for (let i = 0; i < caption.length; i += 1) {
    // get currentTime
    let time = player.getCurrentTime();
    // get start times of each caption
    let start = caption[i].getAttribute('data-start');
    // get end time of each caption
    let end = caption[i].getAttribute('data-end');
    // Create if/else statement in order to add new class .highlight
    if ( time >= start && time <= end ) {
      caption[i].className = 'highlight';
    } else {
      caption[i].className = '';
    }
  }                        
});

// Creating a click event synchronized to video

captionsDiv.addEventListener('click', (e) =>{
  // find the start time of the clicked caption
  let clickedTimeValue = e.target.getAttribute('data-start');
  // changing the players time to the targeted caption time
  if (clickedTimeValue) {
    player.setCurrentTime(clickedTimeValue);
    // start player at desired time
    player.play();
  }
});
});