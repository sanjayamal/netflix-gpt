import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser, selectUser } from "../appStore/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGPTSearchView } from "../appStore/gptSlice";
import { changeLanguage } from "../appStore/configSlice";
import lang from "../utils/langConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const preferredLang = useSelector((store) => store.config.lang);
  const showGPTSearch = useSelector((store) => store.gpt?.showGPTSearch);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value ?? "en";
    dispatch(changeLanguage(lang));
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between flex-col md:flex-row">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (
            <select
              className="bg-transparent text-white p-2 m-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map(({ identifier, name }) => (
                <option
                  key={identifier}
                  value={identifier}
                  className="bg-gray-600"
                >
                  {name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-indigo-600 text-white mx-2 my-2 py-2 px-4 rounded-lg"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch
              ? lang[preferredLang].home
              : lang[preferredLang].movieSuggestion}
          </button>

          {/* <img className="w-12 h-12" src={user.photoURL} alt="user icon" /> */}
          <img
            className="hidden md:inline-block h-10 w-10 rounded-full ring-2 ring-white m-2"
            src={user.photoURL}
            alt="user"
          />
          <button onClick={handleSignOut} className="font-bold text-white m-2">
            {lang[preferredLang].signOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
