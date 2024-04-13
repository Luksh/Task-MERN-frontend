import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task">
      …
      <button onClick={() => dispatch(deleteTask(task._id))} className="close">
        X
      </button>
    </div>
  );
};
