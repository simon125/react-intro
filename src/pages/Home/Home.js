import React, { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import { Modal } from "../../components/Modal";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterBy, setFilterBy] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  useEffect(() => {
    console.log("Montuje component Home");
    console.log(filterBy);
    const url =
      filterBy === ""
        ? "http://localhost:4000/posts"
        : `http://localhost:4000/posts?status=${filterBy}`;

    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      console.log("Odmontowywuje component Home");
    };
  }, [filterBy]);
  // tablica zależności - w zależności od tego co jest w tej tablicy - jeżeli wartość któregoś elementu
  // się zmieni spowoduje to wywołanie funkcji z pierwszego parametru useEffect

  const handleChange = () => {
    setIsModalOpen(!isModalOpen);
  };

  console.log("Home się renderuje");
  return (
    <div>
      <input type="checkbox" checked={isModalOpen} onChange={handleChange} />
      {isModalOpen && (
        <Modal>
          <h1>Cześć grupo 15 :)</h1>
          <input
            type="checkbox"
            checked={isModalOpen}
            onChange={handleChange}
          />
        </Modal>
      )}
      <h1>Aplikacja na Twoje zadania</h1>
      <p>Z nią już nigdy nie zapomnisz co masz zrobić</p>
      <p>
        Dodatkowo możesz zawsze sprawdzić statystyki obecnego stanu wyknonanych
        zadań
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 50,
          marginBottom: 50,
        }}
      >
        <label>
          All{" "}
          <input
            checked={filterBy === ""}
            type="radio"
            name="filters"
            value=""
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Todo{" "}
          <input
            checked={filterBy === "todo"}
            type="radio"
            name="filters"
            value="todo"
            onChange={handleFilterChange}
          />
        </label>

        <label>
          Done{" "}
          <input
            checked={filterBy === "done"}
            type="radio"
            name="filters"
            value="done"
            onChange={handleFilterChange}
          />
        </label>
      </div>
      {isLoading ? (
        <Circles height="80" width="80" color="#4fa94d" />
      ) : (
        <>
          {posts.map((post) => (
            <p key={post.id}>
              Tytuł: {post.title} Status: {post.status}
            </p>
          ))}
        </>
      )}
    </div>
  );
};
