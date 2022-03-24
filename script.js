function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal === ""){
        alert("Enter a positive number");

    } else{
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100; 
    var year = new Date().getFullYear()+parseInt(years);
    var final = "If you deposit " + principal + ", at an interest rate of " + rate + "% You will receive an amount of " + interest + ", in the year " + year;
    document.getElementById("result").innerText= final;
 }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}  
