import React, { useState } from "react";
import { SendHorizonal, Send, Flag } from "lucide-react"; // Ensure both icons are imported
import toast from "react-hot-toast";
import { Circles } from "react-loader-spinner";

const TaskCreate = () => {
  const [note, setNote] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleTaskCreate = async (e) => {
    e.preventDefault();
    if (!note.trim()) {
      setError("Note cannot be empty.");
      return;
    }
    setLoading(true);
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: note,
        dueDate: Date.now(),
        completed: false,
      }),
    });
    const data = await res.json();
    toast.success("New task created.");
    setNote("");
    setLoading(false);
  };

  return (
    <section className="">
      <h1 className=" font-bold text-2xl">Tasks Mananger</h1>
      <form
        onSubmit={handleTaskCreate}
        className="flex items-center justify-between space-x-4 my-4 p-4 rounded-lg shadow-sm"
      >
        <input
          type="text"
          placeholder="Tasks note"
          className="w-full  border-none outline-none  rounded-md bg-transparent "
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
        {loading ? (
          <Circles
            height="20"
            width="20"
            color="#022701"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <button
            type="submit"
            disabled={!note}
            className={`bg-[#071a52] text-white p-2 rounded-full hover:bg-[#142944] transition-colors duration-200`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered ? (
              <Send className="w-5 h-5" />
            ) : (
              <SendHorizonal className="w-5 h-5" />
            )}
          </button>
        )}
      </form>
    </section>
  );
};

export default TaskCreate;
