import { useContext } from 'react';
import { Context as OpinionsContext } from "../contexts/opinionsContext.jsx";

const Opinions = () => {

    const { opinions, addVote } = useContext(OpinionsContext)

    return (
        <div>
            <h1>Opinions</h1>
            <ul>
                {opinions.map(opinion => 
                <li key={opinion.id}>{opinion.label} : {opinion.votes}
                    <button onClick={() => addVote(opinion.id)}>Vote</button>
                </li>)}
            </ul>
        </div>
    );
}

export default Opinions;