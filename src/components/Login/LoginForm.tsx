import Form from "../ui/Form";
import FieldGroup from "../ui/FieldGroup";
import LoginHeader from "./LoginHeader";
import LoginActions from "./LoginActions";
import logo from "../../assets/renal-health-multiagent-chatbot-logo.png";

export default function LoginForm() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <Form
        action=""
        method="post"
        name="login"
        className="flex flex-col items-center bg-white rounded-2xl border-slate-200 shadow-xl w-[30vw] h-[60vh] gap-4"
      >
        <LoginHeader
          className="flex flex-col items-center mt-2"
          logoSrc={logo}
          logoAlt="Kidney logo with digital circuit elements between two abstract human figures with speech bubbles, representing healthcare communication and technology."
          logoClassName="h-[15vh] w-[15vw]"
          title="Renal Health Multiagent Chatbot"
          subtitle="Formulário de Login"
        />
        <FieldGroup
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
        <FieldGroup
          containerClassName="flex flex-col gap-1 w-[90%]"
          labelClassName="font-semibold"
          labelText="Senha"
          name="password"
          type="password"
          placeholder="Ex: SenhaForte123!@#"
          autoComplete="off"
          required
          className="p-2 rounded-lg border border-slate-300 focus:border-slate-500 focus:shadow-md focus:shadow-slate-300 outline-none"
        />
        <LoginActions
          className="flex flex-col items-center mt-4 gap-10 w-full"
          buttonClassName="w-[90%] p-2 bg-slate-600 rounded-xl cursor-pointer hover:bg-slate-700 text-white font-black"
          buttonText="Entrar"
          forgotPasswordText="Esqueceu a senha?"
          forgotPasswordHref=""
          registerPrompt="Não possui conta?"
          registerText="Cadastre-se aqui!"
          registerHref=""
        />
      </Form>
    </div>
  );
}
