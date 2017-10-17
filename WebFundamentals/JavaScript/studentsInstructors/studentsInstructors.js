'use strict';

// Part I
function printStudents() {
    var students = [
         {first_name:  'Michael', last_name : 'Jordan'},
         {first_name : 'John', last_name : 'Rosales'},
         {first_name : 'Mark', last_name : 'Guillen'},
         {first_name : 'KB', last_name : 'Tonel'}
    ];
    for (var i = 0; i < students.length; i++) {
        console.log(students[i].first_name, students[i].last_name);
    }
}
printStudents();


// Part II
function printStudInst() {
    var users = {
     'Students': [
         {first_name:  'Michael', last_name : 'Jordan'},
         {first_name : 'John', last_name : 'Rosales'},
         {first_name : 'Mark', last_name : 'Guillen'},
         {first_name : 'KB', last_name : 'Tonel'}
      ],
     'Instructors': [
         {first_name : 'Michael', last_name : 'Choi'},
         {first_name : 'Martin', last_name : 'Puryear'}
      ]
    };

    console.log("Students");
    for (var s = 0; s < users.Students.length; s++) {
        var stuCount = s + 1;
        var stuCharacters = users.Students[s].first_name.length + users.Students[s].last_name.length;
        var studentStr = stuCount + " - " + users.Students[s].first_name + " " + users.Students[s].last_name + " - " + stuCharacters;

        console.log(studentStr.toUpperCase());
    }

    console.log("Instructors");
    for (var i = 0; i < users.Instructors.length; i++) {
        var instCount = i + 1;
        var instCharacters = users.Instructors[i].first_name.length + users.Instructors[i].last_name.length;
        var instructorStr = instCount + " - " + users.Instructors[i].first_name + " " + users.Instructors[i].last_name + " - " + instCharacters;

        console.log(instructorStr.toUpperCase());
    }
}
printStudInst();
