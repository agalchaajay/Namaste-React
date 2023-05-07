import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const RootApp = (prop) => {
  const condn = prop.condn;
  if (condn) {
    return (
      <div className="Main">
        <div className="Header">
          <Header />
        </div>
        <Body />
        <Footer />
      </div>
    );
  }
  return <Body />;
};

export const searchCard = (x, event) => {
  alert(x + " Great Shot!" + event.type);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RootApp condn={true} />);
