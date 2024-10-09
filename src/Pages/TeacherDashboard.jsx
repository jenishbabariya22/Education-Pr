import React, { useState } from 'react';

const TeacherDashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Math 201', assignments: [{ title: 'Assignment 1', dueDate: '2024-10-15' }] },
  ]);
  const [newAssignment, setNewAssignment] = useState({ courseId: '', title: '', dueDate: '' });

  // Handle form input for assignment
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment({ ...newAssignment, [name]: value });
  };

  // Add assignment to a course
  const addAssignment = () => {
    const updatedCourses = courses.map(course => {
      if (course.id === parseInt(newAssignment.courseId)) {
        course.assignments.push({ title: newAssignment.title, dueDate: newAssignment.dueDate });
      }
      return course;
    });
    setCourses(updatedCourses);
    setNewAssignment({ courseId: '', title: '', dueDate: '' });
  };

  return (
    <div className="container my-4">
      <h1 className="h2 mb-4 text-center">Teacher Dashboard - Manage Course Content</h1>

      {/* Assignments Form */}
      <section className="mb-6">
        <h2 className="h4 mb-4">Add Assignment</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 border rounded shadow-sm p-4 mb-3">
              <form className="mb-4">
                <div className="form-group">
                  <label htmlFor="courseId" className="form-label">Course</label>
                  <select
                    name="courseId"
                    id="courseId"
                    value={newAssignment.courseId}
                    onChange={handleChange}
                    className="form-control mb-2"
                    required
                  >
                    <option value="">Select Course</option>
                    {courses.map(course => (
                      <option key={course.id} value={course.id}>{course.title}</option>
                    ))}
                  </select>

                  <label htmlFor="title" className="form-label">Assignment Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter Assignment Title"
                    value={newAssignment.title}
                    onChange={handleChange}
                    className="form-control mb-2"
                    required
                  />

                  <label htmlFor="dueDate" className="form-label">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    value={newAssignment.dueDate}
                    onChange={handleChange}
                    className="form-control mb-2"
                    required
                  />

                  <button
                    type="button"
                    onClick={addAssignment}
                    className="btn btn-primary mt-4 mx-auto d-block"
                  >
                    Add Assignment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Display Courses and Assignments */}
      <section>
        <h2 className="h4 mb-4">My Courses</h2>
        {courses.map(course => (
          <div key={course.id} className="mb-4 border rounded shadow-sm p-3">
            <h3 className="h5">{course.title}</h3>
            <ul className="list-unstyled">
              {course.assignments.length > 0 ? (
                course.assignments.map((assignment, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-weight-bold">{assignment.title}</span> - Due: <span className="text-muted">{assignment.dueDate}</span>
                  </li>
                ))
              ) : (
                <li>No assignments available for this course.</li>
              )}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TeacherDashboard;
