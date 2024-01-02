import { useContext } from 'react';
import { Context as OpinionsContext } from "../contexts/opinionsContext.jsx";
import { useState } from 'react';

const AddOpinion = () => {

    const { addNewOpinion } = useContext(OpinionsContext)

    const [ newOpinion, setNewOpinion ] = useState("");


    const handleChange = (e) => {
        setNewOpinion(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewOpinion(newOpinion);
        setNewOpinion(""); // Optionnel, réinitialise le champ après l'ajout
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter new opinion : </label>
                <input type="text" value={newOpinion} onChange={handleChange}></input>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
export default AddOpinion;