import React from "react";
import "../index.css";

const LandingPage = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-wrap w-full flex flex-row items-center justify-center">
            <div className="hero-content max-w-112.5 w-full flex flex-col gap-6.5">
              <p className="!text-[var(--bg-tertiary-color)] !font-extrabold uppercase">
                Smarter Studying. Powered by AI
              </p>
              <h1 className="text-[--text-primary-color]">
                Turn Your Notes <br /> Into Deeper <br />
                <span className="text-[var(--bg-tertiary-color)]">
                  Understanding
                </span>
              </h1>
              <p>
                Create notes, organize your knoweledge, and let AI <br />{" "}
                summarize, explain, question and turn your material <br /> into
                flash cards -- all in one intlligent workspace.
              </p>
              <div className="hero-btns flex flex-row gap-2.5">
                <button className="purple-button flex flex-row gap-2.5 rounded-lg py-3.5 px-5 cursor-pointer bg-[var(--bg-tertiary-color)] text-white ">
                  Start Studying Free
                  <span className="material-symbols-outlined">
                    trending_flat
                  </span>
                </button>
                <button className="white-button border rounded-lg py-3.5 px-5 cursor-pointer">
                  See How It Works
                </button>
              </div>
            </div>
            <div className="hero-banner">
              <div className="hero-banner-cards flex flex-col max-w-75 shadow-2xl py-4">
                <div className="banner-heading flex flex-row justify-between items-center w-full pb-3.5 pl-6 pr-14 pr- border-b border-[#dddddd]">
                  <p>My Notes</p>
                  <span className="material-symbols-outlined cursor-pointer">
                    trending_flat
                  </span>
                </div>
                <div className="hero-notes-content flex flex-col gap-6">
                  <div className="para flex flex-col gap-4 pt-2.5  pl-6 pr-14">
                    <h2 className="text-[20px] font-bold">
                      Javascript Closures
                    </h2>
                    <p>
                      A closure is combinaition of a function budled
                      together(enclosed) with reference to its surrounding state
                      (the laxical envtioment).
                    </p>
                  </div>
                  <div className="para pl-6 pr-14">
                    <h3 className="text-[15px] font-bold">Key Points</h3>
                    <ul className="list-disc pl-[20px] pt-[15px]">
                      <li>
                        <p>
                          A closure gives a function access to its outer scope.
                        </p>
                      </li>
                      <li>
                        <p>Closures are commonly used in cllbacks.</p>
                      </li>
                      <li>
                        <p>Variables can remain accessable after execution.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="hero-banner-card-tags flex flex-row justify-between flex-wrap pl-6 pr-14 ">
                    <span className="bg-[#dbdbdb91] px-5 py-1 rounded-4xl">
                      Javascript
                    </span>
                    <span className="bg-[#dbdbdb91] px-5 py-1 rounded-4xl">
                      Funcitons
                    </span>
                  </div>
                </div>
              </div>
              <div className="hero-banner-cards">
                <div className="banner-heading">
                  <p>Ai Summary</p>
                  <span className="material-symbols-outlined">bookmark</span>
                </div>
                <div className="hero-notes-content">
                  <div className="para">
                    <p>
                      Closures allows a function to remember and access
                      variables from its laxical enviroment even the outer
                      function has finished executing.
                    </p>
                  </div>
                  <div className="hero-banner-card-tags">
                    <h3>Key Points</h3>
                    <div className="hero-banner-card-tags">
                      <span>Javascript</span>
                      <span>Funcitons</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-banner-cards">
                <div className="hero-notes-content">
                  <div className="para">
                    <h3>Key Points</h3>
                    <ul>
                      <li>What does a closure preserve ?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
