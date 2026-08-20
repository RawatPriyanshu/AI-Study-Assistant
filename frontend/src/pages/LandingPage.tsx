import React from "react";
import "../index.css";

const LandingPage = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-wrap w-full flex flex-row items-center justify-center">
            <div className="hero-content max-w-[450px] w-full flex flex-col gap-[25px]">
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
                <button className="flex flex-row gap-2.5 rounded-lg py-[14px] px-[20px] cursor-pointer bg-[var(--bg-tertiary-color)] text-white ">
                  Start Studying Free
                  <span className="material-symbols-outlined">
                    trending_flat
                  </span>
                </button>
                <button className="border rounded-lg py-[14px] px-[20px] cursor-pointer">
                  See How It Works
                </button>
              </div>
            </div>
            <div className="hero-banner">
              <div className="hero-banner-cards flex flex-col max-w-[300px]">
                <div className="banner-heading flex flex-row justify-between w-full pt-[20px] pb-[15px] px-[15px] border-b border-[#dddddd]">
                  <p>My Notes</p>
                  <span className="material-symbols-outlined">
                    trending_flat
                  </span>
                </div>
                <div className="hero-notes-content flex flex-col gap-[25px]">
                  <div className="para flex flex-col gap-[20px] pt-[10px] px-[15px]">
                    <h2 className="text-[20px] font-bold">
                      Javascript Closures
                    </h2>
                    <p>
                      A closure is combinaition of a function budled
                      together(enclosed) with reference to its surrounding state
                      (the laxical envtioment).
                    </p>
                  </div>
                  <div className="para px-[15px]">
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
                  <div className="hero-banner-card-tags px-[15px] ">
                    <span>Javascript</span>
                    <span>Funcitons</span>
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
