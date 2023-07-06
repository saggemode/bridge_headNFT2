import Head from "next/head";
import React, { useState } from "react";
import Header from "../components/admin/Header";
import Sidenav from "../components/admin/Sidenav";
import { MenuContext } from "../contexts/Menu.context";

const AdminLayout = ({ title, description, children }) => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>{title ? title + " - NFT MARKET" : "NFT MARKET"}</title>
        {description && <meta name="description" content={description}></meta>}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuContext.Provider value={{ open, setOpen }}>
        <Sidenav />
        <Header />
        {children}
      </MenuContext.Provider>
    </>
  );
};

export default AdminLayout;
