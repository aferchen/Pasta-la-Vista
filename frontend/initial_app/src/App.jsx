import React, { useState } from "react";
import BrowseCourses from "./components/Browse";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import Summary from "./components/Summary";
import Navigation from "./components/Navigation";
import User from './components/User';
import UserInfo from "./components/UserInfo";
import About from "./components/About";
import PutUserInfo from "./components/PutUserInfo"

const App = () => {
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState("browse");
  const [summaryData, setSummaryData] = useState({});
  const [user, setUser] = useState(null);
  

  return (
    <div className="app-container">
      <Navigation setStep={setStep} />

      {step === "browse" && (
        <BrowseCourses cart={cart} setCart={setCart} setStep={setStep} />
      )}
      {step === "cart" && (
        <Cart cart={cart} setCart={setCart} setStep={setStep} />
      )}
      {step === "payment" && (
        <Payment
          cart={cart}
          setStep={setStep}
          setSummaryData={setSummaryData}
          user={user}
        />
      )}
      {step === "summary" && (
        <Summary
          cart={cart}
          setCart={setCart}
          setStep={setStep}
          user={user}
          name={summaryData.name}
          email={summaryData.email}
          cardNumber={summaryData.cardNumber}
          expiryDate={summaryData.expiryDate}
          cvc={summaryData.cvc}
        />
      )}
      {step === "user" && (user ? <UserInfo user={user} setStep={setStep} setUser={setUser} />  : <User user={user} setUser={setUser} setStep={setStep} />)}
      {step === "PutUserInfo" && (<PutUserInfo user={user} setStep={setStep} setUser={setUser}/> )}
      {step === "about" && <About setStep={setStep}/>}
    </div>
  );
};

export default App;
