import { useId } from "react";

const LoginForm = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const { login, password } = form.elements;

    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  const loginId = useId();
  const passwordId = useId();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={loginId}>Login</label>
        <input type="text" name="login" id={loginId} />
        <label htmlFor={passwordId}>Password</label>
        <input type="password" name="password" id={passwordId} />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default LoginForm;
