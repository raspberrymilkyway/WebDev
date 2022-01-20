//A lot of code taken from the starter code - thank you!

// References:
//      1. https://www.w3schools.com/howto/howto_js_slideshow.asp
//      2. https://en.wikipedia.org/wiki/Spirit_(rover)
//      3. https://en.wikipedia.org/wiki/Opportunity_(rover)
//      4. https://en.wikipedia.org/wiki/Curiosity_(rover)

var apiKey = "nlOMXeTRsJAwaRXQJnyujm1g8b1aeGTPYgq5UZlN";
var curiosityManifest;
var opportunityManifest;
var spiritManifest;
var currRover = "curiosity";

// Strings here from the rovers' Wikipedia pages, references 2-4
var curiosityText = "<b>Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASA's Mars Science Laboratory mission. Curiosity was launched from Cape Canaveral on 26 November 2011 at 15:02 UTC and landed on Aeolis Palus inside Gale on Mars on 6 August 2012 at 05:17 UTC. The Bradbury Landing site was less than 2.4km (1.5mi) from the center of the rover's touchdown target after a 560 million km (350 million mi) journey. The rover's goals include an investigation of the Martian climate and geology; assessment of whether the selected field site inside Gale has ever offered favorable environmental conditions to microbial life, including investigation of the role of water; and planetary habitability studies in preparation for human exploration.</b>";
var opportunityText = "<b>Opportunity, also known as MER-B or MER-1, is a robotic rover that was active on Mars from 2004 until mid-2018. Opportunity was operational on Mars for 5110 sols (5250 days). Launched on July 7, 2003 as part of NASA's Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin Spirit (MER-A) touched down on the other side of the planet. With a planned 90-sol duration of activity (slightly less than 92.5 Earth days), Opportunity was able to stay operational for 5111 sols after landing, maintaining its power and key systems by recharging its batteries using solar power and hibernating during events such as dust storms to save power. Opportunity operated for 57 times its designed lifespan, exceeding the initial plan by 14 years, 46 days. By June 10, 2018, when it last contacted NASA, the rover had travelled a distance of 45.16km (28.06mi).</b>";
var spiritText = "<b>Spirit, also known as MER-A, is a robotic rover on Mars, active from 2004 to 2010. Spirit was operational on Mars for 2208 sols. It was one of two rovers of NASA's Mars Exploration Rover Mission managed by the Jet Propulsion Laboratory. Spirit landed successfully within the impact crater Gusev on Mars at 04:35 UTC on Jaunuary 4, 2004, three weeks before its twin Opportunity (MER-B), which landed on the other side of the planet. Its name was chosen through a NASA-sponsored student essay competition. The rover became stuck in a 'sand trap' in late 2009 at an angle that hampered recharging its batteries; its last communication with Earth was sent on March 22, 2010.</b>";
// End of references 2-4

function getManifests() {            
    var xmlHttpCur = new XMLHttpRequest();
    var xmlHttpOpp = new XMLHttpRequest();
    var xmlHttpSpi = new XMLHttpRequest();
    
    xmlHttpCur.onload = function() {
        if (xmlHttpCur.status == 200) {
            curiosityManifest = JSON.parse(xmlHttpCur.responseText).photo_manifest;
            
            var updatedPhotos = {};
            curiosityManifest.photos.forEach(photo => {
                updatedPhotos[photo.sol] = photo;
            });

            curiosityManifest.photos = updatedPhotos;
            console.log(curiosityManifest);
        }
    };
    xmlHttpOpp.onload = function() {        
        opportunityManifest = JSON.parse(xmlHttpOpp.responseText).photo_manifest;

        var updatedPhotos = {};
        opportunityManifest.photos.forEach(photo => {
            updatedPhotos[photo.sol] = photo;
        });
        
        opportunityManifest.photos = updatedPhotos;
        console.log(opportunityManifest);
    }
    xmlHttpSpi.onload = function() {        
        spiritManifest = JSON.parse(xmlHttpSpi.responseText).photo_manifest;
        
        var updatedPhotos = {};
        spiritManifest.photos.forEach(photo => {
            updatedPhotos[photo.sol] = photo;
        });
        
        spiritManifest.photos = updatedPhotos;
        console.log(spiritManifest);
    }
    
    xmlHttpCur.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=" + apiKey, true);
    xmlHttpOpp.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/opportunity?api_key=" + apiKey, true);
    xmlHttpSpi.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/spirit?api_key=" + apiKey, true);
    xmlHttpCur.send();
    xmlHttpOpp.send();
    xmlHttpSpi.send();

    submitInfo(100, "CHEMCAM", currRover);
}

