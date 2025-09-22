import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { FormEvent } from "react";
import Form from "./Form/Form";
import * as requests from "../utils/requests";

export default function LoginForm() {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState<"login" | "create">("login");
  const [modalTitle, setModalTitle] = useState("Sign in to your account!");
  const [buttonTitle, setButtonTitle] = useState("Sign In");
  const [modalSubtitle, setModalSubtitle] = useState("Don't have an account? Sign up!");
  const [error, setError] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);

  const handleSuccess = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      const user = await requests.postUser(modalType, data);
      setErrorStatus(false);
      requests.setToken(user.token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home');
    } catch (error: any) {
      console.log(error);
      setErrorStatus(true);
      setError(error.response.data.message);
    }
  }

  const handleChangeForm = (e: FormEvent) => {
    e.preventDefault();
    if (modalType === "login") {
      setModalType("create");
      setModalTitle("Create your account!");
      setModalSubtitle("Already have an account? Sign in!");
      setButtonTitle("Sign Up");
    } else {
      setModalType("login");
      setModalTitle("Sign in to your account!");
      setModalSubtitle("Don't have an account? Sign up!");
      setButtonTitle("Sign In");
    }
  }

  return(
    <Dialog.Root open>
      <Dialog.Content className="flex flex-col bg-[#2A2634] py-8 px-10 text-white rounded-lg w-[25rem] shadow-lg shadow-black/25">
      <Dialog.Title className="text-3xl font-black text-center">{modalTitle}</Dialog.Title>
      <Form
        handleSuccess={handleSuccess}
        handleChangeForm={handleChangeForm}
        errorStatus={errorStatus}
        error={error}
        modalSubtitle={modalSubtitle}
        buttonTitle={buttonTitle}
      />
      </Dialog.Content>
    </Dialog.Root>
  )
}