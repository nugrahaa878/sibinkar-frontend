import React from "react";

interface Props {
  children: React.ReactNode;
}

const DefaultContainer = ({ children }: Props) => {
  return (
    <div className="py-16 px-16 w-full flex flex-col items-center">
      {children}
    </div>
  );
};

export default DefaultContainer;
