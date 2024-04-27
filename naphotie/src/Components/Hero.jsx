export const Hero = (props) => {
  let badgeInfo;
  if (props.openSpots === 0) {
    badgeInfo = "FREE";
  } else {
    badgeInfo = "PRO";
  }
  return (
    <>
      <div className="hero-sect">
        <div className="page-file">
          {badgeInfo && <div className="hero-badge">{badgeInfo}</div>}
          <img src={`/src/assets/Plants/${props.image}`} />
          <h3>{props.name}</h3>
          <p>{props.location}</p>
        </div>
      </div>
    </>
  );
};
