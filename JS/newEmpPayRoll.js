//UC2
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name'); 
    const textError = document.querySelector('.text-error');
     name.addEventListener('input', function() {
    if(name.value.length == 0) { 
    textError.textContent = ""; 
    return; 
    } 
    try {
    (new EmployeePayRoll()).name = name.value;
     textError.textContent = ""; }
    catch (e) {
     textError.textContent = e; } 
    });
    const salary = document.querySelector('#salary');
     const output = document.querySelector('.salary-output');
     output.textContent = salary.value;
     salary.addEventListener('input', function() {
     output.textContent = salary.value; 
    }) ;
}); 

    //UC3

const save = () => 
{ 
try 
{ 
    let EmployeePayRoll = createEmployeePayroll(); 
    createAndUpdateStorage(EmployeePayRoll);
} 
catch (e) 
{ 
    return e;
} 
} 

function createAndUpdateStorage(EmployeePayRoll)
{
//localStorage.clear();
let employeePayrollList = [];
employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList")); 
if(employeePayrollList != undefined)
{
    employeePayrollList.push(EmployeePayRoll); 
} 
else
{ 
    employeePayrollList = [EmployeePayRoll] ;
} 
alert(employeePayrollList.toString());
localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList)) 
} 

        
const createEmployeePayroll=()=>
{ 
let employeePayrollData = new EmployeePayRoll();
try 
{
    employeePayrollData.name = getInputValueById('#name');
}
catch (e) 
{
    setTextValue('.text-error', e);
    throw e;
} 
        
employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
employeePayrollData.gender = getSelectedValues('[name=gender]').pop(); 
employeePayrollData.department = getSelectedValues('[name=department]');
employeePayrollData.salary = getInputValueById('#salary');
employeePayrollData.note = getInputValueById('#notes');
let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
employeePayrollData.date = Date.parse(date); 
alert(employeePayrollData.toString());
return employeePayrollData; 
}
       
const getSelectedValues = (propertyValue) =>
{
    let allItems = document.querySelectorAll(propertyValue); 
    let sellItems = [];
    allItems.forEach(item => 
    {
        if(item.checked) 
        sellItems.push(item.value);
    });
    return sellItems;
}
        
const getInputElementValue = (id) =>
{
    let value = document.querySelector(id).value;
    return value; 
}

const getInputValueById=(id)=>
{
    let value=document.getElementById(id).value;
    return value;
}

const resetForm = () =>
{ 
    setValue('#name',''); 
    unsetSelectedValues('[name=profile]'); 
    unsetSelectedValues('[name=gender]'); 
    unsetSelectedValues('[name=department]'); 
    setValue('#salary', ' '); 
    setValue('#notes',' ');
    setValue('#day','2');
    setValue('#month','May');
    setValue('#year','2016'); 
}
       
const unsetSelectedValues = (propertyValue) => 
{ 
    let allItems = document.querySelectorAll(propertyValue); 
    allItems.forEach(item => { item.checked = false; }
        );
} 
       
const setTextValue = (id, value) => 
{
    const element = document.querySelector(id); 
    element.textContent = value; 
} 

const setValue = (id, value) =>
{
    const element = document.querySelector(id);
    element.value = value; 
}