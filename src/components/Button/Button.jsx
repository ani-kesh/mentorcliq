import { input, button } from "./Button.module.css";

export default function Button({ label, onClick }) {
  return (
    <>
      <button
        type="button"
        className={`${input} ${button}`}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
}
