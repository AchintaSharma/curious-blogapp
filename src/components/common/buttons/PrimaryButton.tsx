import React from "react";

type Btn = {
  children: any;
};
const PrimaryButton: React.FC<Btn> = ({ children }) => (
  <button
    type="button"
    className=" bg-SpaceCadet hover:bg-PurpleNavy text-white px-4 py-2 rounded-xl w-full h-fit"
  >
    {children}
  </button>
);

export default PrimaryButton;
