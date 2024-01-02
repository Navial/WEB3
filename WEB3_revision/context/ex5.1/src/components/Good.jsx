import { useContext } from 'react';
import { Context as CountersContext } from "../contexts/countersContext.jsx";

const Good = () => {
    const { good, increaseGood } = useContext(CountersContext )

    return (
        <li>Good : {good} <button onClick={increaseGood}> Increase good </button></li>
    )
}

export default Good