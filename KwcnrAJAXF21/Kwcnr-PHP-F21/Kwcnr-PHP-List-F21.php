<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8"/>
        <title>PHP Playground</title>
    </head>

    <body>
        <?php
            $a = $_GET["character-a"];
            $b = $_GET["character-b"];
            $character = ord($b);
            if (ord($a) < ord($b)){
                $character = ord($b)-1;
            }
            if (ord($a) > ord($b)){
                $character = ord($b)+1;
            }
            echo "{";
                
            if ($a !== $b){
                foreach (range($a, chr($character)) as $list){
                    echo $list . ", ";
                }
            }

            echo $b . "}";
        ?>
    </body>
</html>