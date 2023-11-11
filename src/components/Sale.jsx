import "./../css/sale.css";

const Sale = () => {
  return (
    <>
      <section className="main-sale">
        <div className="sale-menu sale-menu1">
          <div className="sale-menu-text">
            <p>Clearance Sale</p>
            <h2>Women's Day</h2>
            <p className="sale-shop-now">Shop Now</p>
          </div>
        </div>
        <div className="sale-menu sale-menu2">
          <div className="sale-menu2-inner">
            <p>Holiday Offers</p>
            <h2>Sale 50% Off</h2>
            <p className="sale-code">CODE: GRS18</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sale;
