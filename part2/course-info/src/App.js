
const Course = ({course}) => {
  const total = 
    course.parts.reduce((sum, {exercises}) => (sum + exercises), 0);

  return (
    <div key={course.id}>
      <h1>{course.name}</h1>
      {course.parts.map(({id, name, exercises}) =>
        <div key={id}>
          <p>{name} {exercises}</p>
        </div>
      )}
      <b>total of {total} exercises</b>
    </div>
  )
};

const App = () => {
  const courses = [
    {
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <div>
      {courses.map( (course) => <Course course={course}/> )}
    </div>
  )
}

export default App