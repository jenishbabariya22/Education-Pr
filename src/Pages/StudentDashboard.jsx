import React, { useState } from 'react';

const StudentDashboard = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Math 201',
      assignments: [{ title: 'Assignment 1', dueDate: '2024-10-15' }],
    },
  ]);
  const [submissions, setSubmissions] = useState({});

  // Handle assignment submission
  const handleSubmit = (courseId, assignmentTitle, submission) => {
    setSubmissions({ ...submissions, [`${courseId}-${assignmentTitle}`]: submission });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Student Dashboard</h1>
      <h2 className="h4 mb-4">My Courses</h2>

      {/* Display Enrolled Courses */}
      {courses.map((course) => (
        <div key={course.id} className="card mb-4 shadow">
          <div className="card-body">
            <h3 className="card-title">{course.title}</h3>
            <ul className="list-unstyled">
              {course.assignments.map((assignment) => (
                <li key={assignment.title} className="mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <strong>{assignment.title}</strong>
                    <span className="text-muted">Due: {assignment.dueDate}</span>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(course.id, assignment.title, e.target.submission.value);
                    }}
                    className="input-group mt-2"
                  >
                    <input
                      type="text"
                      name="submission"
                      placeholder="Submit Assignment URL"
                      className="form-control"
                      required
                    />
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                  <p className="mt-2">
                    Submission: {submissions[`${course.id}-${assignment.title}`] || 'Not submitted yet'}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;
