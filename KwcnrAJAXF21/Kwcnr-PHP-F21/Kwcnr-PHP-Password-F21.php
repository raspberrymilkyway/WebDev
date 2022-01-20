<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8"/>
        <title>PHP Playground</title>
    </head>

    <body>
        <?php
            $username = $_POST["username"];
            $password = $_POST["password"];
            if ($username == "test" && $password == "pass"){
                echo "<h3>Credentials validated with POST</h3><br>Username: " . $username . "<br>Password: " . $password;
            }
            else if ($username == "test"){
                echo "Password " . $password . " is incorrect";
            }
            else{
                echo "Username " . $username . " is incorrect";
            }
        ?>
    </body>
</html>