import { useState } from "react";

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [winner, setWinner] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <div>
        <button onClick={ () => {
          const copy = [...points];
          copy[selected] += 1;
          
          let best = 0;
          let votes = 0;
          for(let idx = 0; idx < copy.length; ++idx) {
            if(copy[idx] > votes) {
              best = idx;
              votes = copy[idx];
            }
          }

          setWinner(best);
          setPoints(copy);
        }}>
          vote
        </button>
        <button onClick={ () => {
          const idx = Math.floor((Math.random()*(anecdotes.length)));
          setSelected(idx);
        }}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with the most votes</h2>
        <div>{anecdotes[winner]}</div>
        <div>has {points[winner]} votes</div>
      </div>
    </div>
  )
}

export default App
