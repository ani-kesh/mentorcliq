import { lds } from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={lds}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
