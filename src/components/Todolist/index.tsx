import React, { ChangeEvent, FC, useState } from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import IList from "../../interface";
import ShowList from "./ShowList";

const TodoList: React.FC = () => {
  const [input, setInput] = useState("");
  const [deadline, setDeadline] = useState(new Date().toLocaleDateString());
  const [list, setList] = useState<IList[]>([]);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const btnHandler = () => {
    setInput("");
    const newList = {
      id: Date.now(),
      content: input,
      deadline: deadline,
    };
    setList(list.concat(newList));
    console.table(newList);
  };
  const deletList = (ListToDelet: string): void => {
    setList(
      list.filter((TodoList) => {
        return TodoList.content !== ListToDelet;
      })
    );
  };

  return (
    <>
      <h1>TodoList</h1>
      <InputGroup className="container p-3">
        <FormControl
          type="text"
          value={input}
          onChange={inputHandler}
          placeholder="輸入待辦事項"
        />
        <Button onClick={btnHandler} variant="primary">
          ADD
        </Button>
      </InputGroup>
      <Container className="showlist">
        {list.map((list: IList) => {
          return <ShowList key={list.id} list={list} deletList={deletList} />;
        })}
      </Container>
    </>
  );
};

export default TodoList;
