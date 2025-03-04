import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/Auth";
import { NavClient } from "./NavClient";

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return <NavClient session={session} />;
};

export default Nav;
