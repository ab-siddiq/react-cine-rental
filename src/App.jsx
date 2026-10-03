import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import { DarkModeContext, MovieContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent/MainContent";
import { cartReducer, initialState } from "./reducers/CartReducers";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
            <Header />
            <MainContent />
            <Footer />
          </div>
          <ToastContainer />
        </MovieContext.Provider>
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
