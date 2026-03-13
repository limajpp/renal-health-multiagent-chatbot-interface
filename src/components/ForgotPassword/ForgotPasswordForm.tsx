import Form from "../ui/Form";
import Header from "../ui/Header";
import FieldGroup from "../ui/FieldGroup";
import Button from "../ui/Button";
import Actions from "../ui/Actions";
import logo from "../../assets/renal-health-multiagent-chatbot-logo.png";
import { useRef } from "react";

export default function ForgotPasswordForm() {
  const emailRef = useRef<HTMLInputElement>(null);

  function handleRecoverPassword() {
    const email = emailRef.current?.value;

    console.log(email);
    // TODO: implement api calls later...
  }

  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <Form
        action=""
        // TODO: uncomment later... method="post"
        name="login"
        className="flex flex-col items-center bg-white rounded-2xl border-slate-200 shadow-xl w-[30vw] h-fit p-4 gap-4"
      >
        <Header
          containerClassName="flex flex-col items-center mt-2"
          logoSrc={logo}
          logoAlt="Kidney logo with digital circuit elements between two abstract human figures with speech bubbles, representing healthcare communication and technology."
          logoClassName="h-16 w-auto object-contain"
          title="Recuperar senha"
          subtitle="Formulário de recuperação de senha"
        />
        <FieldGroup
          emailRef={emailRef}
          containerClassName="flex flex-col gap-1 w-[90%]"
          labelClassName="font-semibold"
          labelText="E-mail"
          name="email"
          type="email"
          placeholder="exemplo@email.com"
          autoComplete="off"
          required
          className="p-2 rounded-lg border border-slate-300 focus:border-slate-500 focus:shadow-md focus:shadow-slate-300 outline-none"
        />
        <Button
          name="login"
          type="submit"
          onClick={handleRecoverPassword}
          className="w-[90%] p-2 mt-4 bg-slate-600 rounded-xl cursor-pointer hover:bg-slate-700 text-white font-black"
        >
          Enviar Link
        </Button>
        <Actions
          containerClassName="flex flex-col items-center mt-10 gap-10 w-full"
          mainText="Clique aqui para voltar para o login!"
          mainHref="/login"
        />
      </Form>
    </div>
  );
}
