import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [good, addGood] = useState(0)
    const [ok, addOk] = useState(0)
    const [bad, addBad] = useState(0)

    const resetScores = () => {
        addGood(0)
        addOk(0)
        addBad(0)
    }

    const increaseGood = () => {
        addGood(good + 1)
    }

    const increaseOk = () => {
        addOk(ok + 1)
    }

    const increaseBad = () => {
        addBad(bad + 1)
    }
    const countersValues = {
        good,
        increaseGood,
        ok,
        increaseOk,
        bad,
        increaseBad,
        resetScores
    }
    
    return <Context.Provider value={countersValues}>
        {/* eslint-disable-next-line react/prop-types*/}
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}    
