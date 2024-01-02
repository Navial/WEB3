// eslint-disable-next-line react/prop-types
const Person = ({ id, name, number, deletePerson }) => {

    return (
        <li key={id}>
            {id} : {name} : {number}  <button onClick={() => deletePerson(id)}>Delete</button></li>

    )
}


export default Person;
