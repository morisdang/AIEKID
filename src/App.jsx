import { useState, useEffect } from "react";

import HomePage from "./container/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hambo from "./container/hambo";

import HomeStore from "./components/Event/User/HomeStore";
import ConfirmPlayGame from "./components/Event/User/ConfirmPlayGame";
import PlayGameInterface from "./components/Event/User/PlaygameInterface";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getCookie } from "./utils/common";
import PersonalDetails from "./components/PersonalDetails";
import LoginPage from "./components/Login/login";
import RegisterPage from "./components/Register/register";
import BookLib from "./container/book_lib";
import EventDetail from "./components/EventDetail";
import HomeExplore from "./components/Explore/Homstore";
import CourseExplore from "./components/Explore/Course";
import MemoryGame from "./components/Event/minigame/memory/MemoryGame";
import GuessWordGame from "./components/Event/minigame/guess/GuessWordGame";
import Lesson from "./components/Explore/Lesson";
import Gallery from './components/gallery'

function App() {
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [is_show, setIsShow] = useState(true);
  const [is_footerShow, setIsFooterShow] = useState(true);
  const location = useLocation();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const pathname = location.pathname;

    const handleLoad = () => {
      setLoading(false);
      console.log(pathname);
      setIsShow(
        !["profile", "playgame"].some((char) => pathname.includes(char))
      );
      setIsFooterShow(
        !["hamsbo", "profile", "playgame", "pin"].some((char) =>
          pathname.includes(char)
        )
      );
    };

    // Add event listener for window load
    window.addEventListener("load", handleLoad);
    window.addEventListener("popstate", handleLoad);
    console.log(pathname);
    // Clean up the event listener
    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("popstate", handleLoad);
    };
  }, [location]);

  useEffect(() => {
    const userId = getCookie("id");
    if (
      !userId &&
      !["/login", "/register"].includes(window.location.pathname)
    ) {
      // window.location.href = '/login';
    } else {
      setUserId(userId);
      setProfile({
        email: getCookie("email"),
        family_name: getCookie("family_name"),
        given_name: getCookie("given_name"),
        picture: getCookie("picture"),
        name: getCookie("name"),
      });
    }
  }, [userId]);

  return (
    <div
      className={`App flex flex-column min-h-screen ${loading ? "" : "loaded"}`}
    >
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      <Header is_show={is_show} user_profile={profile} />

      <Routes>
        {userId ? (
          <>
            <Route path="/hamsbo" element={<Hambo />} />
            <Route path="/" element={<HomePage />} />
            <Route
              exact
              path="/event/:event_id/playgame"
              element={<PlayGameInterface />}
            />
            <Route
              exact
              path="/event/:event_id/pin"
              element={<ConfirmPlayGame />}
            />
            <Route
              exact
              path="/event/:event_id/memory"
              element={<MemoryGame />}
            />
            <Route
              exact
              path="/event/:event_id/guess"
              element={<GuessWordGame />}
            />
            <Route exact path="/event" element={<HomeStore />} />
            <Route exact path="/lib" element={<BookLib />} />
            <Route exact path="/profile" element={<PersonalDetails />} />
            <Route
              exact
              path="/event/:event_id/detail"
              element={<EventDetail />}
            />
            <Route path="/explore/:explore_id/:lesson_id" element={<Lesson />} />
            <Route exact path="/gallery" element={<Gallery />} />

            <Route exact path="/explore" element={<HomeExplore />} />
            <Route
              exact
              path="/explore/:explore_id/"
              element={<CourseExplore />}
            />
            {/* <Route exact path="/event/quiz/:id" element={<UserQuiz />} /> */}
          </>
        ) : (
          <>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route path="/hamsbo" element={<Hambo />} />
            <Route path="/" element={<HomePage />} />
            <Route
              exact
              path="/event/:event_id/playgame"
              element={<PlayGameInterface />}
            />
            <Route
              exact
              path="/event/:event_id/pin"
              element={<ConfirmPlayGame />}
            />
            <Route
              exact
              path="/event/:event_id/memory"
              element={<MemoryGame />}
            />
            <Route
              exact
              path="/event/:event_id/guess"
              element={<GuessWordGame />}
            />
            <Route exact path="/event" element={<HomeStore />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/lib" element={<BookLib />} />
            <Route exact path="/profile" element={<PersonalDetails />} />
            <Route
              exact
              path="/event/:event_id/detail"
              element={<EventDetail />}
            />
            <Route path="/explore/:explore_id/:lesson_id" element={<Lesson />} />
            <Route exact path="/explore" element={<HomeExplore />} />

            <Route
              exact
              path="/explore/:explore_id/"
              element={<CourseExplore />}
            />

          </>
        )}
      </Routes>

      <Footer is_show={is_footerShow} />
    </div>
  );
}

export default App;
