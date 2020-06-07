/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
    Created on : 3 juin 2020, 16:14:26
    Author     : brune
*/

function validateForm() {
    var i_nom =  document.getElementById('i_nom').value;
    if (i_nom == "") {
        document.querySelector('.status').innerHTML = "Le nom ne peut pas être vide";
        return false;
    }
    var i_email =  document.getElementById('i_email').value;
    if (i_email == "") {
        document.querySelector('.status').innerHTML = "L'email ne peut pas être vide";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(i_email)){
            document.querySelector('.status').innerHTML = "Format email invalide";
            return false;
        }
    }
    var i_subject =  document.getElementById('i_subject').value;
    if (i_subject == "") {
        document.querySelector('.status').innerHTML = "Le sujet ne peut pas être vide";
        return false;
    }
    var i_message =  document.getElementById('i_message').value;
    if (i_message == "") {
        document.querySelector('.status').innerHTML = "Le message ne peut pas être vide";
        return false;
    }
    document.querySelector('.status').innerHTML = "Envoie...";
  }