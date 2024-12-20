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
      {book &&
        book.map((bok, a) => (
          <div key={a}>
            <h3>{bok.volumeInfo.title}</h3>
            <Image src={bok.volumeInfo.imageLinks.thumbnail} />
          </div>
        ))}
    </div>
  );
};
