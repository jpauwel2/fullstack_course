const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Content = ({parts}) => (
  <div>
    {parts.map(part => <Part key={part.id} part={part}/>)}
  </div>
)

const Total = ({parts}) => (
  <p>total of {parts.reduce((total,part)=> total+part.exercises,0)} exercises</p>)

const Course = ({course}) => (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      <div/>
    </div>
)

export default Course