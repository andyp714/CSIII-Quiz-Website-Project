function getResults() {
    //For each question, creates a variable to hold the result and a bool variable to check  if question was answered. Finds all element by name (radio inputs for each  questions) then changes the value to whichever one is checked
    //Does this for all questions, but instead of radio, gets the range value or text value for questions 8-10 and assigns them to variable
    let q1Value = ''
    let q1Answered = false;
    let q1Answers = document.getElementsByName('q1');
    for (i=0; i < q1Answers.length; i++)  {
        if (q1Answers[i].checked) {
            q1Value = Number(q1Answers[i].value);
            q1Answered = true;
        }
    }

    let q2Value = ''
    let q2Answered = false;
    let q2Answers = document.getElementsByName('q2');
    for (i=0; i < q2Answers.length; i++)  {
        if (q2Answers[i].checked) {
            q2Value = Number(q2Answers[i].value);
            q2Answered = true;
        }
    }

    let q3Value = ''
    let q3Answered = false;
    let q3Answers = document.getElementsByName('q3');
    for (i=0; i < q3Answers.length; i++)  {
        if (q3Answers[i].checked) {
            q3Value = Number(q3Answers[i].value);
            q3Answered = true;
        }
    }

    let q4Value = ''
    let q4Answered = false;
    let q4Answers = document.getElementsByName('q4');
    for (i=0; i < q4Answers.length; i++)  {
        if (q4Answers[i].checked) {
            q4Value = Number(q4Answers[i].value);
            q4Answered = true;
        }
    }

    let q5Value = ''
    let q5Answered = false;
    let q5Answers = document.getElementsByName('q5');
    for (i=0; i < q5Answers.length; i++)  {
        if (q5Answers[i].checked) {
            q5Value = Number(q5Answers[i].value);
            q5Answered = true;
        }
    }

    let q6Value = ''
    let q6Answered = false;
    let q6Answers = document.getElementsByName('q6');
    for (i=0; i < q6Answers.length; i++)  {
        if (q6Answers[i].checked) {
            q6Value = Number(q6Answers[i].value);
            q6Answered = true;
        }
    }

    let q7Value = ''
    let q7Answered = false;
    let q7Answers = document.getElementsByName('q7');
    for (i=0; i < q7Answers.length; i++)  {
        if (q7Answers[i].checked) {
            q7Value = Number(q7Answers[i].value);
            q7Answered = true;
        }
    }

    let q8value = Number(document.getElementById("q8a1").value);
    let q9value = Number(document.getElementById("q9a1").value);
    let q10value = document.getElementById("q10a1").value;

    //If not all questions answered, dont calculate results and tell user
    if (q1Answered == false || q2Answered == false || q3Answered == false || q4Answered == false || q5Answered == false || q6Answered == false || q7Answered == false || q10value == '') {
        document.getElementById("resultCheck").style.display = "block";
    }
    else {
        //If all question answered, get rid of unanswered warning
        document.getElementById("resultCheck").style.display = "none";
        //sets up a var for each DND class to keep track of points
        let barbarianValue = 0;
        let bardValue = 0;
        let clericValue = 0;
        let druidValue = 0;
        let fighterValue = 0;
        let monkValue = 0;
        let paladinValue = 0;
        let rangerValue = 0;
        let rogueValue = 0;
        let sorcererValue = 0;
        let warlockValue = 0;
        let wizardValue = 0;
        //For each  question, adds value to  DND class var depending on answer
        if (q1Value == 1) {
            clericValue += 3;
            druidValue += 3;
            rogueValue += 3;
        } else if (q1Value == 2) {
            rangerValue += 3;
            bardValue += 3;
        } else if (q1Value == 3) {
            fighterValue += 3;
            paladinValue += 3;
            barbarianValue += 3;
        } else if (q1Value == 4) {
            monkValue += 3;
        }

        if  (q2Value == 1) {
            clericValue +=  3;
            wizardValue += 3;
            paladinValue += 3;
            warlockValue += 3;
        } else if (q2Value == 2) {
            fighterValue += 2;
            barbarianValue += 2;
        } else if (q2Value == 3) {
            rangerValue += 3;
            bardValue += 3;
            druidValue += 3;
        } else if (q2Value == 4) {
            rogueValue += 3;
            sorcererValue += 3;
        }

        if (q3Value == 1) {
            fighterValue += 3;
            barbarianValue += 3;
            monkValue += 3;
        } else if (q3Value == 2) {
            rogueValue += 3;
            rangerValue +=3;
        } else if (q3Value == 3) {
            warlockValue += 3;
            wizardValue += 3;
            sorcererValue += 3;
            bardValue += 3;
        }  else if (q3Value == 4) {
            clericValue += 3;
            paladinValue  += 3;
            druidValue += 3;
        }  

        if (q4Value == 1) {
            wizardValue += 3;
            monkValue += 3;
            rogueValue  += 3;
        } else if (q4Value == 2) {
            fighterValue += 3;
            barbarianValue += 3;
        } else if (q4Value == 3) {
            warlockValue += 3;
            rangerValue += 3;
            druidValue += 3;
        }  else if (q4Value == 4) {
            clericValue += 3;
            paladinValue  += 3;
            sorcererValue += 3;
            bardValue += 3;
        }  

        if (q5Value == 1) {
            wizardValue += 3;
            clericValue  += 3;
            sorcererValue += 3;
            warlockValue += 3;
            bardValue  += 3;
            druidValue += 3;
        } else if (q5Value == 2) {
            fighterValue += 3;
            barbarianValue += 3;
            paladinValue += 3;
            rogueValue += 3;
            rangerValue += 3;
            monkValue += 3;
        }

        if (q6Value == 1) {
            bardValue += 3;
            warlockValue += 3;
            sorcererValue += 3;
            fighterValue += 3;
        } else if (q6Value == 2) {
            rogueValue += 3;
            rangerValue += 3;
            wizardValue += 3;
            monkValue  += 3;
        } else if (q6Value == 3) {
            druidValue += 3;
            barbarianValue += 3;
        }  else if (q6Value == 4) {
            clericValue += 3;
            paladinValue  += 3;
        }  

        if (q7Value == 1) {
            paladinValue += 3;
            barbarianValue += 3;
            fighterValue += 3;
            monkValue += 3;
        } else if (q7Value == 2) {
            rogueValue += 3;
            druidValue += 3;
            bardValue += 3;
            clericValue += 3;
        } else if (q7Value == 3) {
            wizardValue += 3;
            warlockValue += 3;
            sorcererValue += 3;
        }  else if (q7Value == 4) {
            rangerValue += 3;
        }  

        wizardValue +=  q8value;
        monkValue += q8value;
        bardValue += q8value;

        console.log(q9value);
        clericValue +=  q9value;
        paladinValue +=  q9value;
        warlockValue += q9value;


        //Sets up an array with [class, value] for every class, so the array can be sorted by value and the class with  the highest value can be found (first index of sorted array)
        const classArray =  [["Barbarian", barbarianValue], ["Bard", bardValue], ["Cleric", clericValue], ["Druid", druidValue], ["Fighter", fighterValue], ["Monk", monkValue],["Paladin", paladinValue], ["Ranger", rangerValue], ["Rogue", rogueValue], ["Sorcerer", sorcererValue], ["Warlock", warlockValue], ["Wizard", wizardValue]];
        classArray.sort(function(a,b){return a[1] - b[1]});
        classArray.reverse();
        //Shows the user their result
        document.getElementById("resultsText").innerHTML = "You are " + String(q10value) + " the " + classArray[0][0];
        document.getElementById("resultsText").style.display = "block"

    }
}