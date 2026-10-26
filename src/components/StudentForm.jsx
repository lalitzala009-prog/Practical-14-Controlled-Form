import { useState } from "react";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    setResult({ name, email });
  };

  return (
    <div className="page">
      <div className="form-card">
        <div className="header">
          <h1>Student Registration</h1>
          <p>Practical 14: Controlled Form</p>
        </div>

        <form onSubmit={submit}>
          <label htmlFor="name">Student Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Submit Details</button>
        </form>

        {result && (
          <div className="result">
            <h2>Submitted Details</h2>
            <p>
              <strong>Name:</strong> {result.name}
            </p>
            <p>
              <strong>Email:</strong> {result.email}
            </p>
          </div>
        )}

        <p className="footer">BCA Semester 5 | React Practical 14</p>
      </div>
    </div>
  );
};

export default StudentForm;