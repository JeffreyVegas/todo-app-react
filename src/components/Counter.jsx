import { useContext } from "react";
import { AppContex } from "../context";

function Counter() {
  const { totalTodos, checkedTodos } = useContext(AppContex);
  return (
    <div>
      <p className=" text-center py-3 ">
        {checkedTodos} completed of {totalTodos}
      </p>
    </div>
  );
}

export default Counter;
