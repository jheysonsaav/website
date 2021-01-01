import React from "react";
import TaskBarLeft from "@/components/molecules/TaskBarLeft";
import {TaskBarContainner} from "@/styles/organisms/TaskBar";

function TaskBar(): JSX.Element {
  return (
    <TaskBarContainner>
      <TaskBarLeft />
    </TaskBarContainner>
  )
}

export default TaskBar;
