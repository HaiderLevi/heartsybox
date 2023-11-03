import { useState } from "react";
import "./../css/working.css";

const Working = () => {
  const [showWorkingStep1, setShowWorkingStep1] = useState(true);
  const [showWorkingStep2, setShowWorkingStep2] = useState(true);

  return (
    <>
      <section className="main-working">
        <div className="working-header">
          <h1>
            How <span className="header-span">Heartsbybox</span> works
          </h1>
        </div>
        <div
          className="main-working-step"
          onClick={() => setShowWorkingStep1(!showWorkingStep1)}
        >
          <h1>
            1. Design a <span className="header-span">gift box</span>
          </h1>
          <img src="/mingcute_down-line.png" alt="downward-arrow" />
        </div>

        {showWorkingStep1 && (
          <div className="working-design-main">
            <div className="working-design-step-main">
              <div className="working-design-steps">
                {/* <p className="step-header">Step 01</p> */}
                <img src="/Step 01.png" alt="Step 01" />
                <h2>
                  Pick a Sweet <img src="sweet.svg" alt="sweet-icon" />
                </h2>
                <p className="step-detail">
                  Indulge your taste buds and create an exquisite flavour
                  pairing. Choose from our artisanal chocolates or delicate
                  macarons. Each bite is a glimpse into a world of taste and
                  delight.
                </p>
              </div>
              <div className="working-design-steps">
                {/* <p className="step-header">Step 02</p> */}
                <img src="/Step 02.png" alt="Step 02" />
                <h2>
                  Pick a Flower <img src="flower.svg" alt="flower-icon" />
                </h2>
                <p className="step-detail">
                  Enhance your box by selecting the bloom that resonates with
                  your heart. Feel the velvety petals, embrace the delicate
                  fragrance, and let it whisper your message of love.
                </p>
              </div>
              <div className="working-design-steps">
                {/* <p className="step-header">Step 03</p> */}
                <img src="/Step 03.png" alt="Step 03" />
                <h2>
                  Pick a Gift <img src="gift.svg" alt="gift-icon" />
                </h2>
                <p className="step-detail">
                  The heart of your creation—pick a gift that embodies your
                  sentiments. Let it be a symbol of joy, wonder, or inspiration,
                  just waiting to be unwrapped by your loved one.
                </p>
              </div>
            </div>
            <div className="working-design-image">
              <span className="design-image-icons">
                <img src="/rose.png" alt="rose" />
                <img src="/chocolate.png" alt="chocolate" />
                <img src="/heart.png" alt="heart" />
              </span>
              <img
                src="/step-image.png"
                alt="step-image"
                className="design-image"
              />
            </div>
          </div>
        )}

        <div className="note-main">
          <div className="note-detail">
            <h1>Leave a Note?</h1>
            <p>
              Words are the bridge between hearts. Select a card that resonates
              with your emotions. You can leave it as a blank canvas, ready for
              your personal prose, or choose from our heartfelt notes.
            </p>
            <button type="button" className="button-primary">
              Design a Gift Box
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
          <div className="note-image">
            <img src="/valentine-surprise.png" alt="animated-hearts" />
          </div>
        </div>

        <div className="gift-order-main">
          <h1>OR</h1>
          <hr className="OR-line" />
        </div>

        <div
          className="main-working-step"
          onClick={() => setShowWorkingStep2(!showWorkingStep2)}
        >
          <h1>
            2. Just order <span className="header-span">a gift</span>
          </h1>
          <img src="/mingcute_down-line.png" alt="downward-arrow" />
        </div>

        {showWorkingStep2 && (
          <div className="cards-root">
            <div className="gift-text">
              <h1>Special Chocolate and Flowers Gift</h1>
              <p>
                Words are the bridge between hearts. Select a card that
                resonates with your emotions. You can leave it as a blank
                canvas.
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
              <div className="arrows-main">
                <img src="/LeftArrow.png" alt="leftArrow" />
                <img src="/RightArrow.png" alt="rightArrow" />
              </div>
            </div>
            <div className="cards-main">
              <div className="card">
                <img
                  src="/card1.png"
                  alt="card-backgroud"
                  className="card-image"
                />
                <div className="card-detail">
                  <h2>Special Chocolate and Flowers Gift</h2>
                  <div className="starting-now">
                    <p>Starting from</p>
                    {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="32"
                    viewBox="0 0 16 32"
                    fill="none"
                  >
                    <path
                      d="M1.41421 14.5858L16 0V32L1.41421 17.4142C0.633165 16.6332 0.633163 15.3668 1.41421 14.5858Z"
                      fill="#D29E84"
                    />
                  </svg> */}
                    <span className="starting-now-svg-dot"></span>
                    <span className="starting-now-span">$34.0</span>
                  </div>
                  <div className="add-to-cart">
                    <img src="/shopping-cart.png" alt="shopping-cart-icon" />
                    <p>Add to cart</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  src="/card2.png"
                  alt="card-backgroud"
                  className="card-image"
                />
                <div className="card-detail">
                  <h2>Unique & Handpicked Gifts for Her</h2>
                  <div className="starting-now">
                    <p>Starting from</p>
                    {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="32"
                    viewBox="0 0 16 32"
                    fill="none"
                  >
                    <path
                      d="M1.41421 14.5858L16 0V32L1.41421 17.4142C0.633165 16.6332 0.633163 15.3668 1.41421 14.5858Z"
                      fill="#D29E84"
                    />
                  </svg> */}
                    <span className="starting-now-svg-dot"></span>
                    <span className="starting-now-span">$30.0</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  src="/card3.png"
                  alt="card-backgroud"
                  className="card-image"
                />
                <div className="card-detail">
                  <h2>Happy Wishes Basket for Kids</h2>
                  <div className="starting-now">
                    <p>Starting from</p>
                    {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="32"
                    viewBox="0 0 16 32"
                    fill="none"
                  >
                    <path
                      d="M1.41421 14.5858L16 0V32L1.41421 17.4142C0.633165 16.6332 0.633163 15.3668 1.41421 14.5858Z"
                      fill="#D29E84"
                    />
                  </svg> */}
                    <span className="starting-now-svg-dot"></span>
                    <span className="starting-now-span">$25.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Working;
