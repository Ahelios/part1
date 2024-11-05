import { useState } from 'react';

function Header({ course }) {
	return <h1>{course.name}</h1>;
}

function Content({ course }) {
	return (
		<>
			<Part part={course.parts[0].name} numberOfExcersises={course.parts[0].excercises} />
			<Part part={course.parts[1].name} numberOfExcersises={course.parts[1].excercises} />
			<Part part={course.parts[2].name} numberOfExcersises={course.parts[2].excercises} />
		</>
	);
}

function Part({ part, numberOfExcersises }) {
	return (
		<p>
			{part} {numberOfExcersises}
		</p>
	);
}

function Total({ course }) {
	const sum = course.parts[0].excercises + course.parts[1].excercises + course.parts[2].excercises;

	return <p>Number of excercises {sum}</p>;
}

function App() {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{ 
        name: 'Fundamentals of React', 
        excercises: 10 
      },
			{ 
        name: 'Using props to pass data', 
        excercises: 7 
      },
			{ 
        name: 'State of a component', 
        excercises: 14 
      },
		],
	};

	return (
		<>
			<div>
				<Header course={course} />
				<Content course={course} />
				<Total course={course} />
			</div>
		</>
	);
}

export default App;
