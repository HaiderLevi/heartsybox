import "./../css/navbar.css";

const Navbar = () => {
  return (
    <>
      <section className="top-banner-main">
        <div className="top-banner-parent">
          <div className="top-banner-child top-banner-logo">
            <img src="/Heartsybox-Logo.svg" alt="Heartsybox-Logo" />
          </div>
          <div className="top-banner-child top-banner-shipping">
            <img src="/delivery-truck.png" alt="delivery-truck" />
            <div>
              <p className="top-banner-primary-text">Free standard shipping</p>
              <p>on all orders above $99</p>
            </div>
          </div>
          <div className="top-banner-child banner-vertical-separator"></div>
          <div className="top-banner-child top-banner-support">
            <img src="/customer-headset.png" alt="customer-headset" />
            <div>
              <p className="top-banner-primary-text">hi@heartsybox.com</p>
              <p>012 - 345 - 6789</p>
            </div>
          </div>
          <div className="top-banner-child banner-vertical-separator"></div>
          <div className="top-banner-child top-banner-shopping">
            <img src="/shopping-cart-big.png" alt="shopping-cart-big" />
            <div>
              <p className="top-banner-primary-text">Cart: 0 Items</p>
              <p>$0</p>
            </div>
          </div>
        </div>
      </section>

      <nav className="main-nav">
        <div className="nav-menu">
          <div className="nav-tabs-menu">
            <ul className="nav-menu-list">
              <li className="nav-menu-list-item nav-active-tab">
                <a href="#">Home</a>
              </li>
              <li className="nav-menu-list-item">
                <a href="#">Gifts</a>
              </li>
              <li className="nav-menu-list-item">
                <a href="#">GiftsPicker</a>
              </li>
              <li className="nav-menu-list-item">
                <a href="#">Blog</a>
              </li>
              <li className="nav-menu-list-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          {/* <div className="nav-search-menu">
            <div className="nav-search-input">
              <input
                type="text"
                placeholder="Search Gifts..."
                className="nav-menu-search-item"
              />
              <img
                src="/search-icon.png"
                alt="search-icon"
                className="nav-search-icon"
              />
            </div>
          </div> */}
        </div>
      </nav>

      <nav className="mobile-nav">
        <div className="mobile-nav-main">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-list-item">
              <a href="#">Home</a>
            </li>
            <li className="mobile-nav-list-item">
              <a href="#">Gifts</a>
            </li>
            <li className="mobile-nav-list-item">
              <a href="#">GiftsPicker</a>
            </li>
            <li className="mobile-nav-list-item">
              <a href="#">Blog</a>
            </li>
            <li className="mobile-nav-list-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
