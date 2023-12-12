function getResults() {
    let q1Value = ''
    let q1Answered = false;
    let q1Answers = document.getElementsByName('q1');
    for (i=0; i < q1Answers.length; i++)  {
        if (q1Answers[i].checked) {
            q1Value = q1Answers[i].value;
            q1Answered = true;
        }
    }

    let q2Value = ''
    let q2Answered = false;
    let q2Answers = document.getElementsByName('q2');
    for (i=0; i < q2Answers.length; i++)  {
        if (q2Answers[i].checked) {
            q2Value = q2Answers[i].value;
            q2Answered = true;
        }
    }

    let q3Value = ''
    let q3Answered = false;
    let q3Answers = document.getElementsByName('q3');
    for (i=0; i < q3Answers.length; i++)  {
        if (q3Answers[i].checked) {
            q3Value = q3Answers[i].value;
            q3Answered = true;
        }
    }

    let q4Value = ''
    let q4Answered = false;
    let q4Answers = document.getElementsByName('q4');
    for (i=0; i < q4Answers.length; i++)  {
        if (q4Answers[i].checked) {
            q4Value = q4Answers[i].value;
            q4Answered = true;
        }
    }

    let q5Value = ''
    let q5Answered = false;
    let q5Answers = document.getElementsByName('q5');
    for (i=0; i < q5Answers.length; i++)  {
        if (q5Answers[i].checked) {
            q5Value = q5Answers[i].value;
            q5Answered = true;
        }
    }

    let q6Value = ''
    let q6Answered = false;
    let q6Answers = document.getElementsByName('q6');
    for (i=0; i < q6Answers.length; i++)  {
        if (q6Answers[i].checked) {
            q6Value = q6Answers[i].value;
            q6Answered = true;
        }
    }

    let q7Value = ''
    let q7Answered = false;
    let q7Answers = document.getElementsByName('q7');
    for (i=0; i < q7Answers.length; i++)  {
        if (q7Answers[i].checked) {
            q7Value = q7Answers[i].value;
            q7Answered = true;
        }
    }

    let q8value = document.getElementById("q8a1").value;
    let q9value = document.getElementById("q9a1").value;
    let q10value = document.getElementById("q10a1").value;

    if (q1Answered == false || q2Answered == false || q3Answered == false || q4Answered == false || q5Answered == false || q6Answered == false || q7Answered == false || q10value == '') {
        document.getElementById("resultCheck").style.display = "block";
    }
    else {
        document.getElementById("resultCheck").style.display = "none";
    }
    

}