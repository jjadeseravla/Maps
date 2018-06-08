//var location;

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function redZone() {
    var x = document.getElementById("red");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function tringZone() {
    var x = document.getElementById("tringCircle");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function exit() {
  document.getElementById("closeBox").style.display="none";
  document.getElementById("closeBox").style.display="block";
}

// function exit() {
//   $(.finish).css('display', 'none');
// }

var allStates = $("svg.us > *");

allStates.on("click", function() {

  allStates.removeClass("on");
  $(this).addClass("on");

});

function validateUserInput() {
  var popup;
  var zone = document.getElementById("myInput").value;

  switch(zone) {
      case "darwin centre".toLowerCase():
      popup = myFunction();
      break;
      case "earth hall":
      popup = redZone();
      break;
      case "tring".toLowerCase():
      popup = tringZone();
      break;
      default:
     popup = document.getElementById("searchWord").innerHTML = "<h3>Apologies, your input is not recognised, please try again</h3>";
     clear();
  }
  document.getElementById("searchWord").style.display = popup;
}

function clear() {
  $( "h3" ).fadeOut(3000);
}


function loadText() {
  //create XHR object
  var xhr = new XMLHttpRequest();

  //OPEN - type, url/file, async
  xhr.open("GET", "visitorfeed.xml", true);

  xhr.onload = function() {
    if(this.status == 200) {
      // var items = JSON.parse(this.responseText);
      // console.log(this.responseText);
      xmlDoc = $.parseXML( this.responseText ),
      //this.responseText = $( xmlDoc ),
      $xml = $( xmlDoc )
      itemArray = $xml.find( "item" );
      console.log('READYSTATE: ', xhr.readyState);

      //for loop Here
       // var arr = [];
       var toAdd = document.createDocumentFragment();
       var eventContainer = document.getElementById("whatsOnToday");
       for ( var i = 0; i < itemArray.length; i++) {
         var newDiv = document.createElement('div');
         newDiv.id = 'event'+i;
         newDiv.className = 'whatsOnEventItem';
         var image = $($xml.find( "item" )[i]).find("image_url")[0].innerHTML;
         newDiv.innerHTML += "<img src=" + image + " />";
         var name = $($xml.find( "item" )[i]).find("name")[0].innerHTML;
         newDiv.innerHTML += "<h3>" + name + "</h3>";
         var category = $($($xml.find( "item" )[i]).find("categories")[0]).find("category")[0].innerHTML;
         newDiv.innerHTML += "<h4>Event Type: " + category + "</h4>";
         var button = document.createElement('button');
         var location = $($($($xml.find( "item" )[i]).find("placemarks")[0]).find("placemark")[0]).find("name")[0].innerHTML;
         //console.log(location);
         //pointOnMap(location);
         button.setAttribute('class', 'button');
         button.setAttribute('id', 'whereOnMap');
         //button.onclick = pointOnMap(location);
         //this line allows location to be used in pointOnMap function but then nothing else works
         button.innerHTML = '<div id="whereOnMap" onclick="pointOnMap(location);">Find on Map</div>'
         toAdd.appendChild(newDiv);
         toAdd.appendChild(button);
       }
       eventContainer.appendChild(toAdd);
    }
    //console.log(location + " here");
  }
  xhr.send();
}

function pointOnMap(location) {
  //var counter = 0;
  console.log(location);
    if (location != "Tring Park") {
      console.log(location);
      document.getElementById('whereOnMap').onclick = tringZone();
    } else {
      //console.log($($($($xml.find( "item" )[0]).find("placemarks")[0]).find("placemark")[0]).find("name")[0].innerHTML);
      document.getElementById('whereOnMap').onclick = alert(1);
      //alert(counter);
      //counter++;
    }
}
//How to get javascript variable (location) declared in loadText() to be used in pointOnMap(location) function.
///line 111 does it but then stops everything within that function loading
// at the moment nothing matches string and therefore tringZone() is being called constantly in whichever button.



    // var svgimage = svgPanZoom('.us');
    //
    // svgPanZoom('#us', {
    //     viewportSelector: '.svg-pan-zoom_viewport'
    //   , panEnabled: true
    //   , controlIconsEnabled: false
    //   , zoomEnabled: true
    //   , dblClickZoomEnabled: true
    //   , mouseWheelZoomEnabled: true
    //   , preventMouseEventsDefault: true
    //   , zoomScaleSensitivity: 0.2
    //   , minZoom: 0.5
    //   , maxZoom: 10
    //   , fit: true
    //   , contain: false
    //   , center: true
    //   , refreshRate: 'auto'
    //   , beforeZoom: function(){}
    //   , onZoom: function(){}
    //   , beforePan: function(){}
    //   , onPan: function(){}
    //   , onUpdatedCTM: function(){}
    //   , customEventsHandler: {}
    //   , eventsListenerElement: null
    //   });
