<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8"/>
        <title>PHP Playground</title>

        <script src="Kwcnr-PHP-F21.js"></script>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel='stylesheet' href="Kwcnr-PHP-F21.css">
    </head>

    <body onload="addEventListener()">
        <div id="wrapper-wrapper" class="d-flex justify-content-center">
            <div id="form-wrapper">
                <h2>Kwncr PHP Playground</h2>
                <form id="function-select">
                    <select>
                        <option value="" disabled selected>Choose a function</option>
                        <option value="name">Name</option>
                        <option value="hamming">Hamming Number</option>
                        <option value="password">Password Simulation</option>
                        <option value="list">List Creator</option>
                        <option value="cylinder">Cylinder Surface Area</option>
                    </select>
                </form>
                <form id="name" class="submit" action="index.php" method="GET">
                    <label for="firstname">First name: </label>
                    <input type="text" id="firstname" name="firstname"><br>
                    <label for="lastname">Last name: </label>
                    <input type="text" id="firstname" name="lastname"><br>
                    <input type="submit">
                </form>
            </div>
            <?php
                $firstname = $_GET["firstname"];
                $lastname = $_GET["lastname"];
                echo "<h1>Hello " . $firstname . " " . $lastname . ", welcome to my PHP playground!</h1>";
                echo "<h3><br>Why don't you give it a spin?</h3>";
            ?>
        </div>
        <a href="../Kwcnr-Projects-F21.html">Back to Projects page</a>
    </body>
</html>