var age = prompt("Please enter your age", "Enter age");

function retire(age)
{
    var added = 68-age;
    return 2020+added;
}
var retiredYear = retire(age);
alert("you will retire in: "+retiredYear);
