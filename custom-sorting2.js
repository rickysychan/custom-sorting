var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var result =  students.sort(function(a,b){
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  var ageA = a.age;
  var ageB = a.age;

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if (nameA = nameB){
    if(ageA < ageB){
      return -1
    }
  }
});
console.log(result)

// console.log(students[0].name)