function changeSol() {
    var solVal = document.getElementById("sol").value;
    var cameras;

    if (currRover == "curiosity"){
        if (curiosityManifest.photos[solVal] == null) {
            alert("No data for this sol");
            return;
        }
        
        cameras = curiosityManifest.photos[solVal].cameras;
    }
    else if (currRover == "opportunity"){
        if (opportunityManifest.photos[solVal] == null) {
            alert("No data for this sol");
            return;
        }

        cameras = opportunityManifest.photos[solVal].cameras;
    }
    else{
        if (spiritManifest.photos[solVal] == null) {
            alert("No data for this sol");
            return;
        }

        cameras = spiritManifest.photos[solVal].cameras;
    }

    // Reference 1, https://www.w3schools.com/howto/howto_js_slideshow.asp
    document.getElementById("dot-container").innerHTML = '<span class="dot" id="oriDot" onclick="showSlides(1)"></span>';
    document.getElementById("slideshow-container").innerHTML = '<div class="mySlides"><div class="numbertext" id="ori">0 / 0</div><img class="displayImage" src="" alt="currentImage"></div>'
    // End of reference 1

    var selectString = "";
    cameras.forEach(cam => {
        selectString += "<option value='" + cam + "'>" + cam + "</option>";
    });

    document.getElementById("cameraSelect").innerHTML = selectString;
}

function changeRover() {
    var rover = document.getElementById("roverName").value;
    currRover = rover;

    if (currRover == "curiosity"){
        document.getElementById("roverHeader").innerHTML = "Rover Information: Curiosity";
        document.getElementById("roverText").innerHTML = curiosityText;
    }
    else if (currRover == "opportunity"){
        document.getElementById("roverHeader").innerHTML = "Rover Information: Opportunity";
        document.getElementById("roverText").innerHTML = opportunityText;
    }
    else{
        document.getElementById("roverHeader").innerHTML = "Rover Information: Spirit";
        document.getElementById("roverText").innerHTML = spiritText;
    }
    changeSol();
}

function submitInfo(s=null,c=null,r=null) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onload = function() {
        if (xmlHttp.status == 200) {
            response = JSON.parse(xmlHttp.responseText);

            document.getElementById("")
            document.getElementById("dot-container").innerHTML = '<span class="dot" id="oriDot" onclick="showSlides(1)"></span>';
            document.getElementById("slideshow-container").innerHTML = '<div class="mySlides"><div class="numbertext" id="ori">0 / 0</div><img class="displayImage" src="" alt="currentImage"></div>'
            document.getElementById("loading").innerHTML = "Loading...";
            

            // Reference 1, https://www.w3schools.com/howto/howto_js_slideshow.asp
            for (let i=0; i < response.photos.length; i++){
                var photo = response.photos[i];
                if (i == 0){
                    document.getElementsByClassName("displayImage")[i].setAttribute("src", photo.img_src);
                    document.getElementById("ori").innerHTML = "1 / " + response.photos.length;
                }
                else{
                    var curr = document.getElementById("slideshow-container").innerHTML;
                    curr += "<div class='mySlides'><div class='numbertext'>" + (i+1) + " / " + response.photos.length + "</div><img class='displayImage' src='" + photo.img_src + "' alt='currentImage'></div>";
                    document.getElementById("slideshow-container").innerHTML = curr;

                    curr = document.getElementById("dot-container").innerHTML;
                    curr += "<span class='dot' onclick='showSlides(" + (i+1) + ")'></span>";
                    document.getElementById("dot-container").innerHTML = curr;
                }
                document.getElementById("camName").innerHTML = photo.rover.name + ": " + photo.camera.full_name;
            }
            // End of reference 1
            showSlides(1);
            document.getElementById("loading").innerHTML = "";
        }
    };
    var sol;
    var camera;
    var rover;

    if (s == null){
        sol = document.getElementById("sol").value;
        camera = document.getElementById("cameraSelect").value;
        rover = document.getElementById("roverName").value;
    }
    else{
        sol = s;
        camera = c;
        rover = r;
        //changeSol();
    }


    currRover = rover;

    var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?sol=" + sol + "&camera=" + camera + "&api_key=" + apiKey;
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

// Reference 1
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n-1].style.display = "block";  
  dots[n-1].className += " active";
}
// End of reference 1