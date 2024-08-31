import React from "react";
import TaskItem from "./task-item";
import SkeletonLoading from "./skeleton-loading";

const TaskNotes = ({ taskNotes, isLoading }) => {
  const doneTask = taskNotes.filter((el) => el.completed === true);
  return (
    <section className=" flex flex-col">
      <div className=" flex gap-x-3">
        <p className=" font-semibold text-[18px]">Total : {taskNotes.length}</p>
        <p className=" font-semibold text-[18px]">Done : {doneTask.length}</p>
      </div>
      {taskNotes.length === 0 && <p> Task note empty!</p>}
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <div className=" flex  flex-col gap-y-3 w-full">
          {taskNotes?.map((note) => (
            <TaskItem key={note.id} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TaskNotes;
