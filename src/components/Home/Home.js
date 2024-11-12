import React from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  const signin = () => {
    navigate('/login')
  }
  const getstarted = () => {
    navigate('/finishsetting')
  }
  return (
    <>


      <div className="main black-color">
        <nav>
          <div className="nav-bar">
            <div>
              <img src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/9f48ac863d7b02aaf3fd000457a658b432c0bcba/assets/images/logo.svg" alt="Netflix-Logo" />
            </div>

            <div className="nav-btn">
              <button>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="default-ltr-cache-4z3qvp e1svuwfo1"
                  data-name="Languages"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <select name="language" id="lang">
                  <option value="English">English</option>
                  <option value="Hindi">हिन्दी</option>
                </select>
              </button>
              <button onClick={signin} className="red-btn">Sign In</button>
            </div>
          </div>
        </nav>

        <div className="box black-color">
          <div className="hero-section">
            <div className="hero-section-text-1">
              Unlimited movies,
            </div>
            <div className="hero-section-text-1">
              TV shows, and more
            </div>
            <div className="hero-section-text-2">Join today. Cancel anytime.</div>

            <div className="hero-section-text-3">
              Ready to watch? Enter your email to create or restart your membership.
            </div>

            <div className="get-email">
              <input type="email" placeholder="Email address" />
              <button className="red-btn" onClick={getstarted}>
                <p draggable="true">Get Started</p>
                <img src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/9f48ac863d7b02aaf3fd000457a658b432c0bcba/assets/images/chevron-right.svg" alt="chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="seperation"></div>

      <div className="desc-section black-color">
        <section>
          <div className="section">
            <div className="section-text">
              <div className="section-main-text">Enjoy on your TV</div>
              <div className="section-desc">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
              </div>
            </div>

            <div className="section-img">
              <img src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/refs/heads/main/assets/images/tv-mobile.png" alt="tv-img" />
              <video
                id="video-1"
                src="https://www.youtube.com/embed/KjRly_JmwlE?si=ROVBvtoEmjeLuWb0"
                autoPlay
                muted
                loop
              ></video>
            </div>
          </div>
        </section>

        <div className="seperation"></div>

        <section>
          <div className="section">
            <div className="section-img">
              <img src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/refs/heads/main/assets/images/mobile-girl-face.jpg" alt="tv-img" />
            </div>

            <div className="section-text">
              <div className="section-main-text">Download your shows to watch offline</div>
              <div className="section-desc">
                Save your favourites easily and always have something to watch.
              </div>
            </div>
          </div>
        </section>

        <div className="seperation"></div>

        <section>
          <div className="section">
            <div className="section-text">
              <div className="section-main-text">Watch everywhere</div>
              <div className="section-desc">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </div>
            </div>

            <div className="section-img">
              <img src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/refs/heads/main/assets/images/tv-mobile.png" alt="tv-img" />
              <video
                id="video-3"
                src="./assets/videos/video-devices-in.m4v"
                autoPlay
                muted
                loop
              ></video>
            </div>
          </div>
        </section>

        <div className="seperation"></div>

        <section>
          <div className="section">
            <div className="section-img">
              <img src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/refs/heads/main/assets/images/animated-pic.png" alt="tv-img" />
            </div>

            <div className="section-text">
              <div className="section-main-text">Create profiles for kids</div>
              <div className="section-desc">
                Send children on adventures with their favourite characters in a space made just for them—free with your
                membership.
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="seperation"></div>

      <div className="faq-section black-color">
        <h2>Frequently Asked Questions</h2>

        <div className="questions ">
          <p>What is Netflix?</p>
          <div className="plus-icon">
            <img src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/9f48ac863d7b02aaf3fd000457a658b432c0bcba/assets/images/plus-icon.svg" alt="plus-icon" />
          </div>
        </div>

        <div className="questions">
          <p>How much does Netflix cost?</p>
          <div className="plus-icon">
            <img src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/9f48ac863d7b02aaf3fd000457a658b432c0bcba/assets/images/plus-icon.svg" alt="plus-icon" />
          </div>
        </div>

        <div className="questions">
          <p>Where can I watch?</p>
          <div className="plus-icon">
            <img src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/9f48ac863d7b02aaf3fd000457a658b432c0bcba/assets/images/plus-icon.svg" alt="plus-icon" />
          </div>
        </div>

        <div className="questions">
          <p>How do I cancel?</p>
          <div className="plus-icon">
            <img src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/9f48ac863d7b02aaf3fd000457a658b432c0bcba/assets/images/plus-icon.svg" alt="plus-icon" />
          </div>
        </div>
        <div className="questions">
          <p>What can I watch on Netflix?</p>
          <div className="plus-icon">
            <img src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/9f48ac863d7b02aaf3fd000457a658b432c0bcba/assets/images/plus-icon.svg" alt="plus-icon" />
          </div>
        </div>
        <div className="questions">
          <p>Is Netflix good for kids?</p>
          <div className="plus-icon">
            <img src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/9f48ac863d7b02aaf3fd000457a658b432c0bcba/assets/images/plus-icon.svg" alt="plus-icon" />
          </div>
        </div>

        <div className="text">
          <p>Ready to watch? Enter your email to create or restart your membership.</p>

          <div className="get-email">
            <input type="email" placeholder="Email address" />
            <button className="red-btn">
              <p draggable="true">Get Started</p>
              <img src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/9f48ac863d7b02aaf3fd000457a658b432c0bcba/assets/images/chevron-right.svg" alt="chevron-right" />
            </button>
          </div>
        </div>
      </div>

      <div className="seperation"></div>

      <footer className='black-color'>
        <div className="footer black-color">
          <div className="help">
            Questions? Call <a href="call">000-800-919-1694</a>
          </div>

          <div className="links">
            <a href="faq">FAQ</a>
            <a href="help">Help Centre</a>
            <a href="account">Account</a>
            <a href="media">Media Centre</a>
            <a href="privacy">Privacy</a>
            <a href="terms">Terms</a>
            <a href="contact">Contact Us</a>
          </div>

          <div className="copy-right">© 2024 Netflix India</div>
        </div>
      </footer>

    </>
  );
}
