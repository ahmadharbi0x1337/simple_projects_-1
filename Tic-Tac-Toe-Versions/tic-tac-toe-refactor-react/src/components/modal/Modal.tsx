import "./Modal.css";

type Props = {
  message: string;
  onceClicked(): void;
};

export default function Modal({ message, onceClicked }: Props) {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <p>{message}</p>
          <button onClick={onceClicked}>Play Again</button>
        </div>
      </div>
    </>
  );
}
