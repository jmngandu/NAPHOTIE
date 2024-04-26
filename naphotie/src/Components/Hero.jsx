export const Hero = (props) => {
  return (
    <>
      <div className="hero-sect">
        <div className="page-file">
          <img src={props.img} alt="image of tea plant" />
          <h3>{props.h3}</h3>
          <p>{props.p}</p>
        </div>
      </div>
    </>
  );
};
