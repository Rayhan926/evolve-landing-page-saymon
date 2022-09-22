import Head from "next/head";
import React from "react";
import Mambaday from "../views/Mambaday";
import Header from "../views/Mambaday/components/Header";
import MambadayMobile from "../views/MambadayMobile";

const MambadayPage = () => {
  return (
    <>
      <Head>
        <title>EVOLVE</title>
        <meta
          name="description"
          content="Unwavering confidence derived through self-love emulated through conviction and a never-ending hunger for self-growth"
        ></meta>
      </Head>
      <Header />
      <Mambaday />
      <MambadayMobile />
    </>
  );
};

export default MambadayPage;
