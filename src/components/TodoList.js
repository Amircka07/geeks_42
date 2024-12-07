import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Change, Delete } from "../redux/actions";

export const TodoList = ({ id }) => {
  const dispatch = useDispatch();
  const [rename, setRename] = useState("");
  const [edit, setEdit] = useState(false);

  const DELETE = () => {
    dispatch(Delete(id));
  };

  const CHANGE = () => {
    if (edit) {
      dispatch(Change({ id, text: rename }));
    }
    setEdit(!edit);
  };

  return (
    <div>
      <button onClick={DELETE}>Delete</button>
      {edit ? (
        <div>
          <input
            type="text"
            value={rename}
            onChange={(e) => setRename(e.target.value)}
          />
          <button onClick={CHANGE}>Save</button>
        </div>
      ) : (
        <button onClick={CHANGE}>Change</button>
      )}
    </div>
  );
};
