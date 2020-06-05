<?php
if(isset( $_POST['i_nom']))
$i_nom = $_POST['i_nom'];
if(isset( $_POST['i_email']))
$i_email = $_POST['i_email'];
if(isset( $_POST['i_message']))
$i_message = $_POST['i_message'];
if(isset( $_POST['i_subject']))
$i_subject = $_POST['i_subject'];
if ($i_nom === ''){
    echo "Le nom ne peut pas être vide.";
    die();
    }
    if ($i_email === ''){
    echo "L'email ne peut pas être vide.";
    die();
    } else {
    if (!filter_var(i_email, FILTER_VALIDATE_EMAIL)){
    echo "Format email invalide.";
    die();
    }
    }
    if ($i_subject === ''){
    echo "Le sujet ne peut pas être vide.";
    die();
    }
    if ($i_message === ''){
    echo "Le message ne peut pas être vide.";
    die();
    }

$content="De: $i_nom \n Email: $i_email \n Message: $i_message";
$recipient = "brunelle@servat.fr";
$mailheader = "De: $i_email \r\n";
mail($recipient, $i_subject, $content, $mailheader) or die("Erreur!");
echo "Email envoyé!";
?>