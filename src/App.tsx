import { useEffect, useLayoutEffect, useState } from "react";
import EText from "./slideTexts/englishText.json";
import RText from "./slideTexts/romanianText.json";
import imgfirst from "./media/face.jpg";
import { InView } from "react-intersection-observer";
import { Element, scroller } from "react-scroll";
import ro from "./assets/ro.jpg";
import en from "./assets/eng.jpg";

function App() {
  //language and device
  const [selectedLanguage, setSelectedLanguage] = useState(EText);
  const [device, setDevice] = useState("pc");

  //slide InViews
  const [firstInView, setfirstInView] = useState(false);
  const [secondInView, setsecondInView] = useState(false);
  const [thirdInView, setthirdInView] = useState(false);
  const [fourthInView, setfourthInView] = useState(false);
  const [fifthInView, setfifthInView] = useState(false);
  const [sixthInView, setsixthInView] = useState(false);
  const [seventhInView, setseventhInView] = useState(false);
  const [eighthInView, seteighthInView] = useState(false);
  const [ninthInView, setninthInView] = useState(false);

  //keeps track of which slide is active
  const [activeSlide, setActiveSlide] = useState("first");

  //checking if user is using mobile or pc for styling the page later
  useLayoutEffect(() => {
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      setDevice("mobile");
    } else {
      setDevice("pc");
    }
  });

  useEffect(() => {
    //checks which slide is active
    EText.forEach((element) => {
      if (eval(element.id + "InView")) {
        setActiveSlide(element.id);
      }
    });
  });

  //function using react-scroll to scroll to a specific element
  function scrollTo(e: string) {
    scroller.scrollTo(e, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -window.innerHeight * 0.2,
    });
  }

  //returns device and the passed string for styling
  function classSelector(className: String) {
    return device + className;
  }

  //toggles between english and romanian (testing use)
  function toggleLanguage() {
    if (selectedLanguage == EText) {
      setSelectedLanguage(RText);
    } else {
      setSelectedLanguage(EText);
    }
  }

  //returns a div with buttons of all the slides
  function getButtons() {
    return (
      <>
        <button
          className={firstInView ? "activeButton" : ""}
          onClick={() => scrollTo("first")}
        ></button>
        <button
          className={secondInView ? "activeButton" : ""}
          onClick={() => scrollTo("second")}
        ></button>
        <button
          className={thirdInView ? "activeButton" : ""}
          onClick={() => scrollTo("third")}
        ></button>
        <button
          className={fourthInView ? "activeButton" : ""}
          onClick={() => scrollTo("fourth")}
        ></button>
        <button
          className={fifthInView ? "activeButton" : ""}
          onClick={() => scrollTo("fifth")}
        ></button>
        <button
          className={sixthInView ? "activeButton" : ""}
          onClick={() => scrollTo("sixth")}
        ></button>
        <button
          className={seventhInView ? "activeButton" : ""}
          onClick={() => scrollTo("seventh")}
        ></button>
        <button
          className={eighthInView ? "activeButton" : ""}
          onClick={() => scrollTo("eighth")}
        ></button>
        <button
          className={ninthInView ? "activeButton" : ""}
          onClick={() => scrollTo("ninth")}
        ></button>
      </>
    );
  }

  //gets the title of the slide shown on screen
  function getTitle() {
    return (
      <p>
        {
          selectedLanguage.find(
            (item: { id: string }) => item.id === activeSlide
          )?.header
        }
      </p>
    );
  }

  //updates language to english
  const updateLanguageEn = () => {
    setSelectedLanguage(EText);
  };
  //updates language to romanian
  const updateLanguageRo = () => {
    setSelectedLanguage(RText);
  };

  //returns all slides in an <InView> element to keep track if it is visible on screen(intersection-observer), and in an <Element> element to use the function "scrollTo"(react-scroll)
  function getSlides() {
    return (
      <>
        {/*first slide*/}
        <InView
          onChange={setfirstInView}
          threshold={0.63}
          className="inViewDiv"
        >
          <Element name={"first"}>
            <section
              className={classSelector("Slide ") + classSelector("first")}
              id={
                firstInView
                  ? classSelector("firstShown")
                  : classSelector("firstHidden")
              }
            >
              <div className={classSelector("firstSlideImage")}>
                <img src={imgfirst} id={classSelector("imgfirst")} />
              </div>
              <div className={classSelector("SlideTextfirst")}>
                <div id={classSelector("firstClipPathH1")}>
                  <h1>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "first"
                      )?.emphasis
                    }
                  </h1>
                </div>
                <div id={classSelector("firstClipPathH2")}>
                  <h2>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "first"
                      )?.rest
                    }{" "}
                    <a href="https://www.softimpact.net/">Softimpact</a>
                  </h2>
                </div>
                <p className={classSelector("SlideInfo")}>
                  {
                    selectedLanguage.find(
                      (item: { id: string }) => item.id === "first"
                    )?.info
                  }
                </p>
              </div>
            </section>
          </Element>
        </InView>

        {/*second slide*/}
        <InView
          onChange={setsecondInView}
          threshold={0.63}
          className="inViewDiv"
        >
          <Element name={"second"}>
            <section
              className={classSelector("Slide ") + classSelector("second")}
              id={
                secondInView
                  ? classSelector("secondShown")
                  : classSelector("secondHidden")
              }
            >
              <div className={classSelector("secondSlideImage")}></div>
              <div className={classSelector("SlideTextsecond")}>
                <div id={classSelector("secondClipPathH1")}>
                  <h1>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "second"
                      )?.emphasis
                    }
                  </h1>
                </div>
                <div id={classSelector("secondClipPathH2")}>
                  <h2>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "second"
                      )?.rest
                    }
                  </h2>
                </div>
              </div>
            </section>
          </Element>
        </InView>

        {/*third slide*/}
        <InView
          onChange={setthirdInView}
          threshold={0.63}
          className="inViewDiv"
        >
          <Element name={"third"}>
            <section
              className={classSelector("Slide ") + classSelector("third")}
              id={
                thirdInView
                  ? classSelector("thirdShown")
                  : classSelector("thirdHidden")
              }
            >
              <div className={classSelector("thirdSlideImage")}></div>
              <div className={classSelector("SlideTextthird")}>
                <div id={classSelector("thirdClipPathH1")}>
                  <h1>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "third"
                      )?.emphasis
                    }
                  </h1>
                </div>
                <div id={classSelector("thirdClipPathH2")}>
                  <h2>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "third"
                      )?.rest
                    }
                  </h2>
                </div>
              </div>
            </section>
          </Element>
        </InView>

        {/*fourth slide*/}
        <InView
          onChange={setfourthInView}
          threshold={0.63}
          className="inViewDiv"
        >
          <Element name={"fourth"}>
            <section
              className={classSelector("Slide ") + classSelector("fourth")}
              id={
                fourthInView
                  ? classSelector("fourthShown")
                  : classSelector("fourthHidden")
              }
            >
              <div className={classSelector("fourthSlideImage")}></div>
              <div className={classSelector("SlideTextfourth")}>
                <div id={classSelector("fourthClipPathH1")}>
                  <h1>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "fourth"
                      )?.emphasis
                    }
                  </h1>
                </div>
                <div id={classSelector("fourthClipPathH2")}>
                  <h2>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "fourth"
                      )?.rest
                    }
                  </h2>
                </div>
              </div>
            </section>
          </Element>
        </InView>

        {/*fifth slide*/}
        <InView
          onChange={setfifthInView}
          threshold={0.63}
          className="inViewDiv"
        >
          <Element name={"fifth"}>
            <section
              className={classSelector("Slide ") + classSelector("fifth")}
              id={
                fifthInView
                  ? classSelector("fifthShown")
                  : classSelector("fifthHidden")
              }
            >
              <div className={classSelector("fifthSlideImage")}></div>
              <div className={classSelector("SlideTextfifth")}>
                <div id={classSelector("fifthClipPathH1")}>
                  <h1>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "fifth"
                      )?.emphasis
                    }
                  </h1>
                </div>
                <div id={classSelector("fifthClipPathH2")}>
                  <h2>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "fifth"
                      )?.rest
                    }
                  </h2>
                </div>
              </div>
            </section>
          </Element>
        </InView>

        {/*sixth slide*/}
        <InView
          onChange={setsixthInView}
          threshold={0.63}
          className="inViewDiv"
        >
          <Element name={"sixth"}>
            <section
              className={classSelector("Slide ") + classSelector("sixth")}
              id={
                sixthInView
                  ? classSelector("sixthShown")
                  : classSelector("sixthHidden")
              }
            >
              <div className={classSelector("sixthSlideImage")}></div>
              <div className={classSelector("SlideTextsixth")}>
                <div id={classSelector("sixthClipPathH1")}>
                  <h1>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "sixth"
                      )?.emphasis
                    }
                  </h1>
                </div>
                <div id={classSelector("sixthClipPathH2")}>
                  <h2>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "sixth"
                      )?.rest
                    }
                  </h2>
                </div>
              </div>
            </section>
          </Element>
        </InView>

        {/*seventh slide*/}
        <InView
          onChange={setseventhInView}
          threshold={0.63}
          className="inViewDiv"
        >
          <Element name={"seventh"}>
            <section
              className={classSelector("Slide ") + classSelector("seventh")}
              id={
                seventhInView
                  ? classSelector("seventhShown")
                  : classSelector("seventhHidden")
              }
            >
              <div className={classSelector("seventhSlideImage")}></div>
              <div className={classSelector("SlideTextseventh")}>
                <div id={classSelector("seventhClipPathH1")}>
                  <h1>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "seventh"
                      )?.emphasis
                    }
                  </h1>
                </div>
                <div id={classSelector("seventhClipPathH2")}>
                  <h2>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "seventh"
                      )?.rest
                    }
                  </h2>
                </div>
              </div>
            </section>
          </Element>
        </InView>

        {/*eighth slide*/}
        <InView
          onChange={seteighthInView}
          threshold={0.63}
          className="inViewDiv"
        >
          <Element name={"eighth"}>
            <section
              className={classSelector("Slide ") + classSelector("eighth")}
              id={
                eighthInView
                  ? classSelector("eighthShown")
                  : classSelector("eighthHidden")
              }
            >
              <div className={classSelector("eighthSlideImage")}></div>
              <div className={classSelector("SlideTexteighth")}>
                <div id={classSelector("eighthClipPathH1")}>
                  <h1>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "eighth"
                      )?.emphasis
                    }
                  </h1>
                </div>
                <div id={classSelector("eighthClipPathH2")}>
                  <h2>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "eighth"
                      )?.rest
                    }
                  </h2>
                </div>
              </div>
            </section>
          </Element>
        </InView>

        {/*ninth slide*/}
        <InView
          onChange={setninthInView}
          threshold={0.63}
          className="inViewDiv"
        >
          <Element name={"ninth"}>
            <section
              className={classSelector("Slide ") + classSelector("ninth")}
              id={
                ninthInView
                  ? classSelector("ninthShown")
                  : classSelector("ninthHidden")
              }
            >
              <div className={classSelector("ninthSlideImage")}></div>
              <div className={classSelector("SlideTextninth")}>
                <div id={classSelector("ninthClipPathH1")}>
                  <h1>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "ninth"
                      )?.emphasis
                    }
                  </h1>
                </div>
                <div id={classSelector("ninthClipPathH2")}>
                  <h2>
                    {
                      selectedLanguage.find(
                        (item: { id: string }) => item.id === "ninth"
                      )?.rest
                    }
                  </h2>
                </div>
              </div>
            </section>
          </Element>
        </InView>
      </>
    );
  }

  return (
    <>
      {/*}
      <div id="debugmiddle"> //line for alligning elements
        <div id="debugline"></div>
  </div> {*/
      /* Make title only visible to pc users (wont fit on a mobile screen) */}
      {/Android|iPhone/i.test(navigator.userAgent) ? (
        <></>
      ) : (
        <div id="title">{getTitle()}</div>
      )}
      <div id={device + "NavBar"}>
        <div id={device + "NavBarLanguages"}>
          <img src={en} onClick={updateLanguageEn} />
          <img src={ro} onClick={updateLanguageRo} />
        </div>
        <div id={device + "NavBarContact"}>
          <p>
            <a href="mailto:nadimnohra24@gmail.com">nadimnohra24@gmail.com</a>
          </p>
        </div>
      </div>
      <div id={device + "ButtonsDiv"}>{getButtons()}</div>
      <div className="slides">{getSlides()}</div>
    </>
  );
}

export default App;
