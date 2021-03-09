import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

function Button(props: ButtonProps): JSX.Element {
  return (
    <>
      <button
        {...props}
        className={`inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-black-700 dark:focus:bg-black-700 transition duration-150 ease-in-out ${props.className}`}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
