import "./App.css";
import LoginForm from "./component/LoginForm";
import Navbar from "./component/Navbar";
import UserDetails from "./component/UserDetails";

import { useState } from "react";
import { IUserData } from "./interfaces";

function App() {
  const company = "CODEAWY";
  const about = "ABOUT US";
  const [isLogeed, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    username: "",
    password: "",
    email: "",
    address :"",
    fullname :""
    
    
  });

  return (
    <>
      <Navbar
        companyName={company}
        AboutUs={about}
        isLogeed={isLogeed}
        setIsLoggedIn={setIsLoggedIn}
      />
      {isLogeed ? (
        <UserDetails user={userData} />
      ) : (
        <LoginForm
          setIsLoggedIn={setIsLoggedIn}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </>
  );
}

export default App;
