/* 
    References:
        1. https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript?rq=1
        2. https://www.geeksforgeeks.org/how-to-remove-the-table-row-in-a-table-using-javascript/
        3. The starter code video from Kyle Webb
        4. https://en.wikipedia.org/wiki/Geometric_Shapes
        5. https://www.w3schools.com/howto/howto_js_rangeslider.asp
        6. https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
*/

var numRows = 0;

function addEventListener(){
    document.getElementById("addToList").addEventListener("submit", function (event){
        event.preventDefault();
    });
    document.getElementById("")
}


function addRow(){
    var title = document.getElementById("titleNew").value;
    if (title == ""){
        alert("You must add a title!");
        return undefined;
    }

    var type = document.getElementById("typeNew").value;
    if (type == ""){
        alert("You must select a type!");
        return undefined;
    }

    var date = document.getElementById("dateNew").value;
    var dateFormatted = "";

    // Reference 1, https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript?rq=1
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var defaultFormatted = mm + "/" + dd + "/" + yyyy;
    // End of reference 1    
    if (date != ""){
        var day = date.substring(8);
        var month = date.substring(5,7);
        var year = date.substring(0, 4);

        if (year < yyyy || (year == yyyy && month < mm) || (year == yyyy && month === mm && day < dd)){
            alert("Date must be today or later!");
            return;
        }

        dateFormatted = month + "/" + day + "/" + year;
    }
    else{
        dateFormatted = defaultFormatted;
    }

    
    var range = document.getElementById("rangeNew").value;
    var priority = "";
    for (var i = 0; i < range; i++){
        // Reference 4 - found unicode - https://en.wikipedia.org/wiki/Geometric_Shapes
        priority += "\u25B2";
        //End of reference 4
    }
    for (var i = range; i < 6; i++){
        // Reference 4 - found unicode - https://en.wikipedia.org/wiki/Geometric_Shapes
        priority += "\u25B3";
        //End of reference 4
    }


    var action = "<form id='check'><input type='checkbox'></form>";
    numRows += 1;

    var tableRow = "<tr id='" + String(numRows) + "' class='rows'><td id='action' onclick='removeRow(" + String(numRows)+ ")'>" + action + "</td><td id='title'>" + title + "</td><td id='type'>" + type + "</td><td id='range'>" + priority + "</td><td id='date'>" + dateFormatted + "</td></tr>";
    document.getElementById("tableBody").innerHTML += tableRow;

    clearForms();
}


function changeTitle(){
    var newTitle = prompt("Please enter the new title", "Bucket List");
    if (newTitle == null || newTitle == ""){
        newTitle = "Bucket List";
    }
    document.getElementById("tableTitle").innerHTML = newTitle;
}


function removeRow(row){
    // Reference 2, https://www.geeksforgeeks.org/how-to-remove-the-table-row-in-a-table-using-javascript/
    document.getElementById(row).remove();
    // End of reference 2
}


function updatePriority(){
    // Reference 5, https://www.w3schools.com/howto/howto_js_rangeslider.asp
    var slider = document.getElementById("rangeNew");
    var output = document.getElementById("priorityValue");
    output.innerHTML = slider.value;
    // End of reference 5
}


function clearForms(){
    document.getElementById("titleNew").innerHTML = "";
    document.getElementById("typeNew").innerHTML = def;
    document.getElementById("rangeNew").innerHTML = 3;
    document.getElementById("dateNew").innerHTML = "";
    updatePriority();
}


function changeTheme(){
    var theme = document.getElementById("theme").innerHTML;
    if (theme == "Light Mode"){
        document.getElementById("theme").innerHTML = "Dark Mode";

        // Reference 6, https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
        document.body.style.background = "thistle";
        document.getElementById("formContainer").style.backgroundColor = "whitesmoke";
        document.getElementById("to-do").style.backgroundColor = "whitesmoke";

        var rows = document.getElementsByClassName("rows");
        for (var i = 0; i < rows.length; i++){
            rows[i].style.backgroundColor = "lightcyan";
        }
        // End of reference 6
    }
    else{
        document.getElementById("theme").innerHTML = "Light Mode";

        // Reference 6, https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
        document.body.style.background = "grey";
        document.getElementById("formContainer").style.backgroundColor = "darkgrey";
        document.getElementById("to-do").style.backgroundColor = "darkgrey";

        var rows = document.getElementsByClassName("rows");
        for (var i = 0; i < rows.length; i++){
            rows[i].style.backgroundColor = "darkturquoise";
        }
        // End of reference 6
    }
}