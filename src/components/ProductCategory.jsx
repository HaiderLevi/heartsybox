import "./../css/productCategory.css";

const ProductCategory = () => {
  return (
    <>
      <section className="main-product-category">
        <h1>
          Product <span className="header-span">Categories</span>
        </h1>

        <div className="categories-parent">
          <div className="categories-child">
            <img src="/diamond.png" alt="diamond-icon" />
            <p>Jewellery</p>
          </div>
          <div className="categories-child">
            <img src="/device.png" alt="device-icon" />
            <p>Gadgets</p>
          </div>
          <div className="categories-child">
            <img src="/shoulder-bag.png" alt="shoulder-bag-icon" />
            <p>Accessories</p>
          </div>
          <div className="categories-child">
            <img src="/child.png" alt="child-icon" />
            <p>Toys</p>
          </div>
          <div className="categories-child">
            <img src="/tie.png" alt="tie-icon" />
            <p>Suits</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategory;
