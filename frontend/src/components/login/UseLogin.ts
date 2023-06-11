import { FormEvent, useRef } from "react";

function UseLogin() {
  const loginInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (loginInput.current !== null && passwordInput.current !== null) {
      console.log(loginInput.current.value, passwordInput.current.value);
    }
    return null;
  };

  return { HandleSubmit, loginInput, passwordInput };
}

export default UseLogin;
