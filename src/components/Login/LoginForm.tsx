import Form from "../ui/Form";
import FieldGroup from "../ui/FieldGroup";
import Header from "../ui/Header";
import Button from "../ui/Button";
import Actions from "../ui/Actions";
import logo from "../../assets/renal-health-multiagent-chatbot-logo.png";
import { useRef } from "react";
import users from "../../mocks/userMock";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [signIn, setSignIn] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const emailRef = useRef<HTMLInputElement>(null),
    passwordRef = useRef<HTMLInputElement>(null);

  function handleLogin(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    setSignIn("loading");

    setTimeout(() => {
      const email = emailRef.current?.value,
        password = passwordRef.current?.value;
      const emptyFields = email?.trim() === "" && password?.trim() === "";
      const userExists =
        (email === users[0].email && password === users[0].password) ||
        (email === users[1].email && password === users[1].password) ||
        (email === users[2].email && password === users[2].password);

      const userName = users.find((u) => u.email === email)?.name;
      if (userName) login(userName);

      if (userExists && !emptyFields) {
        setSignIn("success");
        setTimeout(() => {
          navigate("/agent-selection");
        }, 1500);
        return;
      }
      if (!userExists && !emptyFields) {
        setSignIn("error");
        return;
      }
    }, 3000);

    // TODO: implement api calls later...
  }

  let signInMessage;
  if (signIn === "success")
    signInMessage = (
      <p className="font-black text-green-500 text-center">
        User authorized! Logging in...
      </p>
    );
  if (signIn === "error")
    signInMessage = (
      <p className="font-black text-red-500 text-center">
        Invalid credentials... Please try again!
      </p>
    );

  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <Form
        action=""
        // TODO: uncomment later... method="post"
        name="login"
        className="flex flex-col items-center bg-white rounded-2xl border-slate-200 shadow-xl w-[30vw] h-[65vh] gap-4"
      >
        <Header
          containerClassName="flex flex-col items-center mt-2"
          logoSrc={logo}
          logoAlt="Kidney logo with digital circuit elements between two abstract human figures with speech bubbles, representing healthcare communication and technology."
          logoClassName="h-[15vh] w-[15vw]"
          title="Renal Health Multiagent Chatbot"
          subtitle="Formulário de Login"
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
        <FieldGroup
          passwordRef={passwordRef}
          containerClassName="flex flex-col gap-1 w-[90%]"
          labelClassName="font-semibold"
          enablePasswordToggle
          labelText="Senha"
          name="password"
          type="password"
          placeholder="Ex: SenhaForte123!@#"
          autoComplete="off"
          required
          className="w-full relative z-0 p-2 rounded-lg border border-slate-300 focus:border-slate-500 focus:shadow-md focus:shadow-slate-300 outline-none"
        />
        <Button
          name="login"
          type="submit"
          onClick={(event) => handleLogin(event)}
          className="w-[90%] p-2 mt-4 bg-slate-600 rounded-xl cursor-pointer hover:bg-slate-700 text-white font-black"
        >
          Entrar
        </Button>
        {signInMessage}
        <Actions
          containerClassName="flex flex-col items-center mt-4 gap-10 w-full"
          mainText="Esqueceu a senha?"
          mainHref="/forgot-password"
          subText="Não possui conta?"
          subLinkText="Cadastre-se aqui!"
          subHref="/register"
        />
      </Form>
    </div>
  );
}
