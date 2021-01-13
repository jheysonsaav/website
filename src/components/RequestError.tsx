// Copyright (C) Jheyson Saavedra ~ All right reserved.
import Image from 'next/image';

interface RequestErrorProps {
  errrorTitle?: string;
  errorDescription?: string;
}

function RequestError(props: RequestErrorProps) {
  return (
    <div className="text-center">
      <Image src="/img/server_down.svg" width={450} height={450} />
      <h1 className="text-gray-800 font-semibold text-xl md:text-2xl dark:text-gray-100">
        {props.errrorTitle}
      </h1>
      <p className="text-gray-700 dark:text-gray-200">
        {props.errorDescription}
      </p>
    </div>
  );
}

export default RequestError;
