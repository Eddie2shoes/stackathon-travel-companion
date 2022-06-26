import React from "react";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

// const inputStyle = styled("div")((theme) => ({
//   padding: theme.spacing(1, 1, 1, 0),
//   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//   transition: theme.transitions.create("width"),
//   width: 300,
//   [theme.breakpoints.up("md")]: { width: "20ch" },
// }));

export default function SearchFunction() {
  return <InputBase placeholder="Search here" sx={{ height: "auto" }} />;
}
