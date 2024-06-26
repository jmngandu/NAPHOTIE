export const FooterDetails = () => {
  let ourLocation = () => {
    return (
      <>
        <div className="location-mapping">Kenya</div>
      </>
    );
  };
  return (
    <>
      <div className="footer-sect">
        <h1>NAPHOTIE</h1>
        <span>JMNGANDU FOUNDATION INCORPORATION WITH JTHREEGLOBALLY</span>
        <div className="foot-more">
          <div>FAQS</div>
          <div>Contacts</div>
          <div className="location-page">
            <div className="location-title">Location</div>
            <div className="location-map">{ourLocation()}</div>
          </div>
          <div id="about-page">About</div>
        </div>
        <small id="conc">2024 all rights reserved</small>
      </div>
    </>
  );
};
