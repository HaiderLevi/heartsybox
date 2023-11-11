import "./../css/services.css";

const Services = () => {
  return (
    <>
      <section className="main-services">
        <div className="services">
          <div className="services-image">
            <img
              src="rakshabandhan-gifts.png"
              alt="icon"
              className="services-gifts-img"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 163 162"
              fill="none"
              className="services-circle"
            >
              <circle
                cx="81.5"
                cy="81"
                r="80.5"
                fill="#F1F1F1"
                stroke="#D29E84"
              />
            </svg>
          </div>
          <h2>Delivering Quality Gifts</h2>
          <p>for you and your loved ones</p>
        </div>
        <div className="services">
          <div className="services-image">
            <img
              src="ribbon-bow.png"
              alt="icon"
              className="services-ribbon-img"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 163 162"
              fill="none"
              className="services-circle"
            >
              <circle
                cx="81.5"
                cy="81"
                r="80.5"
                fill="#F1F1F1"
                stroke="#D29E84"
              />
            </svg>
          </div>
          <h2>Gifts for all occasions</h2>
          <p>occasional and seasonal gifts of all types </p>
        </div>
        <div className="services">
          <div className="services-image">
            <img src="review.png" alt="icon" className="services-review-img" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 163 162"
              fill="none"
              className="services-circle"
            >
              <circle
                cx="81.5"
                cy="81"
                r="80.5"
                fill="#F1F1F1"
                stroke="#D29E84"
              />
            </svg>
          </div>
          <h2>Great customer reviews</h2>
          <p>our customers love us</p>
        </div>
      </section>
    </>
  );
};

export default Services;
