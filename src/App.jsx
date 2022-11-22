import { useContext, useState } from "react";
import Search from "./components/Search";
import Counter from "./components/Counter";
import List from "./components/List";
import FormModal from "./components/FormModal";
import { AppContex } from "./context";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const { searchedTodos, addTodp } = useContext(AppContex);
  return (
    <div className="relative font-ubuntu">
      {openModal && <FormModal open={openModal} setOpen={setOpenModal} />}
      <div className="xl:container mx-auto relative">
        <div className=" flex justify-between sm:justify-around p-4 sm:p-8 items-center">
          <h1 className="text-3xl font-bold ">TODO</h1>
          <div className=" hidden sm:block">
            <Search />
          </div>
          <div className="  ">
            <button
              className="p-3 rounded-full border shadow-md"
              onClick={() => setOpenModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.9"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="sm:hidden px-4 pb-4">
          <Search />
        </div>
        <Counter />
        <List />
      </div>
    </div>
  );
}

export default App;
