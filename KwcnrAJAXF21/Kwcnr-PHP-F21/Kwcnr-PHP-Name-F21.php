<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8"/>
        <title>PHP Playground</title>
    </head>

    <body>
        <?php
            $firstname = $_GET["firstname"];
            $lastname = $_GET["lastname"];
            echo "<h1>Hello " . $firstname . " " . $lastname . ", welcome to my PHP playground!</h1>";
            echo "<h3><br>Why don't you give it a spin?</h3>";
        ?>
    </body>
</html>