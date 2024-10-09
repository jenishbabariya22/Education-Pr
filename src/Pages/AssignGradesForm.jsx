import React, { useState } from 'react';

const AssignGradesForm = ({ onAssign }) => {
  const [grade, setGrade] = useState({ student: '', course: '', grade: '' });

  const handleChange = (e) => {
    setGrade({ ...grade, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAssign(grade);
    setGrade({ student: '', course: '', grade: '' });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="border border-dark p-4 rounded shadow-sm">
            <form onSubmit={handleSubmit} className="mb-4">
              <h3 className="h5 mb-4 text-center">Assign Grade</h3>

              <div className="form-group mb-3">
                <input
                  type="text"
                  name="student"
                  placeholder="Student Name"
                  value={grade.student}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="text"
                  name="course"
                  placeholder="Course Title"
                  value={grade.course}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group mb-4">
                <input
                  type="text"
                  name="grade"
                  placeholder="Grade"
                  value={grade.grade}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Assign
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignGradesForm;
