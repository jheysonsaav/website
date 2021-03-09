import Icon from "@/components/atoms/icon";
import Button from "@/components/atoms/button";
import { useState } from "react";

interface AlertProps {
  color?:
    | "blue"
    | "green"
    | "red"
    | "yellow"
    | "orange"
    | "indigo"
    | "purple"
    | "pink"
    | "rose"
    | "fuchsia"
    | "cyan";
  children?: React.ReactNode;
}

function Alert(props: AlertProps) {
  const [alertOpen, setAlertOpen] = useState(true);

  return alertOpen ? (
    <div
      className={`flex justify-between space-x-2 items-center bottom-3 inset-x-3 lg:left-3 lg:right-auto w-auto p-1 lg:p-2 bg-${
        props.color || "blue"
      }-500 fixed rounded lg:rounded-md text-gray-200 border-b-4 border-${
        props.color || "blue"
      }-300 border-opacity-75`}
    >
      {props.children || <span className="italic">No content</span>}
      <Button
        className="text-gray-200 lg:hidden"
        onClick={() => setAlertOpen(false)}
      >
        <Icon name="x-circle" style="outline" size={6} />
      </Button>
      <Button
        className="text-gray-200 hidden lg:inline-flex"
        onClick={() => setAlertOpen(false)}
      >
        <Icon name="x-circle" style="solid" size={5} />
      </Button>
    </div>
  ) : (
    <div></div>
  );
}

export default Alert;
