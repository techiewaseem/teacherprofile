const CourseCard = ({ course }) => {
    return (
      <div className="bg-gray-50 p-4 rounded shadow hover:shadow-md transition">
        <h3 className="font-bold text-lg">{course.title}</h3>
        <p className="text-sm text-gray-600">{course.description}</p>
      </div>
    );
  };
  
  export default CourseCard;
  