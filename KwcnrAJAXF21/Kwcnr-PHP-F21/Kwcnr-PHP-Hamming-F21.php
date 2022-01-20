<!DOCTYPE html>

<!-- References:
        1. https://www.w3resource.com/php-exercises/challenges/1/php-challenges-1-exercise-20.php
 -->

<html>
    <head>
        <meta charset="utf-8"/>
        <title>PHP Playground</title>
    </head>

    <body>
        <!-- Reference 1, https://www.w3resource.com/php-exercises/challenges/1/php-challenges-1-exercise-20.php -->
        <?php
            $x = $_GET["num"];

            function is_hamming_numbers(int $x){
               if ($x == 1){
                   return "Hamming Number";
               }
               if ($x % 2 == 0){
                   return is_hamming_numbers($x/2);
               }
               
               if ($x % 3 == 0){
                   return is_hamming_numbers($x/3);
                }
               if ($x % 5 == 0){
                   return is_hamming_numbers($x/5);
               }	
              return "not a Hamming Number";
            }

            
            echo "<h1>The provided number <i>" . $x . "</i> is " . is_hamming_numbers($x) . "</h1>";
        ?>
        <!-- End of reference 1 -->
    </body>
</html>