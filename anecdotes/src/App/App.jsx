import { useState } from 'react';
import styles from './App.module.css'

function Button({handler, text}){
  return(
    <button onClick={handler}>{text}</button>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voteCounter, setVoteCounter] = useState([0,0,0,0,0,0,0,0])
  const [mostVoted, setMostVoted] = useState(null)

  function handleSetSelected(){
    let randomIndex = Math.floor(Math.random() * anecdotes.length);

    setSelected(randomIndex);
    console.log(randomIndex)

    
  }

  function handleVote() {
    const newVoteCounter = [...voteCounter];
    newVoteCounter[selected] += 1;
    setVoteCounter(newVoteCounter);

    const maxVotes = Math.max(...newVoteCounter);
    const maxVotesIndex = newVoteCounter.indexOf(maxVotes);
    setMostVoted(maxVotesIndex);
  }

  console.log(voteCounter)

  return (
    <div className={styles.mainBox}>
        {anecdotes[selected]}
        <p>has {voteCounter[selected]} votes</p>
      <div>
        <Button handler={handleVote} text={'Vote'}/>
        <Button handler={handleSetSelected} text={'Next anecdote'}/>
      </div>
      {mostVoted !== null &&
        <>
          {anecdotes[mostVoted]}
          <p>has {voteCounter[mostVoted]} votes</p>
        </>
      }
    </div>
  )
}

export default App
