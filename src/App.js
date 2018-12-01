import React, { Component } from "react";
import "./App.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

class App extends Component {
  render() {
    const final_date = new Date(2022, 7, 7);
    const today = new Date();
    const days = Date.daysBetween(final_date, today);
    const url = "days-of-ivan.herokuapp.com";
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <p className="share-text">
              Comparte esto con tus familiares, los que se enhuesaron con su
              voto.
            </p>
            <div className="share-buttons">
              <FacebookShareButton
                className="share-button"
                url={url}
                quote={"¿Cuantos días le quedan a Iván Duque? "}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                className="share-button"
                url={url}
                title={"¿Cuantos días le quedan a Iván Duque? " + url}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <WhatsappShareButton className="share-button" url={url}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
          </div>
          <p>Quedan</p>
          <h1>{days}</h1>
          <p>días del gobierno de Iván Duque.</p>
        </header>
      </div>
    );
  }
}

Date.daysBetween = function(date1, date2) {
  var one_day = 1000 * 60 * 60 * 24; //Dia en milisegundos
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();
  var difference_ms = date1_ms - date2_ms;
  return Math.round(difference_ms / one_day);
};

export default App;
