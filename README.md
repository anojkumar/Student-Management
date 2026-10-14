# 🎓 Student Management System — Angular 22

A simple, responsive, and beginner-friendly **Student Management Application** developed using **Angular 22, TypeScript, HTML, and CSS**.

This project was generated using **Angular CLI version 22.2.2** and demonstrates important Angular concepts through a practical CRUD application.

The application allows users to add, view, edit, search, and delete student records. It uses **Angular Signals** for reactive state management and **Browser Local Storage** for data persistence.

## 🚀 Features

- **Add Students** — Register students with name, email, age, and course.
- **View Students** — Display student records in a structured table.
- **Edit Students** — Update existing student details.
- **Delete Students** — Remove student records with confirmation.
- **Search Students** — Search by name, email, or course.
- **Dashboard** — Display total students and filtered search results.
- **Form Validation** — Validate required fields, email, and age.
- **Local Storage** — Preserve student records after refreshing the browser.
- **Responsive Design** — Supports desktop, tablet, and mobile screens.
- **Reactive UI** — Automatically updates using Angular Signals.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Angular 22 | Frontend framework |
| Angular CLI 22.2.2 | Project generation and development |
| TypeScript | Application logic and type safety |
| HTML5 | User interface structure |
| CSS3 | Styling and responsive design |
| Angular Signals | Reactive state management |
| Angular Forms | Form handling and validation |
| Local Storage | Browser-based data persistence |

## 📁 Project Structure

```text
student-management/
│
├── src/
│   ├── app/
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── app.spec.ts
│   │
│   ├── main.ts
│   ├── index.html
│   └── styles.css
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

### File Descriptions

| File | Description |
|---|---|
| `app.ts` | Contains component logic, signals, and CRUD methods |
| `app.html` | Contains the student form, dashboard, and table |
| `app.css` | Contains component-specific CSS |
| `styles.css` | Contains global styling |
| `app.config.ts` | Configures application-level providers |
| `app.routes.ts` | Contains routing configuration |
| `app.spec.ts` | Contains unit tests |
| `main.ts` | Bootstraps the Angular application |
| `index.html` | Main HTML document |

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have Node.js compatible with Angular 22 and npm installed.

### 1. Install Angular CLI

```bash
npm install -g @angular/cli@22
```

### 2. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/student-management.git
```

Replace `YOUR-USERNAME` with your GitHub username after publishing the repository.

Alternatively, open your existing project directory.

### 3. Navigate to the Project

```bash
cd student-management
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Start the Development Server

```bash
ng serve
```

Open your browser and navigate to:

**http://localhost:4200/**

The application automatically reloads whenever you modify the source files.

To start the server and automatically open the browser:

```bash
ng serve -o
```

## 📚 Angular Concepts Covered

This project demonstrates the following Angular concepts:

| Concept | Purpose |
|---|---|
| Standalone Components | Build Angular applications without root NgModules |
| Components | Organize UI, logic, and styles |
| Bootstrapping | Initialize the Angular application |
| Interpolation | Display TypeScript values in HTML |
| Property Binding | Bind HTML properties to component values |
| Event Binding | Handle user interactions |
| Two-Way Binding | Synchronize form inputs with component properties |
| Angular Signals | Manage reactive application state |
| Computed Signals | Automatically calculate derived values |
| `@if` / `@else` | Conditional rendering |
| `@for` / `@empty` | Display lists and empty states |
| Lifecycle Hooks | Initialize component behavior |
| Template-Driven Forms | Capture and validate form inputs |
| TypeScript Interfaces | Define structured data types |
| Local Storage | Persist browser data |
| Responsive CSS | Adapt layouts to different screen sizes |

### Angular Signals

The application uses Angular Signals to manage student records.

```typescript
students = signal<Student[]>([]);
```

Computed signals automatically calculate values based on reactive state.

```typescript
totalStudents = computed(() => this.students().length);
```

### Two-Way Data Binding

Angular's `ngModel` synchronizes form inputs with TypeScript properties.

```html
<input
  type="text"
  name="studentName"
  [(ngModel)]="studentName"
