import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Image } from "react-bootstrap";
import { fetchBook } from "../redux/actions";

export const Book = () => {
  const book = useSelector((state) => state.fiveReducer.book);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h2>Random Book</h2>
      <Button onClick={() => dispatch(fetchBook())}>Get Book</Button>
      {book && (
        <div className="mt-3">
          <h3>{book.title}</h3>
          {book.thumbnail && <Image src={book.thumbnail} fluid />}
          <p>
            <strong>Authors:</strong> {book.authors}
          </p>
          <p>
            <strong>Description:</strong> {book.description}
          </p>
        </div>
      )}
    </div>
  );
};
