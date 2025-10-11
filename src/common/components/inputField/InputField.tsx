import type { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>;

export const InputField = ({ ...props }: InputFieldProps) => {
  return <input {...props} />;
};
