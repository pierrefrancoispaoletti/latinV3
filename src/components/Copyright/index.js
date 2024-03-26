import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./copyright.style.js";
import {
  faEnvelope,
  faHeart,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  facebook,
  instagram,
  mail,
  nomEtab,
  phoneNumber,
  url,
} from "../../_const";
import { CopyrightStyled } from "./copyright.style.js";
const Copyright = () => {
  return (
    <CopyrightStyled>
      <div>
        <h3>Retrouvez nous sur : </h3>
      </div>
      <div className="footer__icons">
        <a target="_blank" href={facebook} rel="noreferrer">
          <FontAwesomeIcon
            style={{
              color: "rgb(59,89,152)",
              background: "white",
              borderRadius: "100%",
            }}
            size="3x"
            icon={faFacebook}
            pull="left"
          />
        </a>
        <a target="_blank" href={instagram} rel="noreferrer">
          <FontAwesomeIcon
            style={{ color: "rgb(63,114,155)", borderRadius: "100%" }}
            size="3x"
            icon={faInstagram}
            pull="right"
          />
        </a>
      </div>
      <div>
        <h3>Contactez nous ! </h3>
      </div>
      <div className="footer__icons">
        <a href={`mailto:${mail}`}>
          <FontAwesomeIcon
            style={{
              color: "rgb(63,114,155)",
            }}
            size="3x"
            icon={faEnvelope}
            pull="left"
          />
        </a>
        <a href={`tel:${phoneNumber}`}>
          <FontAwesomeIcon
            style={{
              color: "rgb(63,114,155)",
            }}
            size="3x"
            icon={faPhone}
          />
        </a>
      </div>
      <div className="footer__copyright" style={{ color: "white" }}>
        {"Copyright © "}
        <a className="link" href={url}>
          <span>{`${nomEtab}`}&nbsp;</span>
        </a>
        <span>{` ${new Date().getFullYear()}. `}</span>
      </div>
      <div className="footer__alvp">
        <a className="link" href="mailto:pef@alvp-developments.com">
          Made with
          <FontAwesomeIcon
            className="alvp__icon"
            color="darkred"
            icon={faHeart}
            size="2x"
          />
          by ALVP-Developments Ajaccio
        </a>
      </div>
    </CopyrightStyled>
  );
};

export default Copyright;
