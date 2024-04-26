export const Hero = (props) => {
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
