/*  UC-8: Ability to Set Event
*   Listener on Salary
*   Range to display
*   appropriate value
*/
 const salary = document.querySelector("#salary");
 const salaryOutput = document.querySelector(".salary-output"); 
 console.log(salary);
 salary.addEventListener('input', function(){
    salaryOutput.textContent = salary.value;
 });