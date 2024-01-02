import { useContext } from 'react';
import { Context as CountersContext } from "../contexts/countersContext.jsx";

const Ok = () => {
    const { ok, increaseOk } = useContext(CountersContext )

    return (
        <li>Ok : {ok} <button onClick={increaseOk}> Increase ok </button></li>
    )
}

export default Ok