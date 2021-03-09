import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface IconProps {
  name: string;
  style: "outline" | "solid";
  size?:
    | 0
    | 0.5
    | 1
    | 1.5
    | 2
    | 2.5
    | 3.5
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 14
    | 16
    | 20
    | 24
    | 28
    | 32
    | 36
    | 40
    | "auto";
}

function Icon(props: IconProps): JSX.Element {
  const [iconContent, setIconContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/icons/${props.style}/${props.name}.svg`)
      .then((res: AxiosResponse) => {
        setIconContent(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIconContent(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`);
        setIsLoading(false);
      });
  });

  return isLoading ? (
    <i>
      <svg
        className={`animate-spin cursor-wait w-${props.size || "6"} h-${
          props.size || "6"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    </i>
  ) : (
    <i
      dangerouslySetInnerHTML={{ __html: iconContent }}
      className={`w-${props.size || "6"} h-${props.size || "6"}`}
    />
  );
}

export default Icon;
