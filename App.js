import React, { useState } from "react";

function App() {
  // State for volunteer form
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
  });
  const [thankYou, setThankYou] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setThankYou(true);
    setForm({ name: "", email: "", interest: "" });
    setTimeout(() => setThankYou(false), 4000); // Hide after 4 sec
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#home">
          Basti Ki Pathshala Foundation
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse show" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#volunteer">
                Volunteer
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home */}
      <section
        id="home"
        className="d-flex align-items-center"
        style={{
          minHeight: "290px",
          background: "#4CAF50",
          color: "white",
          textAlign: "center",
          padding: "60px 0",
        }}
      >
        <div className="container">
          <h1>Welcome to Basti Ki Pathshala Foundation</h1>
          <p>Making the world a better place, one step at a time.</p>
          <a href="#volunteer" className="btn btn-light mt-3">
            Become a Volunteer
          </a>
        </div>
      </section>

      {/* About Us */}
      <section
        id="about"
        style={{
          padding: "40px 0",
          background: "#f8f9fa",
        }}
      >
        <div className="container">
          <h2>About Us</h2>
          <p>
            Basti Ki Pathshala Foundation is a Government-registered organization established under the Indian Societies Act of 1860. We are a grassroots organization dedicated to breaking the barriers of education in underserved communities. Founded with a mission to provide quality education to children living in slum areas, we strive to create a nurturing learning environment where every child has the opportunity to thrive. Through innovative teaching methods, community engagement, and partnerships, we empower children with the knowledge and skills they need to build a brighter future.
            Our commitment extends beyond the classroom as we work towards bridging the educational gap and fostering long-term sustainable change in the lives of marginalized families.
          </p>
          <ul>
            <li>Community Development</li>
            <li>Health & Wellness Programs</li>
            <li>Education for All</li>
            <li>Women Empowerment Initiatives</li>
          </ul>
        </div>
      </section>

      {/* Volunteer Form */}
      <section
        id="volunteer"
        style={{
          padding: "40px 0",
        }}
      >
        <div className="container">
          <h2>Volunteer With Us</h2>
          <form className="mt-4" style={{ maxWidth: 460 }} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={form.name}
                required
                placeholder="Enter your name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={form.email}
                required
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="interest">Area of Interest*</label>
              <select
                className="form-control"
                id="interest"
                name="interest"
                value={form.interest}
                required
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option>Education</option>
                <option>Healthcare</option>
                <option>Fundraising</option>
                <option>Community Work</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            {thankYou && (
              <div className="text-success mt-3">
                Thank you for signing up! We'll be in touch soon.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#333",
          color: "white",
          padding: "20px 0",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        &copy; 2025 Basti Ki Pathshala Foundation. All rights reserved.
      </footer>
    </>
  );
}

export default App;