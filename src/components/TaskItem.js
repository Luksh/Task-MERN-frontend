import { useDispatch } from "react-redux";

const TaskItem = ({ task }) => {
  return (
    <div className="task">
      <div>{new Date(task.createdAt).toLocaleString("en-US")}</div>
      <h2>{task.text}</h2>
    </div>
  );
};
export default TaskItem;
