import classNames from "classnames";
import Navbar from "./Navbar";

export default function Layout({ children, className }) {
  return (
    <div
      data-theme="cupcake"
      className={classNames(
        "w-full min-h-screen p-10 bg-base-200 font-josefin text-base-content",
        className
      )}
    >
      <Navbar />
      {children}
    </div>
  );
}
