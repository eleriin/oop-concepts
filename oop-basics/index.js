const Person = require('./Person')
const Student = require('./Student')
const Course = require('./Course')
const School = require('./School')

const school = new School("Awesome School")
const student1 = new Student("John Smith")
student1.setDateOfBirth(1995)
const student2 = new Student("Mary Lee")
student2.setDateOfBirth(2000)

school.addStudent(student1)
school.addStudent(student2)


//we cannot add one student twice
school.addStudent(student1)

console.log(school.getStudents().length)  // 2

const course1 = new Course("Math")
const course2 = new Course("Physics")

school.addCourse(course1)
school.addCourse(course2)

console.log(school)

//we cannot add one course twice
school.addCourse(course1)

console.log(school.getCourses().length) // 2

school.addStudentGrade(student1, course1, 4)
school.addStudentGrade(student1, course2, 5)

console.log(school)
