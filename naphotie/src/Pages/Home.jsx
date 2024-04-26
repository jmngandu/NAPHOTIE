import { Header } from "../Components/Header";
import { Hero } from "../Components/Hero";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero
        img="scaled.jpeg"
        h3="A tea plant on the kenyan highlands"
        p="location - kenya"
      />
    </>
  );
};
