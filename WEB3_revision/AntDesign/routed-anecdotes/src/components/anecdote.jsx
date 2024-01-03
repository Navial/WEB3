/* eslint-disable react/prop-types */
const Anecdote = ({ anecdote }) => {
  console.table(anecdote);
  return (
    <div>
      <p>
        {anecdote.content} by {anecdote.author}
      </p>
    </div>
  );
};

export default Anecdote;
