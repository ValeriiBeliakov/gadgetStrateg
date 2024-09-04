import { Link, useNavigate } from "react-router-dom";
import s from "./Login.module.scss";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { Loading } from "../../Loading/Loading";

const Login:React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const signIn = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setIsLoading(false);
      toast.success("Вы вошли в систему");
      navigate("/checkout");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("не получилось войти в систему");
    }
  };
  return (
    <section className={s.login}>
      {isLoading ? (
        <Loading/>
      ) : (
        <div className={s.content_block}>
          <h1 className={s.title}>Авторизация</h1>
          <div className={s.container}>
            <div className={s.side_img}>
              <Link to={"/main"} className={s.link}>
                GadgetStrateg
              </Link>
            </div>
            <form  className={s.form} onSubmit={signIn}>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="пароль"
                value={password}
                onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
              <button type="submit">войти</button>
              <p>
                Нет аккаунта? <Link to="/signup" className={s.create_acc}> Создать аккаунт</Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
