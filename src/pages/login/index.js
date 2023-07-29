import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import { signIn } from "next-auth/react";
import styles from "@/styles/Login.module.css";
import { Button } from "antd";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>PC Builder | Login</title>
      </Head>
      <div className={styles.form}>
        <Link href="/" style={{ color: "white" }}>
          <h3>LOGIN</h3>
        </Link>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/" })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", { callbackUrl: "http://localhost:3000/" })
            }
          />
        </div>
        <hr />
        <form>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
