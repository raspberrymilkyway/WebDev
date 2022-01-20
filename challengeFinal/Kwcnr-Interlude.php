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
            $b1 = $_GET["b1"];
            $b2 = $_GET["b2"];
            $b3 = $_GET["b3"];
            if ($b1 == "orb" && $b2 == "void" && $b3 == "empty"){
                // Reference 1 - https://stackoverflow.com/questions/2112373/php-page-redirect
                echo '<script>window.location.href = "./Kwcnr-Final-Hidden.html"</script>';
                // End of reference 1
            }
            else{
                echo '<script>window.location.href = "./Kwcnr-Final-Chapter2.html"</script>';
            }
        ?>
    </body>
</html>