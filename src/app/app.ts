
import {
  Component,
  computed,
  signal,
  OnInit
} from '@angular/core';

import { FormsModule } from '@angular/forms';

interface Student {
  id: number;
  name: string;
  email: string;
  age: number;
  course: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  title = 'Student Management System';

  // Form fields
  studentName = '';
  studentEmail = '';
  studentAge: number | null = null;
  studentCourse = '';

  // Editing state
  editingId: number | null = null;

  // Search state
  searchText = signal('');

  // Initial student data
  students = signal<Student[]>([
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul@example.com',
      age: 22,
      course: 'Angular'
    },
    {
      id: 2,
      name: 'Priya Singh',
      email: 'priya@example.com',
      age: 24,
      course: 'React'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      email: 'amit@example.com',
      age: 21,
      course: 'JavaScript'
    }
  ]);

  // Automatically calculated values
  totalStudents = computed(() => this.students().length);

  filteredStudents = computed(() => {
    const search = this.searchText().trim().toLowerCase();

    return this.students().filter(student =>
      student.name.toLowerCase().includes(search) ||
      student.email.toLowerCase().includes(search) ||
      student.course.toLowerCase().includes(search)
    );
  });

  // Load saved students on startup
  ngOnInit(): void {
    const saved = localStorage.getItem('students');

    if (saved !== null) {
      try {
        const parsed: unknown = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          this.students.set(parsed as Student[]);
        }
      } catch (error) {
        console.error('Unable to load students', error);
      }
    }
  }

  // Save students to browser storage
  saveStudents(): void {
    localStorage.setItem(
      'students',
      JSON.stringify(this.students())
    );
  }

  // Add or update a student
  saveStudent(): void {
    const name = this.studentName.trim();
    const email = this.studentEmail.trim();
    const course = this.studentCourse.trim();
    const age = Number(this.studentAge);

    if (
      !name ||
      !email ||
      !course ||
      this.studentAge === null ||
      !Number.isInteger(age) ||
      age < 1 ||
      age > 120
    ) {
      alert('Please enter valid student details.');
      return;
    }

    if (this.editingId !== null) {
      // Update existing student
      this.students.update(students =>
        students.map(student =>
          student.id === this.editingId
            ? {
              ...student,
              name,
              email,
              age,
              course
            }
            : student
        )
      );
    } else {
      // Add a new student
      const newStudent: Student = {
        id: Date.now(),
        name,
        email,
        age,
        course
      };

      this.students.update(students => [
        ...students,
        newStudent
      ]);
    }

    this.saveStudents();
    this.resetForm();
  }

  // Fill the form for editing
  editStudent(student: Student): void {
    this.editingId = student.id;
    this.studentName = student.name;
    this.studentEmail = student.email;
    this.studentAge = student.age;
    this.studentCourse = student.course;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Delete a student
  deleteStudent(id: number): void {
    const confirmed = confirm(
      'Are you sure you want to delete this student?'
    );

    if (!confirmed) {
      return;
    }

    this.students.update(students =>
      students.filter(student => student.id !== id)
    );

    this.saveStudents();

    if (this.editingId === id) {
      this.resetForm();
    }
  }

  // Clear the form
  resetForm(): void {
    this.studentName = '';
    this.studentEmail = '';
    this.studentAge = null;
    this.studentCourse = '';
    this.editingId = null;
  }
}
