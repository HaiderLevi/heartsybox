import "./../css/giftpack.css";

const Giftpack = () => {
  return (
    <>
      <section className="main-giftpack-section">
        <h1 className="giftpack-header">
          I need <span className="header-span">the perfect</span>
        </h1>

        <div className="giftpack-parent">
          <div className="giftpack-child">
            <img
              src="/step-image.png"
              alt="bg-image"
              className="giftpack-image"
            />
          </div>
          <div className="giftpack-child">
            <h1>Rascal Gift Pack</h1>
            <p>
              Handmade companions and toys that ignite young imaginations and
              bring joy.
            </p>
            <p>
              <span className="header-span">What’s in the Box:</span> What’s in
              the Box
            </p>
            <p>
              <span className="header-span">Perfect for: </span>The Young Love
              Birds
            </p>
            <button type="button" className="button-primary">
              Buy Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  d="M22.595 5.0275C19.6275 5.0275 17.085 6.6575 16 9.045C14.915 6.6575 12.3725 5.0275 9.405 5.0275C5.46 5.0275 2.25 7.985 2.25 11.62C2.25 16.675 5.965 19.0775 9.555 21.3975C11.83 22.8675 14.18 24.3875 15.47 26.5625C15.4984 26.6785 15.5647 26.7816 15.6585 26.8554C15.7523 26.9293 15.8681 26.9696 15.9875 26.97H16.0125C16.2025 26.97 16.3725 26.8575 16.4675 26.6925C16.485 26.6625 16.5 26.63 16.51 26.5975C17.795 24.4025 20.1575 22.875 22.445 21.3975C26.035 19.0775 29.75 16.675 29.75 11.62C29.75 7.985 26.54 5.0275 22.595 5.0275Z"
                  fill="white"
                  className="heart-svg"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="giftpack-parent">
          <div className="giftpack-child giftpack-child-odd">
            <h1>Rascal Gift Pack</h1>
            <p>
              Handmade companions and toys that ignite young imaginations and
              bring joy.
            </p>
            <p>
              <span className="header-span">What’s in the Box:</span> What’s in
              the Box
            </p>
            <p>
              <span className="header-span">Perfect for: </span>The Young Love
              Birds
            </p>
            <button type="button" className="button-primary">
              Buy Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  d="M22.595 5.0275C19.6275 5.0275 17.085 6.6575 16 9.045C14.915 6.6575 12.3725 5.0275 9.405 5.0275C5.46 5.0275 2.25 7.985 2.25 11.62C2.25 16.675 5.965 19.0775 9.555 21.3975C11.83 22.8675 14.18 24.3875 15.47 26.5625C15.4984 26.6785 15.5647 26.7816 15.6585 26.8554C15.7523 26.9293 15.8681 26.9696 15.9875 26.97H16.0125C16.2025 26.97 16.3725 26.8575 16.4675 26.6925C16.485 26.6625 16.5 26.63 16.51 26.5975C17.795 24.4025 20.1575 22.875 22.445 21.3975C26.035 19.0775 29.75 16.675 29.75 11.62C29.75 7.985 26.54 5.0275 22.595 5.0275Z"
                  fill="white"
                  className="heart-svg"
                />
              </svg>
            </button>
          </div>
          <div className="giftpack-child giftpack-child-odd">
            <img
              src="/step-image.png"
              alt="bg-image"
              className="giftpack-image"
            />
          </div>
        </div>

        <div className="giftpack-parent">
          <div className="giftpack-child">
            <img
              src="/step-image.png"
              alt="bg-image"
              className="giftpack-image"
            />
          </div>
          <div className="giftpack-child">
            <h1>Rascal Gift Pack</h1>
            <p>
              Handmade companions and toys that ignite young imaginations and
              bring joy.
            </p>
            <p>
              <span className="header-span">What’s in the Box:</span> What’s in
              the Box
            </p>
            <p>
              <span className="header-span">Perfect for: </span>The Young Love
              Birds
            </p>
            <button type="button" className="button-primary">
              Buy Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  d="M22.595 5.0275C19.6275 5.0275 17.085 6.6575 16 9.045C14.915 6.6575 12.3725 5.0275 9.405 5.0275C5.46 5.0275 2.25 7.985 2.25 11.62C2.25 16.675 5.965 19.0775 9.555 21.3975C11.83 22.8675 14.18 24.3875 15.47 26.5625C15.4984 26.6785 15.5647 26.7816 15.6585 26.8554C15.7523 26.9293 15.8681 26.9696 15.9875 26.97H16.0125C16.2025 26.97 16.3725 26.8575 16.4675 26.6925C16.485 26.6625 16.5 26.63 16.51 26.5975C17.795 24.4025 20.1575 22.875 22.445 21.3975C26.035 19.0775 29.75 16.675 29.75 11.62C29.75 7.985 26.54 5.0275 22.595 5.0275Z"
                  fill="white"
                  className="heart-svg"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Giftpack;
