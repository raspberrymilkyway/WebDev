/* 
    References:
        1. https://stackoverflow.com/questions/47514692/bootstrap-4-list-items-that-have-d-flex-class-do-not-respond-to-hide
        2. https://www.w3schools.com/js/js_cookies.asp
        3. https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies/remove
*/

var flag = 1;

$(document).ready(function(){
    $("#begin").click(function(){
        $("#begin").hide();
        begin("a");
    })
    $("#eginbay").click(function(){
        $("#eginbay").hide();
        begin("b");
    })
});

function begin(x){

    if (x == 'a'){    
        document.cookie = "chapter=1";
        document.getElementById("begin").style.display="none";
        document.getElementById("holdContainera").style.display="block";
    }
    else if (x == 'b'){
        document.cookie = "chapter=2";
        document.getElementById("eginbay").style.display="none";
        document.getElementById("holdContainerb").style.display="block";
    }
}

function empty(x){
    var img = document.getElementById("image");
    var cont = document.getElementById("text");

    if (x == "beginning"){
        cont.innerHTML = "Now that you're here, we can <a class='prog' onclick='empty(\"start\")'>get started</a>.";
    }
    else if (x == "start"){
        changeImg(img, "./Kwcnr-Final-Images/elevator.png", "Elevator");
        cont.innerHTML = "The path to the answers you seek can be found on <a class='prog' onclick='empty(\"seven\")'>Floor 7</a>. Quickly now!"
        
    }
    else if (x == "seven"){
        changeImg(img, "./Kwcnr-Final-Images/hall.png", "Hall");
        if (flag == 1){
            cont.innerHTML = "You must <a class='prog' onclick='empty(\"orb\")'>follow the orb</a>."
            flag = 0;
        }
        else{
            cont.innerHTML = "(You appear to have ended up back in the hallway.) Well? What are you waiting for - <a class='prog' onclick='empty(\"orb\")'>follow the orb</a>!"
        }
    }
    else if (x == "orb"){
        changeImg(img, "./Kwcnr-Final-Images/orb.png", "Orb");
        cont.innerHTML = "(You appear to have chased the orb off planet. You can't see as many <a class='prog' onclick='empty(\"stars\")'>stars</a> as you should be able to, but it probably doesn't matter. You want to <a class='prog' onclick='empty(\"seven\")'>touch the orb</a>.)";
    }
    else if (x == "stars"){
        changeImg(img, "./Kwcnr-Final-Images/emptyOrb.png", "Stars");
        cont.innerHTML = "Welcome back. You have passed the void's challenge.";
        document.cookie = "chapter=2";
        if (getCookie("username") != ""){
            var curr = cont.innerHTML;
            cont.innerHTML = curr += "<br><br><a class='prog' href='./Kwcnr-Final-Interlude.html'>Continue.</a>";
        }
        else{
            alert("You must sign in to continue!");
        }
    }
}
function mt(x){
    var img = document.getElementById("image");
    var cont = document.getElementById("text");

    if (x == "welcome"){
        cont.innerHTML = "<a class='prog' href='./index.html'>.niaga trats</a> tsum eno ,evael oT .dioV eht si ytpmE eht fo dne eht tA";
    }
}

function changeImg(img, src, alt){
    img.src = src;
    img.alt = alt;
}


function logged(){
    var x = getCookie('username');
    if (x != ""){
        var y = document.getElementById("logged");
        y.style.display = "block";
        y.innerHTML = x + " - Logout";
        document.getElementById("login").style.display = "none";
    }
}
function delCookie(){
    var y = document.getElementById("logged");
    y.style.display = "none";
    y.innerHTML = "Logout";
    document.getElementById("login").style.display = "block";
    window.location.href = "./index.html";
    
    // Reference 2
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/KwcnrFinal;";
    // End of reference 2
}

// Reference 2 - https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
// End of reference 2