import Head from "next/head";
import Image from "next/image";
import React from "react";
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
      <section className="w-full h-screen bg-dark relative overflow-hidden translate-y-[17%]">
        {/* translate-y-[20%] */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={"/images/logo.svg"}
            width={129}
            height={188}
            alt="Evolve"
          />
        </div> */}
        <Logo />
      </section>
      <Footer />
    </>
  );
};

export default Home;
