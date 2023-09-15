const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  );
};

const Part = (props) => {
  return(
    <p>{props.text} {props.nbEx}</p>
  );
}

const Content = (props) => {
  console.log(...props.parts[0].part);
  return (
      <div>      
        <Part text={props.parts[0].part} nbEx={props.parts[0].exercises}/>
        <Part text={props.parts[1].part} nbEx={props.parts[1].exercises}/>
        <Part text={props.parts[2].part} nbEx={props.parts[2].exercises}/>
      </div>
  );
};

const Total = (props) => {
  return <p>Total : {props.value}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  
  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
  ];

  return (
    <div>
      <Header title={course}/>
      <Content parts={parts}/>
      <Total value={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  );
};

export default App;
