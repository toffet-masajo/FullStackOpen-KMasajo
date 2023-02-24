
const Course = ({course}) => {
  const total = 
    course.parts.reduce((sum, item) => (sum + item.exercises), 0);

  return (
    <div key={course.id}>
      <h1>{course.name}</h1>
      {course.parts.map((part) =>
        (<div key={part.id}>
          <p>{part.name} {part.exercises}</p>
        </div>)
      )}
      <strong><p>total of {total} exercises</p></strong>
    </div>
  )
};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  };

  return <Course course={course} />
}

export default App