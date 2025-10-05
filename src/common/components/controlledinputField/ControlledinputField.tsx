import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";

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
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
        />
      )}
    />
  );
};
