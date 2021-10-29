import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import ethImg from 'assets/img/eth.png';
import wbtcImg from 'assets/img/wbtc.png';
import usdcImg from 'assets/img/usdc.png';
import busdImg from 'assets/img/busd.png';
import compImg from 'assets/img/comp.png';
import linkImg from 'assets/img/link.png';
import strkImg from 'assets/img/strk.png';
import uniImg from 'assets/img/uni.png';
import usdtImg from 'assets/img/usdt.png';
import sxpImg from 'assets/img/sxp.png';
import vector3 from 'assets/img/landingpage/Vector-3.png';
import vector4 from 'assets/img/landingpage/Vector-4.png';
import vector14 from 'assets/img/landingpage/Vector-14.png';
import vector15 from 'assets/img/landingpage/Vector-15.png';
import vector5 from 'assets/img/landingpage/rectangle-opacity-2.png';
import { LinearProgress, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 10,
    borderRadius: 5
  },
  colorPrimary: {
    width: '450px',
    marginLeft: '40px',
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff'
  }
}))(LinearProgress);

const Section2Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-bg-main);
  margin-top: 314px;
  display: flex;
  flex-direction: column;
  padding-left: 84px;
  position: relative;
  margin-left: 120px;
  margin-right: 120px;
  margin-bottom: 163px;
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
    margin-bottom: 0;
  }

  .earn-section {
    display: flex;
    align-items: center;
    z-index: 3;
    margin-bottom: 163px;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      margin-top: -17%;
      padding-right: 119px;
    }

    .apy-info {
      flex: 1 1 0%;
      margin-right: 105px;
      @media only screen and (max-width: 768px) {
        margin-top: 100px;
      }

      .vector3 {
        position: absolute;
        left: 1283px;
        top: -89px;
        z-index: -1;
      }

      .vector4 {
        position: absolute;
        left: 1216px;
        top: 361px;
        z-index: -1;
      }
      .vector5 {
        position: absolute;
        left: 1466px;
        z-index: -1;
        top: 274px;
      }

      .vector14 {
        position: absolute;
        top: 58%;
        left: 1.75%;
        z-index: -1;
      }

      .vector15 {
        position: absolute;
        left: -1%;
        top: 72%;
        z-index: -1;
      }

      .info-item-list {
        width: 530px;
        border-radius: 20px;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
        background: rgba(255, 255, 255, 0.5);

        h3 {
          display: block;
          font-size: 20px;
          font-weight: 800;
          color: #0b0f23;
          padding-top: 25px;
          padding-left: 40px;
          padding-bottom: 8px;
        }

        p {
          font-size: 20px;
          font-weight: 400;
          padding-top: 25px;
          padding-left: 40px;
          padding-bottom: 8px;
        }

        .money-market {
          padding-top: 25px;
          padding-left: 40px;
          padding-bottom: 8px;

          .money {
            color: #0b0f23;
            font-size: 25px;
            font-weight: 800;
            margin-right: 12px;
          }
          .percent,
          .percent-section-2 {
            font-size: 20px;
            font-weight: 800;
            background: #f84960;
            border-radius: 5px;
            color: #ffffff;
            padding: 5px 7px 1px 7px;
          }
          .percent-section-2 {
            background: #06c270;
          }
        }

        @media only screen and (max-width: 768px) {
          margin-top: -72px;
        }

        .info-item {
          border-bottom: 1px solid #eef1fa;
          padding: 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .info-item-icon {
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            margin-right: 32px;
            img {
              display: inline-block;
              vertical-align: top;
              max-width: 100%;
              max-height: 100%;
            }
          }
          .info-item-content {
            width: calc(100% - 66px);
            display: flex;
            align-items: center;
            justify-content: space-between;

            .info-item-title {
              display: flex;
              margin-bottom: 3px;
              font-size: 18px;
              font-weight: 900;
              color: #39496a;
            }

            .info-item-prop {
              font-size: 18px;
              font-weight: 600;
              color: #39496a;
            }

            .info-item-data-value {
              display: flex;
              justify-content: flex-end;
              text-align: right;
              font-size: 20px;
              font-weight: 600;
              color: #39496a;

              &.green {
                color: #10741c;
              }
            }

            .info-item-data-prop {
              display: flex;
              justify-content: flex-end;
              color: #c5cbd4;
              text-align: right;
              font-size: 19px;
              font-weight: 600;
            }
          }
        }
      }
    }

    .earn-content {
      flex: 1 1 0%;
      margin-right: 85px;
      p {
        font-size: 25px;
        font-weight: 500;
        color: #107def;
        @media only screen and (max-width: 768px) {
          font-size: 20px;
        }
      }
      h4 {
        font-size: 49px;
        font-weight: 500;
        color: #0b0f23;
        @media only screen and (max-width: 768px) {
          font-size: 25px;
        }
      }

      h5 {
        font-size: 18px;
        font-weight: 500;
        color: #6d6f7b;
        @media only screen and (max-width: 768px) {
          font-size: 16px;
        }
      }
    }
  }

  .earn-section-2 {
    display: flex;
    align-items: center;
    z-index: 3;
    @media only screen and (max-width: 768px) {
      flex-direction: column-reverse;
      margin-top: -17%;
      padding-right: 119px;
      padding-bottom: 12%;
    }
    .apy-info-section-2 {
      flex: 1 1 0%;
      margin-right: 105px;
      @media only screen and (max-width: 768px) {
        margin-top: 100px;
      }

      .vector3 {
        position: absolute;
        left: 1283px;
        top: -89px;
        z-index: -1;
        @media only screen and (max-width: 768px) {
          display: none;
        }
      }

      .vector4 {
        position: absolute;
        left: 1216px;
        top: 361px;
        z-index: -1;
        @media only screen and (max-width: 768px) {
          display: none;
        }
      }
      .vector5 {
        position: absolute;
        left: 1466px;
        z-index: -1;
        top: 274px;
        @media only screen and (max-width: 768px) {
          display: none;
        }
      }

      .vector14 {
        position: absolute;
        top: 58%;
        left: 1.75%;
        z-index: -1;
        @media only screen and (max-width: 768px) {
          display: none;
        }
      }

      .vector15 {
        position: absolute;
        left: -1%;
        top: 72%;
        z-index: -1;
        @media only screen and (max-width: 768px) {
          display: none;
        }
      }

      .info-item-list {
        width: 530px;
        border-radius: 20px;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
        background: rgba(255, 255, 255, 0.5);

        h3 {
          display: block;
          font-size: 20px;
          font-weight: 800;
          color: #0b0f23;
          padding-top: 25px;
          padding-left: 40px;
          padding-bottom: 8px;
        }

        p {
          font-size: 20px;
          font-weight: 400;
          padding-top: 25px;
          padding-left: 40px;
          padding-bottom: 8px;
        }

        .money-market {
          padding-top: 25px;
          padding-left: 40px;
          padding-bottom: 8px;

          .money {
            color: #0b0f23;
            font-size: 25px;
            font-weight: 800;
            margin-right: 12px;
          }
          .percent,
          .percent-section-2 {
            font-size: 20px;
            font-weight: 800;
            background: #f84960;
            border-radius: 5px;
            color: #ffffff;
            padding: 5px 7px 1px 7px;
          }
          .percent-section-2 {
            background: #06c270;
          }
        }

        @media only screen and (max-width: 768px) {
          width: 100%;
          margin-top: -72px;
        }

        .info-item {
          border-bottom: 1px solid #eef1fa;
          padding: 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .info-item-icon {
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            margin-right: 32px;
            img {
              display: inline-block;
              vertical-align: top;
              max-width: 100%;
              max-height: 100%;
            }
          }
          .info-item-content {
            width: calc(100% - 66px);
            display: flex;
            align-items: center;
            justify-content: space-between;

            .info-item-title {
              display: flex;
              margin-bottom: 3px;
              font-size: 18px;
              font-weight: 900;
              color: #39496a;
            }

            .info-item-prop {
              font-size: 18px;
              font-weight: 600;
              color: #39496a;
            }

            .info-item-data-value {
              display: flex;
              justify-content: flex-end;
              text-align: right;
              font-size: 20px;
              font-weight: 600;
              color: #39496a;

              &.green {
                color: #10741c;
              }
            }

            .info-item-data-prop {
              display: flex;
              justify-content: flex-end;
              color: #c5cbd4;
              text-align: right;
              font-size: 19px;
              font-weight: 600;
            }
          }
        }
      }
    }

    .earn-content-section-2 {
      @media only screen and (max-width: 768px) {
      }
      flex: 1 1 0%;
      margin-right: 85px;
      p {
        font-size: 25px;
        font-weight: 500;
        color: #107def;
        @media only screen and (max-width: 768px) {
          font-size: 20px;
        }
      }
      h4 {
        font-size: 49px;
        font-weight: 500;
        color: #0b0f23;
        @media only screen and (max-width: 768px) {
          font-size: 25px;
        }
      }

      h5 {
        font-size: 18px;
        font-weight: 500;
        color: #6d6f7b;
        @media only screen and (max-width: 768px) {
          font-size: 16px;
        }
      }
    }
  }

  p {
    font-size: 22px;
    font-weight: 900;
    color: #277ee6;
  }
  h4 {
    max-width: 560px;
    margin-top: 24px;

    @media only screen and (max-width: 768px) {
      font-size: 24px;
      margin-top: 5px;
    }
  }

  h5,
  .h5-section-2 {
    max-width: 580px;
    margin: 28px 0;

    @media only screen and (max-width: 768px) {
      font-size: 14px;
      margin: 10px 0;
    }
  }

  .h5-section-2 {
    max-width: 437px;
  }

  @media only screen and (max-width: 768px) {
  }

  .divider {
    margin-left: 40px;
    width: 450px;
  }

  .progress-bar {
    .eth {
      padding-bottom: 21px;
      .market-name {
        margin-left: 40px;

        .name {
          font-size: 14px;
          font-weight: 800;
          color: #6d6f7b;
        }
        .percent-progress {
          font-size: 16px;
          font-weight: 800;
          color: #6d6f7b;
          float: right;
          margin-right: 49px;
        }
      }
    }
  }

  .supply {
    display: flex;
    justify-content: space-between;
    padding: 15px 40px 27px 40px;

    .supply-volume {
      .supply-volume-text {
        display: block;
        font-size: 14px;
        font-weight: 500;
        color: #9d9fa7;
      }
      .supply-volume-money {
        font-size: 20px;
        font-weight: 500;
        color: #0b0f23;
      }
    }
    .supplier {
      .supplier-text {
        display: block;
        font-size: 14px;
        font-weight: 500;
        color: #9d9fa7;
      }
      .supplier-number,
      .supplier-number-section-2 {
        font-size: 20px;
        font-weight: 500;
        color: #0b0f23;
      }
      .supplier-number-section-2 {
        text-align: right;
        padding-right: 3px;
        display: block;
      }
    }
  }
