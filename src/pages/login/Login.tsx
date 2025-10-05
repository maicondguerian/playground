import { useForm } from "react-hook-form";
import { ControlledinputField } from "../../common/components/controlledinputField/ControlledinputField";
import { Form } from "../../common/components/form/Form";

export const Login = () => {
  const methods = useForm({
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = (data: { username: string; password: string }) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-4 p-8 border rounded">
        <Form onSubmit={methods.handleSubmit(onSubmit)} methods={methods}>
          <ControlledinputField
            name="username"
            placeholder="Username"
            methods={methods}
          />

          <ControlledinputField
            name="password"
            placeholder="Password"
            type="password"
            methods={methods}
          />
          <button type="submit">Login</button>
        </Form>
      </div>
    </div>
  );
};
