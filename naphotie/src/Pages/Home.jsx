import { Header } from "../Components/Header";
import { Hero } from "../Components/Hero";
import PlantsData from "../Components/PlantsData";

export const Home = () => {
  const PlantDataset = PlantsData.map((Plants) => {
    return (
      <Hero
        image={Plants.image}
        name={Plants.name}
        location={Plants.location}
      />
    );
  });
  return (
    <>
      <Header />
      <div className="Hero-page">{PlantDataset}</div>
    </>
  );
};
