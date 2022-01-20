<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8"/>
        <title>PHP Playground</title>
    </head>

    <body>
        <?php
            $height = $_GET["height"];
            $radius = $_GET["radius"];
            // Reference 1, https://www.php.net/manual/en/function.gettype.php
            $p1 = 2*pi()*$radius*$height;
            $p2 = 2*pi()*pow($radius, 2);
            $surfaceArea = $p1 + $p2;
            echo "Surface area of a cylinder with height " . $height . " and radius " . $radius . " is " , number_format($surfaceArea, 2);
        ?>
    </body>
</html>