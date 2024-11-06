import { useState } from 'react';

function Header({ text }) {
	return <h1>{text}</h1>;
}

function Feedback({ handleSetBad, handleSetGood, handleSetNeutral }) {
	return (
		<div>
			<Button name="Good" handler={handleSetGood} />
			<Button name="Bad" handler={handleSetBad} />
			<Button name="Neutral" handler={handleSetNeutral} />
		</div>
	);
}

function Button({ name, handler }) {
	return <button onClick={handler}>{name}</button>;
}

function Statistics({
	valueGood,
	valueBad,
	valueNeutral,
	valueAll,
	valueAverage,
	valuePositive
}) {
  if(valueAll === 0){
    return <p>No feedback given</p>
  }

	return (
		<table>
			<tbody>
          <>
            <StatisticLine text="good" value={valueGood} />
            <StatisticLine text="neutral" value={valueNeutral} />
            <StatisticLine text="bad" value={valueBad} />
            <StatisticLine text="all" value={valueAll} />
            <StatisticLine text="average" value={valueAverage} />
            <StatisticLine text="positive" value={valuePositive} />
          </>
			</tbody>
		</table>
	);
}

function StatisticLine({ text, value }) {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
}

function formatAsPercentage(num) {
  return new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 2,
    // maximumFractionDigits: 2,
  }).format(num);
}

function App() {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const all = good + neutral + bad;
	const average = formatAsPercentage((good - bad) / all);
	const positive = formatAsPercentage(good/all);
  
  function handleSetGood() {
		setGood(good + 1);
	};

	function handleSetNeutral() {
		setNeutral(neutral + 1);
	}

	function handleSetBad() {
		setBad(bad + 1);
	}

	return (
		<div>
			<Header text={'Give feedback'} />
			<Feedback
				handleSetGood={handleSetGood}
				handleSetBad={handleSetBad}
				handleSetNeutral={handleSetNeutral}
			/>
			<Header text={'Statistics'} />
			<Statistics valueGood={good} valueBad={bad} valueNeutral={neutral} valueAll={all} valueAverage={average} valuePositive={positive}/>
		</div>
	);
}

export default App;
