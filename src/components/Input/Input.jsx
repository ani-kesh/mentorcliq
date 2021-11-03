import { input,span } from "./Input.module.css";

export default function Input({ type, required,label,onChange }) {
  return (
    <>
      <input type={type} className={input} onChange={onChange} required={required} />
      <span className={span}>{label}</span>
    </>
  );
}
