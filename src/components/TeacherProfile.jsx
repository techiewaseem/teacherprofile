import React, { useState } from "react";
import teacherImage from "./teacher.png";
import "../TeacherProfile.css";

const teacher = {
  name: "Hamdan Bin Khalid",
  subject: "Arabic",
  bio: "Experienced high school Arabic teacher with 10+ years of experience.",
  courses: [
    { id: 1, title: "Quran Tajweed", description: "Learn the rules of Quran recitation" },
    { id: 2, title: "Basic Arabic Grammar", description: "Learn fundamental Arabic grammar rules" },
    { id: 3, title: "Quran Interpretation", description: "Understand the meanings and tafsir of Quran verses" },
  ],
};

const TeacherProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleBookClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <div className="teacher-profile">
      {/* Header Image */}
      <header className="teacher-header">
        <img
          src={teacherImage}
          alt="Hamdan Bin Khalid"
          className="teacher-image"
        />
      </header>

      {/* Teacher Info */}
      <section className="teacher-info">
        <h1 className="teacher-name">{teacher.name}</h1>
        <h3 className="teacher-subject">{teacher.subject}</h3>
        <p className="teacher-bio">{teacher.bio}</p>
      </section>

      {/* Video intro */}
      <section className="teacher-video">
        <h2 className="video-title">Introduction Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XC62pWvw4b0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      {/* Courses */}
      <section className="teacher-courses">
        <h2 className="courses-title">Courses</h2>
        <div className="course-grid">
          {teacher.courses.map((course) => (
            <div key={course.id} className="course-card">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <button className="book-button" onClick={() => handleBookClick(course)}>
                Book Session Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Book: {selectedCourse?.title}</h3>
            <p>
              Join the Zoom session using this link: <br />
              <a href="https://zoom.us/j/1234567890" target="_blank" rel="noopener noreferrer">
                https://zoom.us/j/1234567890
              </a>
            </p>
            <button className="close-modal" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="teacher-footer">
        © 2025 Teacher Profile. All rights reserved.
      </footer>
    </div>
  );
};

export default TeacherProfile;
