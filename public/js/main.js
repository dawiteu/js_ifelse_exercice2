//exo 1 
/*
let nb1 = parseInt(prompt("Nombre 1?")); // reste en string

let nb2 = parseInt(prompt("nombre 2?")); // passe en int.  

//nb2.isNan()
if ((!isNaN(nb1) && nb1 != undefined ) && ((!isNaN(nb2) && nb2 != undefined ))){
    alert(`le nombre ${nb1} et le nombre ${nb2} sont t'ils égaux? ${nb1==nb2} et strictement: ${nb1===nb2}`);
}else{
    alert('une rreur...');
}


//exo2

/*
let nb1 = prompt("Nombre 1?");
let nb2 = prompt("nombre 2?"); 

alert(`le nombre ${nb1} et plus petit que ${nb2} ? ${nb1<nb2}`);
*/


//exo3 

/*
let nb1 = parseInt(prompt("Nombre 1?"));
let nb2 = parseInt(prompt("Nombre 2?"));
let nb3 = parseInt(prompt("Nombre 3?"));

let re1 = nb1+nb2; 

alert(`La somme de ${nb1} et ${nb2} est plus grande que ${nb3}? ${re1 > nb3}`); 

*/


//exo4 

/*
let phrase = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, saepe."; 

let estim = parseInt(prompt("Estime le nombre de caractreres dans la phrase: \n"+phrase));

if(phrase.length == estim){
    alert('Magnifique! ');
}else if(phrase.length > estim){ 
    alert(`non.. tu étais à ${phrase.length - estim} unité près. `); 
}else if(phrase.length < estim){
    alert(`non.. tu étais à ${estim - phrase.length} unité près. `); 
}else{
    alert('pas de valeur... !? ? 1'); 
}

/*

else{ // if(estim != phrase.length)
    alert(`Désolé, tu étais à ${Math.abs(phrase.length - estim)} unité ! `);
}
*/


//exo 5 

/*
prenom = prompt("entre ton prenom");

if(prenom != "undefined" && prenom.length > 0){
    alert(`Bonjour ${prenom}`);  
}else{
    alert('erroreur ! pas de prenom');
} 

*/


//exo 6 


/*
let abon = confirm("voulez vous prendre un  abonnement? "); 
var exit; 

if(abon){ // (abon === true )
    //alert('Cest ok !');
    let formule = parseInt(prompt("Quel type d'abonement?  1 LUXE / 0 NORMALE) ")); 
    if(formule == 1){
        alert('Formule de LUXE');
    }else if(formule == 0){
        alert('Formule normale');
    }else{
        exit = confirm("Voulez vous abandonné?"); 
        if(!exit){
            formule = parseInt(prompt("Quel type d'abonement?  1 LUXE / 0 NORMALE) ")); 
            if(formule == 1){
                alert('Formule de LUXE');
            }else if(formule == 0){
                alert('Formule normale');
            }else{
                exit = confirm("Voulez vous abandonné?"); 
                if(!exit){
                    formule = parseInt(prompt("Quel type d'abonement?  1 LUXE / 0 NORMALE) ")); 
                }else{
                    alert('Dommage.. salut!'); 
                }
            }
        }else{
            alert('Dommage.. salut!'); 
        }
    }
}else{ // else if abon === false ... 
    exit = confirm("Voulez vous abandonné?"); 
    if(!exit){
        formule = parseInt(prompt("Quel type d'abonement?  1 LUXE / 0 NORMALE) ")); 
        if(formule == 1){
            alert('Formule de LUXE');
        }else if(formule == 0){
            alert('Formule normale');
        }else{
            exit = confirm("Voulez vous abandonné?"); 
            if(!exit){
                formule = parseInt(prompt("Quel type d'abonement?  1 LUXE / 0 NORMALE) ")); 
            }else{
                alert('Dommage.. salut!'); 
            }
        }
    }else{
        alert('Dommage.. salut!'); 
    }
}


*/

// exo7 


/*
let q1 = prompt("Question 1?"); 
let q2 = prompt("Question 2?"); 

let r1 = "a"; 
let r2 = "b"; 


if(q1 == r1 && q2 == r2){
    alert('Bravo, tout est correct !');
}else if(q1 == r1 && q2 != r2){
    alert('Tu as echouer sur la deuxieme question'); 
}else if(q1 != r1 && q2 == r2){
    alert('Tu as echouer sur la premiere question'); 
}else if(q1 != r1 && q2 != r2){
    alert('Tout est faux!'); 
}else{
    alert('je sais pas qu4est ce qu4il faut faire pour en arriver ici!'); 
}

*/

//exo 8;

/*
let age = parseInt(prompt("Entre ton age?")); 

//(age >= 18) ? alert('Vous etes majeurs, c4est bon pour vous') : alert('Vous etes trop jeunes encore !'); 


if(age > 18 && age < 100){
    alert('Vous etes majeurs, c4est bon pour vous');
}else if(age <= 0){
    alert('tes pas né..');
}else if(age >= 100){
    alert('tes trop vieux'); 
}else if(age == 18){
    alert('Vous avez tout juste lage !'); 
}else if(age < 18){
    alert('tu es trop jeune ! ');
}else{
    alert('pas dage indiquer ');
}


/*


let cetteanne = new Date().getFullYear(); 

let annedenaiss = parseInt(prompt("Entre ta date de naissance")); 

let age = cetteanne - annedenaiss;

if(age > 18 && age < 100){
    alert('Vous etes majeurs, c4est bon pour vous');
}else if(age <= 0){
    alert('tes pas né..');
}else if(age >= 100){
    alert('tes trop vieux'); 
}else if(age == 18){
    alert('Vous avez tout juste lage !'); 
}else if(age < 18){
    alert('tu es trop jeune ! ');
}else{
    alert('pas dage indiquer ');
}



let riche = prompt("Est ce que vous etes riche? "); 
let vacan = prompt("voulez vous partir en vacances?");
let uchat = prompt("Vous avez un chat?"); 

if(riche == "oui"){
    riche = true; 
}else{
    riche = false; 
}

if(vacan == "oui"){
    vacan = true; 
}else{
    alert('pas de soucis.. ne partez pas en vacances.');
    vacan = false;
}

if(uchat == "oui"){
    uchat = true;
}else{
    uchat = false; 
}

if(!riche || !uchat && !vacan){
    alert("de toutes facons vous ne pouvez pas partir...");
}
if(riche && !uchat){
    alert("Vous pouvez, si vous le voulez, partir en vacances."); 
}

if(riche && vacan && !uchat){
    alert('Pas de soucis pour partir en vacances'); 
}

*/