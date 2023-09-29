import {useState} from 'react'
import Button from "../Button/Button";
import Statistics from '../Statistics/Statistics';

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [sum, setSum] = useState(0);
    let total = good + bad + neutral;

    const stats = [
        {id:0, text: 'Good', value: good},
        {id:1, text: 'Neutral', value: neutral},
        {id:2, text: 'Bad', value: bad},
        {id:3, text: 'Total', value: total},
        {id:4, text: 'Sum', value: sum},
        {id:5, text: 'Average', value: sum/total},
        {id:6, text: 'Pos%', value: (good*100)/total},
    ];

    const handlerGoodButton = () => {
        setGood(good + 1);
        setSum(sum + 1);
    }
    
    const handlerNeutralButton = () => {
        setNeutral(neutral + 1);
    }

    const handlerBadButton = () => {
        setBad(bad + 1);
        setSum(sum - 1);
    }

    return(
        <div>
            <h1>Give your feedback</h1>
            <Button handleClick={handlerGoodButton} text="Good"/>
            <Button handleClick={handlerNeutralButton} text="Neutral"/>
            <Button handleClick={handlerBadButton}  text="Bad"/>
            <Statistics stats={stats}/>
        </div>
    );

}

export default App;