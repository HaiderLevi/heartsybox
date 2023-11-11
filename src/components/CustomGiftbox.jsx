import "./../css/customGiftbox.css";

const CustomGiftbox = () => {
  return (
    <>
      <section className="main-custom-giftbox-section">
        <div className="custom-giftbox-parent">
          <div className="custom-giftbox-child giftbox-child1">
            <h2 className="custom-giftbox-header">
              Let’s create your custom gift box
            </h2>
            <img src="/gift-box.png" alt="gift-box" className="gift-box" />
          </div>
          <div className="custom-giftbox-child giftbox-child2">
            <img src="/Giftbox.svg" alt="Giftbox" className="giftbox-image" />
            <input
              type="text"
              name="name"
              className="input-giftbox"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="input-giftbox"
              placeholder="Email"
            />
            <button type="button" className="input-button-primary">
              Send a Love Box
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

export default CustomGiftbox;
