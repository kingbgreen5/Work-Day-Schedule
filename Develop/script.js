// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// Selects element by class
 

var totalTime = dayjs()
var date =dayjs().format(' dddd, MMMM DD');
var hms= dayjs().format(' hh:mm:ss');
 var hour =dayjs().format('hh');
// var hour = 5

function displayTime() {                                       //updates time in header to the second
  // Sets interval in variable
  var timerInterval = setInterval(function() {
  var hms= dayjs().format(' hh : mm : ss');
  $('#time').text(hms)
  });
}

function checkHour() {                                          // Refereshes what hour it is
  var timerInterval = setInterval(function() {
  var hour =dayjs().format('hh');
  });
}

$('.day').text(date);                                           // Sets curent Day in header
displayTime(displayTime,1000);                                  //runs displayTime which sets hours,min,seconds
checkHour(checkHour,1000);
console.log("Current Hour " + hour)


// 



// $(this).data('number') 
// console.log(this)

// console.log(data-number)



// $('.container-lg px-5').data('number')
// var hourBlock= $('.container-lg px-5').data('number')
// console.log(hourBlock)
// if (hour> data-number)  && pageNumber==6 && elementId !="clearScores" )  {   // High Score screen: when button is clicked returns user to welcome screen
//   pageNumber=pageNumber - 6;
//   var element = '';
//   pageNumberSwitch();
// }


// element.getAttribute("data-number");



// function checkPresent(X){
// id = document.getElementById(X)
// // id.data-number
// console.log("id "+id)

// if id === hour

// set class to present






function clearClasses(){            // clears classes of hour blocks to prep for change
  block9.removeClass()
  block10.removeClass()
  block11.removeClass()
  block12.removeClass()
  block1.removeClass()
  block2.removeClass()
  block3.removeClass()
  block4.removeClass()
  block5.removeClass()
}



block9 = $('#hour-9')
block10 = $('#hour-10')
block11= $('#hour-11')
block12= $('#hour-12')
block1= $('#hour-1')
block2 = $('#hour-2')
block3 = $('#hour-3')
block4 = $('#hour-4')
block5 = $('#hour-5')




function hrCheck(){
if (hour == 9){
  clearClasses()
  block9.addClass('row time-block present')
  block10.addClass("row time-block future" )
  block11.addClass("row time-block future" )
  block12.addClass("row time-block future" )
  block1.addClass("row time-block future" )
  block2.addClass("row time-block future" )
  block3.addClass("row time-block future" )
  block4.addClass("row time-block future" )
  block5.addClass("row time-block future" )
}

if (hour == 10){
  clearClasses()
  block9.addClass("row time-block past")
  block10.addClass('row time-block present')
  block11.addClass("row time-block future" )
  block12.addClass("row time-block future" )
  block1.addClass("row time-block future" )
  block2.addClass("row time-block future" )
  block3.addClass("row time-block future" )
  block4.addClass("row time-block future" )
  block5.addClass("row time-block future" )
}

if (hour == 11){
  clearClasses()
  block9.addClass("row time-block past")
  block10.addClass("row time-block past")
  block11.addClass('row time-block present')
  block12.addClass("row time-block future" )
  block1.addClass("row time-block future" )
  block2.addClass("row time-block future" )
  block3.addClass("row time-block future" )
  block4.addClass("row time-block future" )
  block5.addClass("row time-block future" )
}

if (hour == 12){
  clearClasses()
  block9.addClass("row time-block past")
  block10.addClass("row time-block past")
  block11.addClass("row time-block past")
  block12.addClass('row time-block present')
  block1.addClass("row time-block future" )
  block2.addClass("row time-block future" )
  block3.addClass("row time-block future" )
  block4.addClass("row time-block future" )
  block5.addClass("row time-block future" )
}

if (hour == 1){
  clearClasses()
  block9.addClass("row time-block past")
  block10.addClass("row time-block past")
  block11.addClass("row time-block past")
  block12.addClass("row time-block past")
  block1.addClass('row time-block present')
  block2.addClass("row time-block future" )
  block3.addClass("row time-block future" )
  block4.addClass("row time-block future" )
  block5.addClass("row time-block future" )
}

if (hour == 2){
  clearClasses()
  block9.addClass("row time-block past")
  block10.addClass("row time-block past")
  block11.addClass("row time-block past")
  block12.addClass("row time-block past")
  block1.addClass("row time-block past")
  block2.addClass('row time-block present')
  block3.addClass("row time-block future" )
  block4.addClass("row time-block future" )
  block5.addClass("row time-block future" )
}

if (hour == 3){  
  clearClasses()
  block9.addClass("row time-block past")
  block10.addClass("row time-block past")
  block11.addClass("row time-block past")
  block12.addClass("row time-block past")
  block1.addClass("row time-block past")
  block2.addClass("row time-block past")
  block3.addClass('row time-block present')
  block4.addClass("row time-block future" )
  block5.addClass("row time-block future" )
}

if (hour ==4){
  clearClasses()
  block9.addClass("row time-block past")
  block10.addClass("row time-block past")
  block11.addClass("row time-block past")
  block12.addClass("row time-block past")
  block1.addClass("row time-block past")
  block2.addClass("row time-block past")
  block3.addClass("row time-block past")
  block4.addClass('row time-block present')
  block5.addClass("row time-block future" )
}
if (hour ==5){
  clearClasses()
  block9.addClass("row time-block past")
  block10.addClass("row time-block past")
  block11.addClass("row time-block past")
  block12.addClass("row time-block past")
  block1.addClass("row time-block past")
  block2.addClass("row time-block past")
  block3.addClass("row time-block past")
  block4.addClass("row time-block past")
  block5.addClass('row time-block present')
}

if (hour >5 && hour <=8){
  clearClasses()
  block9.addClass("row time-block past")
  block10.addClass("row time-block past")
  block11.addClass("row time-block past")
  block12.addClass("row time-block past")
  block1.addClass("row time-block past")
  block2.addClass("row time-block past")
  block3.addClass("row time-block past")
  block4.addClass("row time-block past")
  block5.addClass('row time-block past')
}


}

hrCheck()

// grabs classes

// var hourBlock = $("#hourBlock")

// hourBlock.removeClass()
// hourBlock.addClass('row time-block present')






// if (hour == hourBlock.value){
//   hourBlock.removeClass()
//   hourBlock.removeClass()
//   hourBlock.addClass('row time-block present')
// };


// var hbValue = $('#hourBlock').val()
// alert(hbValue)


// // if (hour==9){
  
// // }














$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page. DONE
});
