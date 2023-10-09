// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){

// Selects element by class
 

var totalTime = dayjs()
var date =dayjs().format(' dddd, MMMM DD');
var hms= dayjs().format(' hh:mm:ss');
var hour =dayjs().format('hh');
// var hour = 

function displayTime() {                                       //updates time in header to the second
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

block9 = $('#hour-9')           // BLOCK HANDLES    
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

hrCheck()                                                                                       // needs to be wrapped in a function so that its checked repeatibly












block9 = $('#hour-9')   


save9 = $('#save9')         // BUTTON HANDLES
save10 = $('#save10')     
save11 = $('#save11')    
save12 = $('#save12')    
save1 = $('#save1')    
save2 = $('#save2')  
save3 = $('#save3')  
save4 = $('#save4')  
save5 = $('#save5')  


var block9Msg=$('#form9').val(); // Varibles must be defined to avoid throwing erros
var block10Msg=$('#form10').val();
var block11Msg=$('#form11').val();
var block12Msg=$('#form12').val();
var block1Msg=$('#form1').val();
var block2Msg=$('#form2').val();
var block3Msg=$('#form3').val();
var block4Msg=$('#form4').val();
var block5Msg=$('#form5').val();






// function saveInputs (BUTTON,FORM,SAVEVAR,){  // FUNCTION THAT WORKS UP TO THE POINT IT CANT PASS 
//   BUTTON.on('click', function () {                 // THE KEYNAME PARAMETER
//   var SAVEVAR= $(FORM).val();
//   console.log(SAVEVAR)
//   localStorage.setItem("KEY", JSON.stringify(SAVEVAR));

// })
// };
// saveInputs(save9,"#form9",block9Msg,)
// saveInputs(save10,"#form10",block10Msg )





save9.on('click', function () {                               // i did have these in a function, however i couldnt figure out how to pass Key name as a parameter
  var block9Msg=$('#form9').val();                           // on save button click, sets the value of the form# into a variable and then makes that       
  localStorage.setItem("key9", JSON.stringify(block9Msg));    // saved into local storage as a json string with the key#
})
 
save10.on('click', function () {
  var block10Msg= $('#form10').val();
  localStorage.setItem("key10", JSON.stringify(block10Msg));
})
  
save11.on('click', function () {
  var block11Msg= $('#form11').val();
  localStorage.setItem("key11", JSON.stringify(block11Msg));
})

save12.on('click', function () {
  var block12Msg= $('#form12').val();
  localStorage.setItem("key12", JSON.stringify(block12Msg));
})

save1.on('click', function () {
  var block1Msg= $('#form1').val();
  localStorage.setItem("key1", JSON.stringify(block1Msg));
})

save2.on('click', function () {
  var block2Msg= $('#form2').val();
  localStorage.setItem("key2", JSON.stringify(block2Msg));
})

save3.on('click', function () {
  var block3Msg= $('#form3').val();
  localStorage.setItem("key3", JSON.stringify(block3Msg));
})

save4.on('click', function () {
  var block4Msg= $('#form4').val();
  localStorage.setItem("key4", JSON.stringify(block4Msg));
})

save5.on('click', function () {
  var block5Msg= $('#form5').val();
  localStorage.setItem("key5", JSON.stringify(block5Msg));
})





function renderMsgs (STORED,SAVEDVAR){

}

function renderAll() {

  var stored9 = JSON.parse(localStorage.getItem("key9"));       //parses json strings
  var stored10 = JSON.parse(localStorage.getItem("key10"));  
  var stored11 = JSON.parse(localStorage.getItem("key11"));  
  var stored12 = JSON.parse(localStorage.getItem("key12"));  
  var stored1 = JSON.parse(localStorage.getItem("key1"));  
  var stored2 = JSON.parse(localStorage.getItem("key2"));  
  var stored3 = JSON.parse(localStorage.getItem("key3"));  
  var stored4 = JSON.parse(localStorage.getItem("key4"));  
  var stored5 = JSON.parse(localStorage.getItem("key5"));  
    $('#form9').val(stored9) 
    $('#form10').val(stored10)
    $('#form11').val(stored11)
    $('#form12').val(stored12)
    $('#form1').val(stored1)
    $('#form2').val(stored2)
    $('#form3').val(stored3)
    $('#form4').val(stored4)
    $('#form5').val(stored5)
  };
// $(function () {};

renderAll()

hrCheck()    

/// dont delete this, used for saving as a json string

// var student = document.getElementById("student-names");
// var grade = document.getElementById("grades");
// var comment = document.getElementById("msg");
// var saveButton = document.getElementById("save");

// // cool trick to make an initial state using ||
// var state = JSON.parse(localStorage.getItem("state")) || { students:[] };



// saveButton.addEventListener("click", function(event) {
// event.preventDefault();
// var studentGrade = {
//   student: student.value,
//   grade: grade.value,
//   comment: comment.value.trim()
// };


//                                  clicked  
// // var blockMSG ={           // theoretical  object that would be saved
//     blockId: 
//     formcontent:
// }







});

// $(function () {};

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id                           DONE
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set                     
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.                          DONE

