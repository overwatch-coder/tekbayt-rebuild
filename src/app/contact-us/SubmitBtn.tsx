"use client";

import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

interface SubmitBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string;
  pendingText: string;
}
const SubmitBtn = ({
  buttonName,
  pendingText,
  className,
  ...props
}: SubmitBtnProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={`hover:scale-105 bg-blue-100 transition text-white hover:bg-gradient-conic py-3 px-5 rounded ${className}`}
      {...props}
    >
      {pending ? pendingText : buttonName}
    </button>
  );
};

export default SubmitBtn;
