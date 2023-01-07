/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// PrintDeveloperswithMap();
// PrintDeveloperbyForEach();
// addData();
// removeAdmin();
// concatenateArray();

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map((employee) => {
    if(employee.profession === "developer") {
      console.log(employee);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach((employee)=> {
    if(employee.profession === "developer") {
      console.log(employee);
    }
  })
}

function addData() {
  //Write your code here
  let newEmployee = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  // first step find the index
  let index = -1;
  arr.forEach((employee, idx) => {
    if(employee.profession === "admin") {
      index = idx;
    }
  })
  // second step remove that element
    arr.splice(index, 1);
    console.log(arr);
  
}

function concatenateArray() {
  //Write your code here
  let arr2 = [
      { id: 5, name: "mike", age: "17", profession: "ux-designer" },
      { id: 6, name: "lauren", age: "22", profession: "data-scientist" },
      { id: 7, name: "david", age: "24", profession: "product-manager" },
  ]
  let afterJoined = arr.concat(arr2);
  console.log(afterJoined);
}

