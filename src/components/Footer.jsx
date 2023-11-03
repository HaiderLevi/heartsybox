import "./../css/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-root">
        <div className="footer-parent">
          <div className="footer-child footer-logo-child">
            <img
              src="/Heartsybox-Logo.png"
              alt="heartsybox-log"
              className="footer-logo"
            />
            <p>
              Build custom gift boxes for your loved ones and for all occasions.
              Whether you’re just next door or in another country, Heartsy Box
              allows you to seamlessly send the perfect gift box right to your
              loved one's door.
            </p>
            <ul className="footer-icons-list">
              <li>
                <img src="/fb-icon.png" alt="facebook-icon" />
              </li>
              <li>
                <img src="/X-icon.png" alt="twitter-icon" />
              </li>
              <li>
                <img src="/in-icon.png" alt="linkedIn-icon" />
              </li>
              <li>
                <img src="/p-icon.png" alt="pinterest-icon" />
              </li>
            </ul>
          </div>
          <div className="footer-child footer-menu">
            <h3>Menu</h3>
            <ul className="footer-menu-list">
              <li>Home</li>
              <li>Giftspicker</li>
              <li>Blog</li>
              <li>contact</li>
            </ul>
          </div>
          <div className="footer-child footer-contact">
            <h3>Contact</h3>
            <ul className="footer-contact-list">
              <li className="subscribe-text">Subscribe to our email</li>
              <li>For Latest News & Updates</li>
              <li>
                <input type="text" name="email" placeholder="Email" />
              </li>
              <li>
                <button type="button" className="footer-subscribe-btn">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <section className="bottom-banner">
        <p className="roboto-font">
          Copyright 2023 M&G Reservations group Ltd | All Rights Reserved |
          Powered by HeartsyBox
        </p>
      </section>
    </>
  );
};

export default Footer;
