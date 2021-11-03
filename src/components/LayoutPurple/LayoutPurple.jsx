import { section, box, container } from "./LayoutPurple.module.css";

export default function LayoutPurple({ children }) {
  return (
    <>
      <section className={section}>
        <div className={box}>
          <div className={container}>{children}</div>
        </div>
      </section>
    </>
  );
}
