import { useState } from 'react';

function Header({course}) {
  return (
    <h1>{course}</h1>
  )
}

function Content({parts}){
  return (
    <>
    <Part part={parts[0].part} numberOfExcersises={parts[0].excercises}/>
    <Part part={parts[1].part} numberOfExcersises={parts[1].excercises}/>
    <Part part={parts[2].part} numberOfExcersises={parts[2].excercises}/>
    </>
  )
}

function Part({part, numberOfExcersises}){
  return(
    <p>
			{part} {numberOfExcersises}
		</p>
  )
}

function Total({excercises}){
  const sum = excercises.reduce((acc, curr) => acc + curr, 0);

  return(
    <p>Number of excercises ${sum}</p>
  )
}

function App() {
	const course = 'Half Stack application development';

  const parts = [
    {part:'Fundamentals of React', excercises: 10},
    {part:'Using props to pass data', excercises: 7},
    {part:'State of a component', excercises: 14}
  ]

	return (
		<>
			<div>
        <Header course={course}/>
				<Content parts={parts}/>
				<Total excercises={[parts[0].excercises, parts[1].excercises, parts[2].excercises]}/>
			</div>
		</>
	);
}

export default App;
