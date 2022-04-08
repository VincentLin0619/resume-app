import React, { useState } from "react";
import { Button, Form, ListGroupItem, Stack } from "react-bootstrap";
import IList from "../../../interface";
import "./index.css";

type ListProps = {
  list: IList;
  key: number;
  deletList: (ListToDelet: string) => void;
};

const ShowList = ({ list, deletList }: ListProps) => {
  const [status, setStatus] = useState(false);
  const statusHandler = () => {
    setStatus(!status);
  };
  return (
    <ListGroupItem>
      <Stack direction="horizontal" gap={3} className={status ? "done" : ""}>
        <Form.Check
          type="checkbox"
          onClick={statusHandler}
          defaultChecked={status}
        />

        <div>{list.content}</div>
        <div className="ms-auto">{list.deadline}</div>
        <Button
          variant="outline-danger"
          onClick={() => {
            deletList(list.content);
          }}
        >
          X
        </Button>
      </Stack>
    </ListGroupItem>
  );
};
export default ShowList;
