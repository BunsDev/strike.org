import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { Typography } from 'antd';
import imageApi from 'assets/img/landingpage/Group-379.png';
import vector from 'assets/img/landingpage/Vector-379.png';
import imgMac from 'assets/img/landingpage/Group-1006.png';
import imgBlock from 'assets/img/landingpage/Group-384.png';
import V10b from 'assets/img/landingpage/Vector-10-b.png';
import V4b from 'assets/img/landingpage/Vector-4-b.png';
import V14b from 'assets/img/landingpage/Vector-14-b.png';
import V17b from 'assets/img/landingpage/Vector-17-b.png';
import V19b from 'assets/img/landingpage/Vector-19-b.png';
import V21b from 'assets/img/landingpage/Vector-21-b.png';

const Section4Wrapper = styled.div`
  width: 100%;

  background-color: var(--color-bg-main);

  .flex {
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  

  .column1,.column4,.column5 {
    flex: 1 1 0%;
    padding-top: 125px;
    padding-left: 190px;

    .typography {
      font-size: 25px;
      font-weight: 500;
      color: #107DEF;
      padding-bottom: 10px;
    }

    .content-1{
      font-size: 49px;
      font-weight: 500;
      color: black;
      width: 510px;
      display: block;
      padding-bottom: 30px;
      @media only screen and (max-width: 768px) {
        width: 90%;
        font-size: 31px;
      }
      @media only screen and (max-width: 450px) {
        width: 100%;
      }
    }

    .content-2 {
      font-size: 18px;
      font-weight: 500;
      color: #aaaaaa;
      display:block;
      width: 510px;
      padding-bottom: 40px;
      @media only screen and (max-width: 768px) {
        width: 90%;
      }
      @media only screen and (max-width: 450px) {
        width: 100%;
      }
    }

    .btn-docs {
      color: #ffffff;
      font-size: 18px;
      font-weight: 800;
      margin-bottom: 189px;
      outline: none;
      padding: 10.5px 30px 10.5px 30px;
      background: #107DEF;
      border: none;
      border-radius: 8px;
      box-shadow: 0px 3px 20px rgba(18, 114, 236, 0.4);
      cursor: pointer;
      @media only screen and (max-width: 768px) {
        margin-bottom: 31px;
      }
    }
  }

  .column1 {
    @media only screen and (max-width: 768px) {
      padding-left: 20px;
      padding-bottom : 10px;
      padding-right: 20px;
    }
  }

  .column4 {
    @media only screen and (max-width: 768px) {
      padding-left: 20px;
      padding-bottom: 10px;
      padding-right: 20px;
    }
  }

  .column2 {
    padding-left: 120px;
    @media only screen and (max-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
    }
    .imageApi {
      @media only screen and (max-width: 768px) {
        position: static!important;
        margin-top: 0px!important;
        width: 75%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
      }
    }
    .vector {
      width: 44%;
      left: 26%!important;
      top: 4%!important;
    }
  }

  .column2, .column3,.column6{
    flex: 1;
    position relative;

    .imageApi {
      margin-top: 134px;
      position: absolute;
      z-index: 5;
      
    }

    .vector{
      position: absolute;
      z-index: 4;
      top: 89px;
      left: 51px;
    }
  }

  .column3 {
    padding-left: 70px;
    padding-bototm: 120px;
    @media only screen and (max-width: 768px) {
      padding-left: 0;
      padding-right: 30px;
    }
    .imageApi {
      margin-top: 0;
      @media only screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
      }
    }

    img.V10b {
        position: absolute;
        right: 20%;
        top: -8%;
    }

    img.V4b {
      position: absolute;
      top: 23%;
      @media only screen and (max-width: 768px) {
        position: absolute;
        top: 100px;
        left: 0px;
      }
      @media only screen and (max-width: 670px) {
        top: 70px;
        width: 100px;
        height: 170px;
      }
      @media only screen and (max-width: 450px) {
        top: 40px;
      }
    }

    img.V14b {
      position: absolute;
      top: 62%;
      right: 12%;
      z-index: 20;
      @media only screen and (max-width: 768px) {
        left: 78%!important;
        top: 404px;
      }
      @media only screen and (max-width: 670px) {
        top: 280px;
        right: 15%;
      }
      @media only screen and (max-width: 500px) {
        top: 180px;
        right: 15%;
      }
    }
  }

  .column3-flex {
    @media only screen and (max-width: 768px) {
      flex-direction: column-reverse
    }
  }

  .column5 {
    @media only screen and (max-width: 768px) {
      padding-top: 90%!important;
      padding-left: 20px;
      padding-right: 15px;
    }
  }

  .column6 {
    padding-bottom: 215px;

    .imageApi {
      @media only screen and (max-width: 768px) {
        margin-top: 26px;
        padding-left: 20px;
        width: 100%;
        padding-right: 20px;
      }
    }

    img.V17b {
      position: absolute;
      top: 21%;
      right: 60%;
      @media only screen and (max-width: 768px) {
        right: 39%;
      }
     
    }

    img.V19b {
      position: absolute;
      top: 57%;
      right: 71%;
      @media only screen and (max-width: 768px) {
        top: 99%;
        right: 60%;
      }
    }

    img.V21b{
      position: absolute;
      top: 53%;
      left: 48%;
      @media only screen and (max-width: 768px) {
        top: 110%;
        left: 71%;
      }
    }
  }

  }
`;

