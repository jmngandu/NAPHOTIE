export const Hero = (props) => {
  return (
    <>
      <div className="hero-sect">
        <div className="page-file">
          <img src={`/src/assets/Plants/${props.image}`} />
          <h3>{props.name}</h3>
          <p>{props.location}</p>
        </div>
      </div>
    </>
  );
};
