import { useState } from "react";
import "./App.css";
import myPhoto from "./assets/943f90ea-45d3-4399-8191-bd0582f9ca3c.jpg";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="app-container">
      <div className="app-center">
        <div
          onClick={() => setShowMessage(!showMessage)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`flower-clickable ${isHovered ? "hovered" : ""}`}
        >
          {/* Enhanced SVG Flower */}
          <svg
            width="240"
            height="280"
            viewBox="0 0 240 280"
            className="flower-svg"
          >
            <defs>
              {/* Gradients for petals */}
              <radialGradient id="petal1" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#ff85c1" />
                <stop offset="100%" stopColor="#ff1493" />
              </radialGradient>
              <radialGradient id="petal2" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#ffb3d9" />
                <stop offset="100%" stopColor="#ff69b4" />
              </radialGradient>
              <radialGradient id="petal3" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#ffd1e8" />
                <stop offset="100%" stopColor="#ffb6c1" />
              </radialGradient>
              <radialGradient id="center" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#fffacd" />
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#ffa500" />
              </radialGradient>
              <linearGradient id="stem" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3cb371" />
                <stop offset="100%" stopColor="#228b22" />
              </linearGradient>
              <radialGradient id="leaf" cx="40%" cy="40%">
                <stop offset="0%" stopColor="#90ee90" />
                <stop offset="100%" stopColor="#32cd32" />
              </radialGradient>
            </defs>

            {/* Main petals - larger and more detailed */}
            <g className="petals-outer">
              {/* Top petal */}
              <ellipse
                cx="120"
                cy="50"
                rx="30"
                ry="50"
                fill="url(#petal1)"
                className="petal"
              />
              {/* Right petal */}
              <ellipse
                cx="170"
                cy="100"
                rx="50"
                ry="30"
                fill="url(#petal1)"
                className="petal"
              />
              {/* Bottom petal */}
              <ellipse
                cx="120"
                cy="150"
                rx="30"
                ry="50"
                fill="url(#petal1)"
                className="petal"
              />
              {/* Left petal */}
              <ellipse
                cx="70"
                cy="100"
                rx="50"
                ry="30"
                fill="url(#petal1)"
                className="petal"
              />
            </g>

            {/* Secondary petals - diagonal */}
            <g className="petals-diagonal">
              <ellipse
                cx="155"
                cy="65"
                rx="35"
                ry="45"
                fill="url(#petal2)"
                transform="rotate(45 155 65)"
                className="petal"
              />
              <ellipse
                cx="155"
                cy="135"
                rx="35"
                ry="45"
                fill="url(#petal2)"
                transform="rotate(-45 155 135)"
                className="petal"
              />
              <ellipse
                cx="85"
                cy="135"
                rx="35"
                ry="45"
                fill="url(#petal2)"
                transform="rotate(45 85 135)"
                className="petal"
              />
              <ellipse
                cx="85"
                cy="65"
                rx="35"
                ry="45"
                fill="url(#petal2)"
                transform="rotate(-45 85 65)"
                className="petal"
              />
            </g>

            {/* Inner petals */}
            <g className="petals-inner">
              <ellipse
                cx="120"
                cy="75"
                rx="20"
                ry="30"
                fill="url(#petal3)"
                className="petal-inner"
              />
              <ellipse
                cx="145"
                cy="100"
                rx="30"
                ry="20"
                fill="url(#petal3)"
                className="petal-inner"
              />
              <ellipse
                cx="120"
                cy="125"
                rx="20"
                ry="30"
                fill="url(#petal3)"
                className="petal-inner"
              />
              <ellipse
                cx="95"
                cy="100"
                rx="30"
                ry="20"
                fill="url(#petal3)"
                className="petal-inner"
              />
            </g>

            {/* Flower center with details */}
            <circle
              cx="120"
              cy="100"
              r="28"
              fill="url(#center)"
              className="center-outer"
            />
            <circle cx="120" cy="100" r="22" fill="#ffd700" opacity="0.8" />
            <circle cx="120" cy="100" r="16" fill="#ffed4e" />
            
            {/* Center dots for detail */}
            <circle cx="115" cy="95" r="2" fill="#ff8c00" opacity="0.6" />
            <circle cx="125" cy="95" r="2" fill="#ff8c00" opacity="0.6" />
            <circle cx="120" cy="105" r="2" fill="#ff8c00" opacity="0.6" />
            <circle cx="115" cy="105" r="2" fill="#ff8c00" opacity="0.6" />
            <circle cx="125" cy="105" r="2" fill="#ff8c00" opacity="0.6" />

            {/* Stem with curve */}
            <path
              d="M 120 150 Q 118 180, 120 220"
              stroke="url(#stem)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              className="stem"
            />

            {/* Leaves with better shape */}
            <ellipse
              cx="100"
              cy="180"
              rx="22"
              ry="15"
              fill="url(#leaf)"
              transform="rotate(-30 100 180)"
              className="leaf"
            />
            <ellipse
              cx="140"
              cy="195"
              rx="22"
              ry="15"
              fill="url(#leaf)"
              transform="rotate(30 140 195)"
              className="leaf"
            />
            
            {/* Leaf veins for detail */}
            <line
              x1="100"
              y1="180"
              x2="90"
              y2="180"
              stroke="#228b22"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="140"
              y1="195"
              x2="150"
              y2="195"
              stroke="#228b22"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Instruction text */}
        {!showMessage && (
          <p className="instruction">
            Click the flower 🌸
            <span className="pulse-dot"></span>
          </p>
        )}

        {/* Message */}
        {showMessage && (
          <div className="message-box fadeIn">
            <div className="message-content">
              <div className="image-wrapper">
                <img
                  src={myPhoto}
                  alt="Special moment"
                  className="message-image"
                />
              </div>
              <h2 className="message-title">
                To My Beautiful Girlfriend 💕
              </h2>
              <div className="message-text">
                <p>
                  So Hello again my babyyyyyy! From "Soon to be my girlfrined" to
                  "Happy Valentines and Monthsary!" A lot of things happened na talaga
                  and in just short period of time e ang dami na ring nangyari sa atin.
                  There are good things and there are bad things rin and I love how resilient we are
                </p>
                <p>
                  I'm kind of sorry kasi this kind of flower lang din ang maibigay ko pero
                  I made this with effort talaga na to the fullest and pro max. Ayaw ko rin
                  ibigay kaagad kasi syempre dapat mainis ka muna hahahahahahah. I know na you
                  deserve most of the great things kasi you are a great person.
                </p>
                <p>
                  Thank you so much for the love, care, miss, hmm session hihi, and the supports!
                  I know naman na kaya ko talaga ng mag-isa hahahah but you coming into my life with
                  such support and care e lifts me up talaga when I'm down and embraces me when I'm up naman
                </p>
                <p>
                  From the start, you inspire me to be better, to dream bigger, and to love you
                  deeper. I will always cherish the things we do and did. Thank you so much mi amore!
                </p>
              </div>
              <p className="closing-text">
                I'll have this opportunity again and everyday to say this.
              </p>
              <p className="closing-text">I love you Jamila❤️</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}