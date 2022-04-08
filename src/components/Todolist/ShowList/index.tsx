import React from "react";
import { Button, FormCheck, ListGroupItem, Stack } from "react-bootstrap";
import IList from "../../../interface";

type ListProps = {
  list: IList;
  key: number;
  deletList: (ListToDelet: string) => void;
};

const ShowList = ({ list, deletList }: ListProps) => {
  return (
    <ListGroupItem>
      <Stack direction="horizontal" gap={3}>
        <div>
          <FormCheck></FormCheck>
        </div>
        <div>{list.content}</div>
        <div className="ms-auto">{list.deadline}</div>
        <Button
          className=""
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
