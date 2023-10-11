$(document).ready(function(){

  var date =dayjs().format(' dddd, MMMM DD');
  var hour =dayjs().format('hh');

  container =$('.container-lg')                                   // the overall container
  allButtons= container.children().children('button')            // all the buttons

  block9 = $('#hour-9')                                    // TIME BLOCK HANDLES    
  block10 = $('#hour-10')
  block11= $('#hour-11')
  block12= $('#hour-12')
  block1= $('#hour-1')
  block2 = $('#hour-2')
  block3 = $('#hour-3')
  block4 = $('#hour-4')
  block5 = $('#hour-5')

  var textArea9 = block9.children('textarea');           // TEXT AREA HANDLES
  var textArea10 = block10.children('textarea');
  var textArea11 = block11.children('textarea');
  var textArea12 = block12.children('textarea');
  var textArea1 = block1.children('textarea');
  var textArea2 = block2.children('textarea');
  var textArea3 = block3.children('textarea');
  var textArea4 = block4.children('textarea');
  var textArea5 = block5.children('textarea');

  function displayTime() {                                       //updates time in header to the second
    var timerInterval = setInterval(function() {
    var hms= dayjs().format(' hh : mm : ss');
    $('#time').text(hms)
    hrCheck()                                                       // changes colors of blocks, set here to check it every time displaytime runs
    $('.day').text(date);                                           // Sets the day class to date
    });
  }

  function clearClasses(){                                       // clears classes of hour blocks to prep for change
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

  function hrCheck(){                                       // Logic which ets the blocks class to past/present/future based on the hour
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
  }};

  function renderAll() {                                                                  // MAKES SAVED TEXT APPEAR IN TEXT AREAS
    var stored9 = JSON.parse(localStorage.getItem("hour-9"));                            //parses json strings
    var stored10 = JSON.parse(localStorage.getItem("hour-10"));  
    var stored11 = JSON.parse(localStorage.getItem("hour-11"));  
    var stored12 = JSON.parse(localStorage.getItem("hour-12"));  
    var stored1 = JSON.parse(localStorage.getItem("hour-1"));  
    var stored2 = JSON.parse(localStorage.getItem("hour-2"));  
    var stored3 = JSON.parse(localStorage.getItem("hour-3"));  
    var stored4 = JSON.parse(localStorage.getItem("hour-4"));  
    var stored5 = JSON.parse(localStorage.getItem("hour-5"));  
      textArea9.val(stored9);                                                             // PLACES PARSED STRINGS IN THE TEXT AREAS
      textArea10.val(stored10);
      textArea11.val(stored11);
      textArea12.val(stored12);
      textArea1.val(stored1);
      textArea2.val(stored2);
      textArea3.val(stored3);
      textArea4.val(stored4);
      textArea5.val(stored5);
    };

    allButtons.on('click', function() {                                                // when any button is clicked
      selectedBlock = this.parentElement;                                              // Grabs the selected block of whatever you clicked
      selectedBlockID = selectedBlock.id;                                               // grabs the id of tbe selected block
      selectedTextarea = selectedBlock.querySelector("textarea");                      //Grabs the text area of button Clicked
      selectedTextAreaValue= selectedTextarea.value;                                   // Grabs the value of the text area
      localStorage.setItem(selectedBlockID, JSON.stringify(selectedTextAreaValue));    // sets the string into local storage with the selected blocks ID as the key, and the textarea value as the data
    });
    
  
  renderAll()                                                                           // DISPLAYS MSGS IN TEXT AREAS
  displayTime(displayTime,1000);                                                          //runs displayTime every second which sets hours,min,seconds
});


