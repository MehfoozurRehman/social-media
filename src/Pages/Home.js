import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function FeatureCard({ heading, info }) {
  return (
    <div className="home__features__card">
      <div className="home__features__card__heading">{heading}</div>
      <div className="home__features__card__info">{info}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      <div className="home__heading">Welcome to Chatty</div>
      <div className="home__sub__heading">
        A great place to share your thoughts with friends
      </div>
      <div className="home__cta">
        <Link to="/signup" className="btn primary">
          Create New Account
        </Link>
        <Link to="/login" className="btn secondary">
          Login to existing Account
        </Link>
      </div>
      <div className="home__sub__heading">Features</div>
      <div className="home__features">
        <FeatureCard
          heading="fast"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea taki"
        />
        <FeatureCard
          heading="secure"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stetc"
        />
        <FeatureCard
          heading="privacy"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata san"
        />
        <FeatureCard
          heading="simple"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet"
        />
      </div>
    </div>
  );
}
