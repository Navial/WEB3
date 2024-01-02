import { useContext } from 'react';
import { Context as CountersContext } from "../contexts/countersContext.jsx";

const Bad = () => {
    const { bad, increaseBad } = useContext(CountersContext )

    return (
        <li>Bad : {bad} <button onClick={increaseBad}> Increase bad </button></li>
    )
}

export default Bad