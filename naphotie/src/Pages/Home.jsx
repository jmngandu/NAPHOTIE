import { Header } from "../Components/Header";
import { Hero } from "../Components/Hero";
import PlantsData from "../Components/PlantsData";

export const Home = () => {
  const PlantDataset = PlantsData.map((Plants) => {
    return (
      <Plants img={Plants.img} name={Plants.name} location={Plants.location} />
    );
  });
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
