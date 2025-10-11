import { useForm } from "react-hook-form";
import { ControlledinputField } from "../../common/components/controlledinputField/ControlledinputField";
import { Form } from "../../common/components/form/Form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z.string().min(1, {
    message:
      "Informe um email ou número de celular válido.asadasdasdasdasdasdasdasd",
  }),
  password: z.string().min(4, {
    message: "A senha deve ter entre 4 e 60 caracteres.",
  }),
});

type LoginData = z.infer<typeof schema>;

export const Login = () => {
  const methods = useForm<LoginData>({
    defaultValues: { username: "", password: "" },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-4 p-8 border rounded w-[400px]">
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
