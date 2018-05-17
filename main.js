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
        default:
       popup = document.getElementById("searchWord").innerHTML = "<h3>Apologies, your input is not recognised, please try again</h3>";
       clear();
    }
    document.getElementById("searchWord").style.display = popup;
  }

    function clear() {
      $( "h3" ).fadeOut(3000);
    }


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
