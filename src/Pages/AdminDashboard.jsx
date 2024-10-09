import React, { useState } from 'react';
import CourseForm from './CourseForm';
import EnrollStudentForm from './EnrollStudentForm';
import AssignGradesForm from './AssignGradesForm';
import DataTable from './DataTable';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState([]);

  // Handlers for form submissions
  const handleCourseSubmit = (course) => {
    setCourses([...courses, course]);
  };

  const handleStudentEnroll = (student) => {
    setStudents([...students, student]);
  };

  const handleGradeAssign = (grade) => {
    setGrades([...grades, grade]);
  };

  return (
    <div className="container my-5">
      <h1 className="display-4 text-center mb-4">Admin Dashboard</h1>

      <div className="row mb-4">
        <div className="col-md-4">
          <h2 className="h5 mb-3">Add Course</h2>
          <CourseForm onSubmit={handleCourseSubmit} />
        </div>
        <div className="col-md-4">
          <h2 className="h5 mb-3">Enroll Student</h2>
          <EnrollStudentForm onEnroll={handleStudentEnroll} />
        </div>
        <div className="col-md-4">
          <h2 className="h5 mb-3">Assign Grades</h2>
          <AssignGradesForm onAssign={handleGradeAssign} />
        </div>
      </div>

      <div className="mb-4">
        <h2 className="display-5 mb-3">Courses</h2>
        <DataTable data={courses} columns={['title', 'description', 'startDate', 'endDate', 'teacher']} filterKey="title" />
      </div>

      <div className="mb-4">
        <h2 className="display-5 mb-3">Students</h2>
        <DataTable data={students} columns={['name', 'course']} filterKey="name" />
      </div>

      <div className="mb-4">
        <h2 className="display-5 mb-3">Grades</h2>
        <DataTable data={grades} columns={['student', 'course', 'grade']} filterKey="student" />
      </div>
    </div>
  );
};

export default AdminDashboard;
