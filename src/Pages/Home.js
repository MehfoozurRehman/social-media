import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

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
        <div className="home__features__card">
          <div className="home__features__card__heading">Fast</div>
          <div className="home__features__card__info">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          </div>
        </div>
        <div className="home__features__card">
          <div className="home__features__card__heading">Fast</div>
          <div className="home__features__card__info">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          </div>
        </div>
        <div className="home__features__card">
          <div className="home__features__card__heading">Fast</div>
          <div className="home__features__card__info">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          </div>
        </div>
        <div className="home__features__card">
          <div className="home__features__card__heading">Fast</div>
          <div className="home__features__card__info">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          </div>
        </div>
      </div>
    </div>
  );
}
