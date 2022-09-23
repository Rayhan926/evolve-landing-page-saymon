import Head from "next/head";
import React from "react";
import Div100vh from "react-div-100vh";
import Logo from "../components/3dLogo";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>EVOLVE</title>
        <meta
          name="description"
          content="Unwavering confidence derived through self-love emulated through conviction and a never-ending hunger for self-growth"
        ></meta>
      </Head>
      <Div100vh className="relative">
        <section className="w-full h-full bg-dark relative overflow-hidden">
          <div className="w-full h-full translate-y-[12%] sm:translate-y-[17%]">
            <Logo />
          </div>
        </section>
        <Footer />
      </Div100vh>
    </>
  );
};

export default Home;
