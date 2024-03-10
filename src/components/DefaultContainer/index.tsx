import React from "react";

interface Props {
  children: React.ReactNode;
}

const DefaultContainer = ({ children }: Props) => {
  return (
    <div className="pt-16 px-24 w-full flex flex-col items-center">
      {children}
    </div>
  );
};

export default DefaultContainer;
