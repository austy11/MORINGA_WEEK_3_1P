// submit btn
document.getElementById('submit').onclick = function score(){
    var score=0;
    if (document.getElementById('right1').checked)
    {
        score++;
    }
    if (document.getElementById('right2').checked)
    {
        score++;
    }
    if (document.getElementById('right3').checked)
    {
        score++;
    }
    if (document.getElementById('right4').checked)
    {
        score++;
    }
    if (document.getElementById('right5').checked)
    {
        score++;
    }
    if (document.getElementById('right6').checked)
    {
        score++;
    }
    if (document.getElementById('right7').checked)
    {
        score++;
    }
    if (document.getElementById('right8').checked)
    {
        score++;
    }
    if (document.getElementById('right9').checked)
    {
        score++;
    }
    if (document.getElementById('right10').checked)
    {
        score++;
    }
    console.log(score);
    document.getElementById("questionArea11").style.display = "block";
    document.getElementById('results').innerHTML = "You have scored"+' ' + score + " " + "Point(s)";
    document.getElementById("questionArea10").style.display = "none";
}