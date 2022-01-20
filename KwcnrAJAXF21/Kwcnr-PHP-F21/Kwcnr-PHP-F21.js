// Sources:
//      1. https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp

function functionSelect(value){
    // Reference 1, https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
    var x = document.getElementsByClassName("submit");
    for (var i =  0; i < x.length; i++){
        x[i].style.display = "none";
    }
    // End of reference 1
    
    document.getElementById(value).style.display = "block";
}