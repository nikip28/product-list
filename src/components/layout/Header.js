import React from "react";
import useStyles from "./styles";

const MainHeader = ({children}) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{children}</h1>
    </header>
  );
};

export default MainHeader;
