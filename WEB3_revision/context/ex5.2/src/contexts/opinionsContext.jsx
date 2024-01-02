import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const baseOpinions = [
        {   
            id: 1,
            label : "Opinion 1",
            votes : 2
        },
        {
            id: 2,
            label : "Opinion 2",
            votes : 7
        },
        {
            id: 3,
            label : "Opinion 3",
            votes : 0
        }
    ]

    const [opinions, addOpinion] = useState(baseOpinions)

    const addVote = (id) => {
        const newOpinions = opinions.map(opinion => {
            if(opinion.id === id){
                return {...opinion, votes : opinion.votes + 1}
            }
            return opinion
        })
        newOpinions.sort((a, b) => b.votes - a.votes);

        addOpinion(newOpinions)
    }

    const addNewOpinion = (label) => {
        addOpinion([...opinions, { id: uuid() ,label, votes : 1 }])
    }

    const opinionsValues = {
        opinions,
        addVote,
        addNewOpinion
    }
    
    return <Context.Provider value={opinionsValues}>
        {/* eslint-disable-next-line react/prop-types*/}
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}    
