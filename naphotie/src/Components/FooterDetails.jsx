export const FooterDetails = () => {
  function ourLocation() {
    <>
      <div className="location-mapping">hello IAM JAMES</div>
    </>;
  }
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
            <div className="location-map">
              {ourLocation()}
              <h1>hello world</h1>
            </div>
          </div>
          <div>About</div>
        </div>
        <small id="conc">2024 all rights reserved</small>
      </div>
    </>
  );
};
