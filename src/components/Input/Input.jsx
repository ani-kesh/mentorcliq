import { input, span ,errorMessage} from "./Input.module.css";

export default function Input({ type, required, label, onChange ,isValid,message}) {
  return (
    <>
      <input
        type={type}
        className={input}
        onChange={onChange}
        required={required}
      />
      <span className={span}>{label}</span>
      {!isValid && <p className={errorMessage}>{message}</p>}
    </>
  );
}
