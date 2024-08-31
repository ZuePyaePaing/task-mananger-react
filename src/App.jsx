import React, { useEffect, useState } from "react";
import TaskCreate from "./components/task-create";
import { Toaster } from "react-hot-toast";
import TaskNotes from "./components/tasks-notes";

const App = () => {
  const [taskNotes, setTestNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const tasksFetch = async () => {
    try {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      setTestNotes(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    tasksFetch();
  }, [taskNotes]);

  return (
    <section className=" bg-[#f0f0f0] w-full h-screen">
      <div className=" mx-auto max-w-5xl py-5">
        <TaskCreate />
        <TaskNotes taskNotes={taskNotes} isLoading={loading} />
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#1a1a1a",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </section>
  );
};

export default App;
