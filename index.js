// Write your solution in this file!
const employee = {
    name:'Kimotho',
    streetAdrress:'102 Kubernetes'
}

function updateEmployeeWithKeyAndValue(employeeObj,key,value){
   const newObj={...employeeObj}

   newObj[key]=value;

   return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj,key,value){
    employeeObj[key]=value;
    return employeeObj;
}

function deleteFromEmployeeByKey(employeeObj,key){
    const newObj= {...employeeObj};
    delete newObj[key];

    return newObj;
}

 function destructivelyDeleteFromEmployeeByKey(employeeObj,key){
    delete employeeObj[key];

    return employeeObj;
}