import { useState } from 'react'

const Titel = props => <h1>{props.text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({category, score}) => {
return (
  <tr>
    <td>{category}</td> 
    <td>{score}</td>
  </tr>
)
}

const Statistics = ( {scores} ) => {
  const total = scores.reduce((total,num)=> total+num,0)
  const average = (scores[0] *1 + scores[2]*-1)/total
  const positive = scores[0]*1.0 / (total)
  if (total > 0){
    return (
        <table>
          <tbody>
          <StatisticLine category='good' score={scores[0]} />
          <StatisticLine category='neutral' score={scores[1]} />
          <StatisticLine category='bad' score={scores[2]} />
          <StatisticLine category='all' score={total} />
          <StatisticLine category='average' score={average} />
          <StatisticLine category='positive' score={`${positive*100} %`} />
          </tbody>
        </table>
      ) 
    }
  else {
    return <div>No feedback given</div>
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const scores = [good, neutral, bad]

  return (
    <div>
      <Titel text="give feedback" />
      <Button onClick={() => setGood(good+1)} text='good'/>
      <Button onClick={() => setNeutral(neutral+1)} text='neutral'/>
      <Button onClick={() => setBad(bad+1)} text='bad'/>
      <Titel text="statistics" />
      <Statistics scores={scores} />
    </div>
  )
}

export default App