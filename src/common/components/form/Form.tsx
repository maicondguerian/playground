/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";

export interface FormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  methods: UseFormReturn<any, any, undefined>;
}

export const Form = ({ methods, ...props }: FormProps) => {
  return (
    <FormProvider {...methods}>
      <form {...props} />
    </FormProvider>
  );
};
