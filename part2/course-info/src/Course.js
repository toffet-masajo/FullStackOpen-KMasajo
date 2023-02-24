const Course = ({course}) => {
  const total = 
    course.parts.reduce((sum, item) => (sum + item.exercises), 0);

  return (
    <div key={course.id}>
      <h1>{course.name}</h1>
      {course.parts.map((part) =>
        <div key={part.id}>
        <p>{part.name} {part.exercises}</p>
        </div>
      )}
      <strong><p>total of {total} exercises</p></strong>
    </div>
  )
};

export default Course  