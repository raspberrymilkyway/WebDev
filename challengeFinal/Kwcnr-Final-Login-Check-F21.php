<!DOCTYPE html>

<!-- 
    References:
        1. https://stackoverflow.com/questions/2112373/php-page-redirect
 -->

<html>
    <head>
        <meta charset="utf-8"/>
        <title>Final</title>
    </head>

    <body>
        <?php
            $username = $_POST["username"];
            $password = $_POST["password"];
            if ($username == "test" && $password == "pass"){
                echo '<script>document.cookie = "username=' . $username . '"</script>';
                // Reference 1 - https://stackoverflow.com/questions/2112373/php-page-redirect
                echo '<script>window.location.href = "./index.html"</script>';
                // End of reference 1
            }
            else if ($username == "test"){
                echo '<script>window.location.href = "./Kwcnr-Final-Login-F21.php"; alert("Password is incorrect");</script>';
            }
            else{
                echo '<script>window.location.href = "./Kwcnr-Final-Login-F21.php"; alert("Username is incorrect");</script>';
            }
        ?>
    </body>
</html>