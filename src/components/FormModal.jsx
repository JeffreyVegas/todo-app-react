import { useContext, useState } from "react";
import { AppContex } from "../context";

function FormModal({ open, setOpen }) {
  const { addTodo } = useContext(AppContex);

  const [text, setText] = useState("");

  return (
    <div className="absolute bg-gray-900 z-10 bg-opacity-50 w-screen h-screen flex justify-center items-center">
      <form className="bg-white w-72  opacity-100 rounded-md shadow-xl p-4">
        <h2 className="text-center mb-2">Create a new todo</h2>
        <textarea
          placeholder="como"
          className="w-full border rounded-md p-2"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="text-white bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 "
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 "
            onClick={() => {
              addTodo(text);
              setOpen(false);
            }}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormModal;
