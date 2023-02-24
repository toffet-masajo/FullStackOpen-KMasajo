const Course = ({course}) => {
  const total = 
    course.parts.reduce((sum, item) => (sum + item.exercises), 0);

  return (
    <div key={course.id}>
      <h2>{course.name}</h2>
      {course.parts.map((part) =>
        <div key={part.id}>
        <p>{part.name} {part.exercises}</p>
        </div>
      )}
      <b>total of {total} exercises</b>
    </div>
  )
};

export default Course  