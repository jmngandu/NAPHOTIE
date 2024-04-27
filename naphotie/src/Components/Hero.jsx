export const Hero = (props) => {
  let badgeInfo;
  if (props.Plants.openSpots === 0) {
    badgeInfo = "FREE";
  } else {
    badgeInfo = "PRO";
  }
  return (
    <>
      <div className="hero-sect">
        <div className="page-file">
          {badgeInfo && <div className="hero-badge">{badgeInfo}</div>}
          <img src={`/src/assets/Plants/${props.Plants.image}`} />
          <h3>{props.Plants.name}</h3>
          <p>{props.Plants.location}</p>
        </div>
      </div>
    </>
  );
};
