import PlantsData from "./PlantsData";
export const Hero = (props) => {
  const PlantDataset = PlantsData.map((Plants) => {
    return (
      <Plants img={Plants.img} name={Plants.name} location={Plants.location} />
    );
  });
  return (
    <>
      <div className="hero-sect">
        <div className="page-file">
          <img src={`/src/assets/Plants/${props.img}`} />
          <h3>{props.h3}</h3>
          <p>{props.p}</p>
        </div>
      </div>
    </>
  );
};
