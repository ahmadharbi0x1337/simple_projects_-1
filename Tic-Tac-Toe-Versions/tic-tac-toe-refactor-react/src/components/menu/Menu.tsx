import { useState } from "react";
import "./Menu.css";

type Props = {
  onAction(action: "reset" | "new-round"): void;
};

export default function Menu({ onAction }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="menu">
      <button className="menu-btn" onClick={() => setMenuOpen((prev) => !prev)}>
        Actions
        {menuOpen ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </button>

      {menuOpen && (
        <div className="items border">
          <button onClick={() => onAction("reset")}>Reset</button>
          <button onClick={() => onAction("new-round")}>New Round</button>
        </div>
      )}
    </div>
  );
}