function Section4({ history }) {
  const [isOpened, setIsOpened] = useState(false);
  const handleLink = url => {
    setIsOpened(false);
    window.open(url, '_blank');
  };
  return (
    <Section4Wrapper className="flex flex-column" id="developer">
      <div className="flex">
        <div className="column1">
          <Typography className="typography">Developers</Typography>
          <span className="content-1">
            Comprehensive developer API & SDK to build your custom application
          </span>
          <span className="content-2">
            Build your own custom application by accessing a non-custodial money
            market with our developer APIs and SDKs. &nbsp;This will enable developers
            to quickly build their own application tailored to fit the Strike
            protocol.
          </span>
          <button
            className="btn-docs"
            type="button"
            onClick={() => handleLink('https://docs.strike.org/')}
          >
            Developer Docs
          </button>
        </div>
        <div className="column2">
          <img className="imageApi" src={imageApi} alt="" />
          <img className="vector" src={vector} alt="" />
        </div>
      </div>
      <div className="flex column3-flex">
        <div className="column3">
          <img src={V10b} className="V10b" alt="" />
          <img className="imageApi" src={imgMac} alt="" />
          <img src={V4b} className="V4b" alt="" />
          <img src={V14b} className="V14b" alt="" />
        </div>
        <div className="column4">
          <Typography className="typography">Try Strike Finance</Typography>
          <span className="content-1">Friendly user interface</span>
          <span className="content-2">
            The Strike App enables users access to a fully decentralized money
            market powered on Ethereum 24/7/365 with a user-interface, api, or
            smart contracts.
          </span>
          <button
            className="btn-docs"
            type="button"
            onClick={() => handleLink('https://app.strike.org/')}
          >
            Launch App
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="column5">
          <Typography className="typography">Try Strike Finance</Typography>
          <span className="content-1">Strike Protocol</span>
          <span className="content-2">
            Strike enables users and developers to supply digital assets onto
            the platform to earn from dynamic rates provided by the protocol and
            use that supplied asset as collateral to borrow other supported
            digital assets all on-chain.
          </span>
          <button
            className="btn-docs"
            type="button"
            onClick={() => handleLink('https://strike.org/Whitepaper.pdf')}
          >
            Read The Whitepaper
          </button>
        </div>
        <div className="column6">
          <img src={V17b} className="V17b" alt="" />
          <img className="imageApi" src={imgBlock} alt="" />
          <img src={V19b} className="V19b" alt="" />
          <img src={V21b} className="V21b" alt="" />
        </div>
      </div>
    </Section4Wrapper>
  );
}

Section4.propTypes = {
  history: PropTypes.object
};

Section4.defaultProps = {
  history: {}
};

export default compose(withRouter)(Section4);
