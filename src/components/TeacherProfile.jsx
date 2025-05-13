import React from "react";
import CourseCard from "./CourseCard";
import "../TeacherProfile.css"; 
import teacherImage from "./teacher.png";

const teacher = {
  name: "Hamdan Bin Khalid",
  subject: "Mathematics",
  bio: "Experienced high school math teacher with 10+ years of experience.",
  videoUrl: "https://www.youtube.com/embed/T5Qf0qSSJFI",
  courses: [
    { id: 1, title: "Algebra 101", description: "Intro to Algebra" },
    { id: 2, title: "Calculus Basics", description: "Learn derivatives and integrals" },
    { id: 3, title: "Geometry Mastery", description: "Understand shapes and angles" },
  ],
};

const TeacherProfile = () => {
  return (
    <div className="profile-container">
      <header>
      <img src={teacherImage} alt="Header Image" />

      </header>

      <div className="profile-header">
        <div className="profile-info">
          <h1>{teacher.name}</h1>
          <p>{teacher.subject}</p>
          <p>{teacher.bio}</p>
          <button className="book-button">Book a Session</button>
        </div>

        <div className="video-wrapper">
          <iframe
            className="video"
            src={teacher.videoUrl}
            title="Video intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div>
        <h2>Courses</h2>
        <div className="course-grid">
          {teacher.courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      <footer>
        <p>&copy; 2025 Teacher Profile. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TeacherProfile;
