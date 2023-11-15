import { useForm } from "react-hook-form";
import auth from "@/firebase/firebase.auth.js";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import { env } from "@/env";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import RootLayout from "@/components/Layouts/RootLayouts";
import Link from "next/link";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  useEffect(() => {
    if (user?.accessToken) {
      router.push("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3 className="text-center">LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn("google", {
                callbackUrl: env.Frontend_base_url,
              })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: env.Frontend_base_url,
              })
            }
          />
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-left" htmlFor="">
            Your Email
          </label>
          <input {...register("email", { required: true })} type="email" />
          <br />
          <label htmlFor="">Your Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
          />
          <button
            className="px-2 md:px-4 border-4 py-2 md:text-xl cursor-pointer border-[#52ab98] text-[#52ab98] hover:bg-[#52ab98] hover:text-[#fff]"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="mt-3 text-right">
          have not any account?{" "}
          <Link href="/signup">
            <span className="hover:underline">SIGNUP</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
