<!DOCTYPE html>

<!-- 
    Name: Kylee W
    Pawprint: kwcnr
    Date: 12/11/21
    Final
-->

<!--
    References:
        1. https://getbootstrap.com/docs/4.0/utilities/flex/
        2. 
-->

<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <title>Final</title>

        <script src="Kwcnr-Final-F21.js"></script>
        <link rel='stylesheet' href="Kwcnr-Final-F21.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>

    <body>
        <ul class="navi">
            <li class="navi"><a class="navi"  href="../Kwcnr-Projects-F21.html">Projects</a></li>
            <li class="navi"><a class="navi center" id="current" href="./index.html">FINAL PROJECT</a></li>
        </ul>
        <!-- Reference 1, https://getbootstrap.com/docs/4.0/utilities/flex/ -->
        <div id="formContainer" class="d-flex justify-content-center">
            <!-- End of reference 1 -->
            <form id="login" class="submit" action="./Kwcnr-Final-Login-Check-F21.php" method="POST">
                <label for="username">Username: </label>
                <input type="text" id="username" name="username" placeholder="(test)" required><br>
                <label for="password">Password: </label>
                <input type="text" id="password" name="password" placeholder="(pass)" required><br>
                <input type="submit">
            </form>
        </div>
    </body>
</html>