/>
```

### Conditional Rendering

Angular's `@if` displays content based on conditions.

```html
@if (editingId !== null) {
  <h2>Edit Student</h2>
} @else {
  <h2>Add Student</h2>
}
```

### List Rendering

Angular's `@for` dynamically displays student records.

```html
@for (student of students(); track student.id) {
  <p>{{ student.name }}</p>
}
```

## 🔄 CRUD Functionality

The application supports all four CRUD operations.

| Operation | Description | Method |
|---|---|---|
| Create | Add a new student | `saveStudent()` |
| Read | Display student records | `students()` |
| Update | Edit existing student information | `editStudent()` and `saveStudent()` |
| Delete | Remove a student | `deleteStudent()` |

All changes are reflected automatically in the interface through Angular Signals.

## 🔍 Search Functionality

The application provides real-time searching by:

- Student name
- Email address
- Course name

Search results are generated using a computed signal and JavaScript's `filter()` method.

The student table updates automatically as the user types.

## 💾 Data Persistence

The application uses browser Local Storage to save student information.

### Save Student Data

```typescript
localStorage.setItem(
  'students',
  JSON.stringify(this.students())
);
```

### Retrieve Student Data

```typescript
const saved = localStorage.getItem('students');
```

Student records remain available after refreshing the page.

**Note:** Data is stored locally in the user's browser. This project does not use a backend server or database. Local Storage is intended for learning and demonstration purposes, not for securely storing sensitive student information.

## 🎨 Responsive Design

The application uses CSS Grid, Flexbox, and media queries to support multiple screen sizes.

- **Desktop:** Two-column forms and dashboard cards.
- **Tablet:** Responsive layout with flexible spacing.
- **Mobile:** Single-column forms and horizontally scrollable tables.

No external CSS framework is required.

## 🧩 Code Scaffolding

Angular CLI provides commands to generate components, services, directives, and other Angular files.

To generate a new component:

```bash
ng generate component student
```

Short command:

```bash
ng g c student
```

To generate a service:

```bash
ng generate service student
```

To view all available Angular CLI commands:

```bash
ng generate --help
```

## 🏗️ Building the Project

To create a production build:

```bash
ng build
```

Angular compiles and optimizes the application.

The build artifacts are stored in the `dist/` directory.

## 🧪 Testing

### Unit Testing

If unit testing is configured in your project, run:

```bash
ng test
```

Angular 22 CLI projects can use Vitest for unit testing.

### End-to-End Testing

End-to-end testing requires a separately configured testing framework.

Once configured, you can run the appropriate test command, such as:

```bash
ng e2e
```

### Manual Testing

| Test Scenario | Expected Result |
|---|---|
| Add a student | New student appears in the table |
| Edit a student | Updated information is displayed |
| Delete a student | Student is removed after confirmation |
| Search students | Matching records appear |
| Invalid form | Submission is prevented |
| Refresh browser | Saved records remain available |
| Reset form | Form inputs are cleared |

## 📈 Future Improvements

This project can be extended with:

- Reusable Angular components
- Angular Services and Dependency Injection
- Angular Router and multiple pages
- Reactive Forms
- REST API integration
- Backend database integration
- Authentication and authorization
- Sorting and pagination
- Course and department management
- Unit testing and automated testing
- Deployment to a hosting platform

## 🎯 Learning Objectives

The primary goal of this project is to gain hands-on experience with Angular development.

Through this project, I practiced:

- Creating and running Angular applications.
- Understanding Angular project structure.
- Working with standalone components.
- Connecting TypeScript, HTML, and CSS.
- Managing data using Angular Signals.
- Building interactive forms.
- Implementing CRUD functionality.
- Using Angular template control flow.
- Handling user events and form validation.
- Persisting data using browser Local Storage.
- Creating responsive layouts.

## 📖 Additional Resources

- [Angular Official Documentation](https://angular.dev/)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Angular Components](https://angular.dev/guide/components)
- [Angular Signals](https://angular.dev/guide/signals)
- [Angular Forms](https://angular.dev/guide/forms)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)

## 📝 Project Information

| Property | Details |
|---|---|
| Project Name | Student Management System |
| Framework | Angular 22 |
| Angular CLI | 22.2.2 |
| Programming Language | TypeScript |
| Styling | HTML5, CSS3 |
| Architecture | Standalone Components |
| State Management | Angular Signals |
| Forms | Template-Driven Forms |
| Data Storage | Browser Local Storage |
| Backend | Not required |
| Project Type | Learning / Practice |
| Difficulty | Beginner |

## 📌 Conclusion

The **Student Management System** is a beginner-friendly Angular application developed to understand the fundamentals of modern frontend development.

It demonstrates how Angular components, TypeScript, HTML templates, signals, forms, and browser storage work together to create a functional CRUD application.

This project provides a foundation for learning more advanced Angular topics, including reusable components, services, dependency injection, routing, and API integration.

---

**Built with Angular 22 as part of my Angular learning journey.** 🚀