`;

const ICONS = {
  UNI: uniImg,
  ETH: ethImg,
  USDT: usdtImg,
  USDC: usdcImg,
  LINK: linkImg,
  BUSD: busdImg,
  COMP: compImg,
  WBTC: wbtcImg,
  STRK: strkImg,
  SXP: sxpImg
};

const valueProgress = [
  { name: 'ETH', value: 40.22 },
  { name: 'DAI', value: 50.23 },
  { name: 'USDC', value: 9.88 }
];
console.log(valueProgress[0].value)

function Section2({ history, markets }) {

  const handleLink = () => {
    window.open('https://app.strike.org', '_blank');
  };
  return (
    <Section2Wrapper id="earn">
      <div className="earn-section">
        <div className="earn-content">
          <p>Market</p>
          <h4>Supply Collateral to Strike while controlling your keys</h4>
          <h5>
            Strike users control all of their digital assets on a non-custodial
            protocol while earning a variable rate based on market demands of
            that asset. Rates are earned per Ethereum block mined
          </h5>
        </div>
        <div className="apy-info">
          <img src={vector3} className="vector3" />
          <div className="info-item-list">
            <h3>Total Supply</h3>
            <Divider className="divider" />
            <div className="money-market">
              <span className="money">$20,395,867,666.22</span>
              <span className="percent">+5.88%</span>
            </div>
            <Divider className="divider" />
            <p>Top 3 Markets</p>
            <div className="progress-bar">
              {valueProgress.map((item, index) => {
                return (
                  <div className="eth" key={index}>
                    <div className="market-name">
                      <span className="name">{item.name}</span>
                      <span className="percent-progress">{item.value}%</span>
                    </div>
                    <BorderLinearProgress
                      variant="determinate"
                      value={item.value}
                    />
                  </div>
                );
              })}
              <img src={vector5} className="vector5" />

              <img src={vector4} className="vector4" />

              <Divider className="divider" />
            </div>
            <div className="supply">
              <div className="supply-volume">
                <span className="supply-volume-text">24h Supply Volume</span>
                <span className="supply-volume-money">$95,867,666.22</span>
              </div>
              <div className="supplier">
                <span className="supplier-text"># of Suppliers</span>
                <span className="supplier-number">1384393</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="earn-section-2">
        <div className="apy-info-section-2">
          <img src={vector14} className="vector14" />
          <div className="info-item-list">
            <h3>Total Borrow</h3>
            <Divider className="divider" />
            <div className="money-market">
              <span className="money">$20,395,867,666.22</span>
              <span className="percent-section-2">-5.88%</span>
            </div>
            <Divider className="divider" />
            <p>Top 3 Markets</p>
            <div className="progress-bar">
              {valueProgress.map((item, index) => {
                return (
                  <div className="eth" key={index}>
                    <div className="market-name">
                      <span className="name">{item.name}</span>
                      <span className="percent-progress">{item.value}%</span>
                    </div>
                    <BorderLinearProgress
                      variant="determinate"
                      value={item.value}
                    />
                  </div>
                );
              })}

              <img src={vector15} className="vector15" />

              <Divider className="divider" />
            </div>
            <div className="supply">
              <div className="supply-volume">
                <span className="supply-volume-text">24h Borrow Volume</span>
                <span className="supply-volume-money">16790</span>
              </div>
              <div className="supplier">
                <span className="supplier-text"># of Borrowers</span>
                <span className="supplier-number-section-2">502</span>
              </div>
            </div>
          </div>
        </div>
        <div className="earn-content-section-2">
          <p>Market</p>
          <h4>Access Liquidity from Strike on-demand on any asset</h4>
          <h5 className="h5-section-2">
            With the Strike protocols decentralized nature, users and developers
            can access liquidity on-demand from their supplied collateral
          </h5>
        </div>
      </div>
    </Section2Wrapper>
  );
}

Section2.propTypes = {
  history: PropTypes.object
};

Section2.defaultProps = {
  history: {}
};

export default compose(withRouter)(Section2);
