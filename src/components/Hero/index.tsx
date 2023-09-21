import { PropsWithChildren } from "react";

const classes = {
  header: "py-14 flex flex-col justify-center items-center gap-8 bg-blue-950",
  title: "text-2xl font-bold text-white",
};

const Hero = ({ children }: PropsWithChildren) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Search for Images</h1>
      {children}
    </header>
  );
};

export default Hero;
