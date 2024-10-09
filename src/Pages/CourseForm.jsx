import React, { useState } from 'react';

const CourseForm = ({ onSubmit }) => {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    teacher: '',
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(course);
    setCourse({ title: '', description: '', startDate: '', endDate: '', teacher: '' });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="border border-dark p-4 rounded shadow-sm">
            <form onSubmit={handleSubmit} className="mb-4">
              <h3 className="h5 mb-4 text-center">Create a Course</h3>

              <div className="form-group mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Course Title"
                  value={course.title}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <textarea
                  name="description"
                  placeholder="Course Description"
                  value={course.description}
                  onChange={handleChange}
                  className="form-control"
                  rows="3"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="date"
                  name="startDate"
                  value={course.startDate}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="date"
                  name="endDate"
                  value={course.endDate}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group mb-4">
                <input
                  type="text"
                  name="teacher"
                  placeholder="Assigned Teacher"
                  value={course.teacher}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
