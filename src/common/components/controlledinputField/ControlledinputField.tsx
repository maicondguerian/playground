import { CircleX } from "lucide-react";
import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import { InputField } from "../inputField";

type ControlledinputFieldTypes<T extends FieldValues = FieldValues> = {
  name: Path<T>;
  type?: string;
  placeholder?: string;
  methods: UseFormReturn<T>;
};

export const ControlledinputField = <T extends FieldValues = FieldValues>({
  name,
  type,
  placeholder,
  methods,
}: ControlledinputFieldTypes<T>) => {
  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ fieldState }) => (
        <>
          <InputField
            type={type}
            name={name}
            placeholder={placeholder}
            className={fieldState.error && "border-red-500"}
          />
          {fieldState.error && (
            <div className="flex gap-2 text-red-500 items-center">
              <CircleX className="flex-shrink-0 w-5 h-5" />
              {fieldState.error.message}
            </div>
          )}
        </>
      )}
    />
  );
};
