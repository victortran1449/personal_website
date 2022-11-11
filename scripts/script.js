const courseList = [
  { code: "ACIT 1420", name: "Introduction to Systems Administration" },
  { code: "ACIT 1620", name: "Fundamental Web Technologies" },
  { code: "ACIT 1630", name: "Database System" },
];

let input;
let exists;
do {
  input = prompt("Enter 4-digit course number: ");
} while (isNaN(Number(input)) || input.length != 4);

for (let course of courseList) {
  if (course.code.includes(input)) {
    console.log(`Yes I am taking the course: ${course.code} - ${course.name}`);
    exists = true
  }
}

if (exists != true) {
  courseList.push({ code: input, name: null });
  console.log("Success");
}
