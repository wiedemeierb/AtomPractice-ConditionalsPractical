console.log( 'js' );
let seatsINcar = 7;
let passengers = 5;
let infants = 1;
let infantSeats = 1;
let fullTake = true;

// check that theres enough room for everyon
if(seatsINcar >= passengers && infantSeats >= infants ){
  console.log( 'ready for road trip');
  if( fullTake === true){
    console.log( 'ready to hit the hwy');
  } //end of full tank
  else {
    console.log( 'must gas up');
  }
} // end enough seats
else{
  console.log( 'not ready for trip, too few seats' );

} // end not enough seats
