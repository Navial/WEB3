/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import Anecdote from "./anecdote";

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>
            <Anecdote anecdote={anecdote} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default AnecdoteList;
