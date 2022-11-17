import { useContext } from "react";
import { AppContex } from "../context";

function List() {
  const { checkTodo, deleteTodo, searchedTodos, searchValue } =
    useContext(AppContex);

  if (searchedTodos.length === 0 && searchValue.length > 0) {
    return <p className="text-center">no match</p>;
  }

  if (searchedTodos.length === 0)
    return <p className="text-center">create a todo</p>;

  return (
    <div className="flex justify-center ">
      <ul className=" w-96">
        {searchedTodos.map((el, index) => (
          <li className="p-3 flex gap-2 " key={index}>
            <div>
              <div
                className="w-6 h-6 cursor-pointer border border-gray-400 rounded "
                onClick={() => checkTodo(el.todo)}
              >
                {el.completed === false ? (
                  <></>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div>
              <p
                className={` p-0 ${
                  el.completed === true ? "line-through text-gray-600" : ""
                }`}
              >
                {el.todo}
              </p>
            </div>
            <div>
              <button
                className="cursor-pointer"
                onClick={() => deleteTodo(el.todo)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
