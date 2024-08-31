import { useState } from "react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { Circles } from "react-loader-spinner";
import SkeletonLoading from "./skeleton-loading";
const TaskItem = ({ id, title, completed, dueDate }) => {
  const [loading, setLoading] = useState(false);
  const handleDoneTask = async (taskId) => {
    setLoading(true);
    const res = await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });
    setLoading(false);
    toast.success("Done.");
  };
  const handleDelete = async (taskId) => {
    setLoading(true);
    const res = await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);
    toast.success("Task is delete.");
  };
  return (
    <>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <div className="flex items-center justify-between shadow-md px-3 py-2">
          <div className=" flex gap-x-3">
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
              <input
                type="checkbox"
                onClick={() => handleDoneTask(id)}
                checked={completed}
              />
            )}
            <h2
              className={` font-semibold text-md capitalize ${
                completed && "line-through"
              }`}
            >
              {title}
            </h2>
            <p className=" text-[#333333]">
              {new Date(dueDate).toLocaleDateString("en-US")}
            </p>
          </div>
          <button
            className=" w-fit p-2 bg-[#071a52] rounded-md hover:opacity-80 duration-200"
            onClick={() => handleDelete(id)}
          >
            <Trash2 className=" text-[#e41749]" />
          </button>
        </div>
      )}
    </>
  );
};

export default TaskItem;
