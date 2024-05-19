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
  function addImage() {
    alert("image added ..");
  }
  return (
    <>
      <div className="header-sect">
        <h1>NAPHOTIE</h1>
        <nav className="nav-sect">
          <p>PLANTS</p>
          <p>ANIMALS</p>
          <p onClick={addImage}>ADD NAPHOTIE</p>
        </nav>
        <small>Time: {timeOfDay}</small>
      </div>
    </>
  );
};
