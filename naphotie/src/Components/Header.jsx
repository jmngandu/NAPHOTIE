export const Header = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Night";
  }
  function handleClick() {
    alert("Welcome to naphtie");
  }
  return (
    <>
      <div className="header-sect">
        <h1>NAPHOTIE</h1>
        <nav className="nav-sect">
          <p>PLANTS</p>
          <p onClick={handleClick}>ANIMALS</p>
          <p>LAND</p>
        </nav>
        <small>Time: {timeOfDay}</small>
      </div>
    </>
  );
};
