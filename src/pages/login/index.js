import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import { signIn } from "next-auth/react";
import styles from "@/styles/Login.module.css";
// import { Button } from "antd";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>PC Builder | Login</title>
      </Head>
      <div className={styles.form}>
        <Link href="/" style={{ color: "white" }}>
          <h1>LOGIN With</h1>
        </Link>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://pc-house-ecru.vercel.app/",
              })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://pc-house-ecru.vercel.app/",
              })
            }
          />
        </div>
        {/*  <hr />
        <form>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <Button>Login</Button>
        </form> */}
      </div>
    </div>
  );
};

export default LoginPage;
