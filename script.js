const firstCrit = document.getElementById('image');
const secondCrit = document.getElementById('functions');
const thirdCrit = document.getElementById('songs');
const fourthCrit = document.getElementById('hobbies');
const fifthCrit = document.getElementById('best-one');
const restrict = document.getElementById('timeout')
var i = 0

function back(){
    
    if (i==4){
        i--;
        fifthCrit.style.display="none";
        fourthCrit.style.display="block";   
    }
    else if (i==3){
        i--;
        fourthCrit.style.display="none";
        thirdCrit.style.display="block";
        }
    else if (i==2){
        i--;
            thirdCrit.style.display="none";
        secondCrit.style.display="block";
        }
    else if (i==1){
            i--;
            secondCrit.style.display="none";
        firstCrit.style.display="block";
        }
}

function next(){
    if (i==0){
        i++;
    firstCrit.style.display="none";
    secondCrit.style.display="block";
    }
    else if (i==1){
        i++;
        secondCrit.style.display="none";
    thirdCrit.style.display="block";
    }
    else if (i==2){
        i++;
        thirdCrit.style.display="none";
    fourthCrit.style.display="block";
    }
    else if (i==3){
        i++;
        fourthCrit.style.display="none";
        fifthCrit.style.display="block";
    }
}