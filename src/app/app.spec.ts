import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    localStorage.clear();
    // jsdom does not implement scrolling
    window.scrollTo = () => {};

    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Student Management System'
    );
  });

  it('should render the initial students', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('tbody tr').length).toBe(3);
    expect(compiled.textContent).toContain('Rahul Sharma');
    expect(compiled.textContent).toContain('priya@example.com');
  });

  it('should filter students by search text', async () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.searchText.set('react');
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(app.filteredStudents().length).toBe(1);
    expect(compiled.querySelectorAll('tbody tr').length).toBe(1);
    expect(compiled.textContent).toContain('Priya Singh');
  });

  it('should show the empty state when nothing matches', async () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.searchText.set('zzz-no-match');
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(app.filteredStudents().length).toBe(0);
    expect(compiled.textContent).toContain('No students found.');
  });

  it('should add a new student', async () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.studentName = 'Sara Khan';
    app.studentEmail = 'sara@example.com';
    app.studentAge = 23;
    app.studentCourse = 'TypeScript';
    app.saveStudent();
    await fixture.whenStable();

    expect(app.totalStudents()).toBe(4);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Sara Khan');
  });

  it('should put a student into edit mode', async () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.editStudent(app.students()[0]);
    await fixture.whenStable();

    expect(app.editingId).toBe(1);
    expect(app.studentName).toBe('Rahul Sharma');

    const compiled = fixture.nativeElement as HTMLElement;
    const sectionHeading = compiled.querySelector(
      'form'
    )?.parentElement?.querySelector('h2');
    expect(sectionHeading?.textContent).toContain('Edit Student');
  });
});
