/* eslint-disable react/prop-types */
import { Link, Routes, Route, useMatch } from "react-router-dom";

import AnecdoteList from "./anecdoteList";
import About from "./about";
import CreateNew from "./createNew";
import Anecdote from "./anecdote";

const Menu = ({ anecdotes, addNew, setNotification }) => {
  const padding = {
    paddingRight: 5,
  };

  const match = useMatch("/anecdotes/:id");
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : null;

  return (
    <>
      <div>
        <Link to="/" style={padding}>
          | Anecdotes
        </Link>
        <Link to="/create" style={padding}>
          | Create new
        </Link>
        <Link to="/about" style={padding}>
          | About
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/create"
          element={
            <CreateNew addNew={addNew} setNotification={setNotification} />
          }
        />
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={anecdote} />}
        />
      </Routes>
    </>
  );
};

export default Menu;
