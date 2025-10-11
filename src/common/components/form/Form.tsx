import { FormProvider } from "react-hook-form";
import type { FieldValues, UseFormReturn } from "react-hook-form";

export interface FormProps<T extends FieldValues = FieldValues>
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  methods: UseFormReturn<T>;
}

export const Form = <T extends FieldValues = FieldValues>({ methods, ...props }: FormProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form {...props} />
    </FormProvider>
  );
};

  