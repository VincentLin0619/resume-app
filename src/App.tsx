import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import TodoList from "./components/Todolist";

function App() {
  return (
    <Container className="App">
      <h1>RESUME APP</h1>
      <TodoList />
    </Container>
  );
}

export default App;
