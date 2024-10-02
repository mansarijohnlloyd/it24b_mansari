class Person {
    #name;
    #age;
    #occupation;

    constructor(name, age, occupation) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getOccupation() {
        return this.#occupation;
    }
}

class Student extends Person {
    #major;

    constructor(name, age, occupation, major) {
        super(name, age, occupation);
        this.#major = major;
    }

    getMajor() {
        return this.#major;
    }
}

// Create an instance of the Student class
const student = new Student('John Lloyd Mansari', 19, 'Student', 'Programming');

// Log the student's information to the console
console.log(`Name: ${student.getName()}`);
console.log(`Age: ${student.getAge()}`);
console.log(`Occupation: ${student.getOccupation()}`);
console.log(`Major: ${student.getMajor()}`);

// Display the student's information in the HTML div
const studentInfoDiv = document.getElementById('student-info');
studentInfoDiv.innerHTML = `
    <h2>Student Information</h2>
    <p><strong>Name:</strong> ${student.getName()}</p>
    <p><strong>Age:</strong> ${student.getAge()}</p>
    <p><strong>Occupation:</strong> ${student.getOccupation()}</p>
    <p><strong>Major:</strong> ${student.getMajor()}</p>
`;
