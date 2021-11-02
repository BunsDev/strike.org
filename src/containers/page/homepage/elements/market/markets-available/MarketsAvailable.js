import React, { useEffect, useState } from 'react';
import { accountActionCreators, connectAccount } from 'core';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { promisify } from 'utilities';
import { BigNumber } from 'bignumber.js';
// import moment from 'moment';
import commaNumber from 'comma-number';
import { Table, Pagination, Card } from 'antd';
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
import './MarketsAvailable.scss';

const format = commaNumber.bindWith(',', '.');
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
const columns = [
  {
    title: 'Market',
    dataIndex: 'market',
    key: 'market',
    render: (action, record) => (
      <div className="flex symbol">
        <div className="token-type mr-1">
          <img alt="symbol" src={ICONS[record?.underlyingSymbol]} />
        </div>
        <div className="mx-auto">
          <div>{record?.underlyingSymbol}</div>
          <div>{record?.underlyingName}</div>
        </div>
      </div>
    )
  },
  {
    title: 'Total Supply',
    dataIndex: 'totalSuplly',
    key: 'totalSupply',
    render: (action, record) => (
      <div className="total-supply">
        <div>
          <span>$</span>
          <span>
            {new Intl.NumberFormat({
              maximumSignificantDigits: 3
            }).format(record?.totalSupply)}
          </span>
        </div>
        <div>
          {format(
            new BigNumber(record?.totalSupplyUsd)
              .div(new BigNumber(record?.tokenPrice))
              .dp(0, 1)
              .toString(10)
          )}{' '}
          {record?.underlyingSymbol}
        </div>
      </div>
    )
  },
  {
    title: 'Supply APY',
    dataImdex: 'supplyAPY',
    key: 'supplyAPY',
    render: (action, record) => (
      <div className="total-supply">
        <div>
          <span>$</span>
          <span>
            {new Intl.NumberFormat({
              maximumSignificantDigits: 3
            }).format(record?.supplyApy)}
          </span>
        </div>
        <div>
          {new BigNumber(record?.supplyStrikeApy).dp(2, 1).toString(10)}
          {`%`}
        </div>
      </div>
    )
  },
  {
    title: 'Total Borrow',
    dataIndex: 'totalBorrow',
    key: 'totalBorrow',
    render: (action, record) => (
      <div className="total-supply">
        <div>
          <span>$</span>
          <span>
            {new Intl.NumberFormat({
              maximumSignificantDigits: 3
            }).format(record?.totalBorrows)}
          </span>
        </div>
        <div>
          {format(
            new BigNumber(record?.totalBorrowsUsd)
              .div(new BigNumber(record?.tokenPrice))
              .dp(0, 1)
              .toString(10)
          )}{' '}
          {record?.underlyingSymbol}
        </div>
      </div>
    )
  },
  {
    title: 'Borrow APY',
    dataIndex: 'borrowAPY',
    key: 'borrowAPY',
    render: (action, record) => (
      <div className="total-supply">
        <div>
          <span>$</span>
          <span>
            {new Intl.NumberFormat({
              maximumSignificantDigits: 3
            }).format(record?.borrowApy)}
          </span>
        </div>
        <div>
          {new BigNumber(record?.borrowStrikeApy).dp(2, 1).toString(10)}
          {`%`}
        </div>
      </div>
    )
  }
];
const MarketsAvailable = ({ getGovernanceStrikeWithParam }) => {
  const [markets, setMarkets] = useState([]);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const getMarkets = async () => {
    const res = await promisify(getGovernanceStrikeWithParam, {
      offset: 0,
      limit: 5
    });
    console.log(res?.data);
    setMarkets(res?.data);
    setTotal(res?.data?.total);
  };
  const onChangePage = () => {};
  useEffect(() => {
    getMarkets();
  }, []);
  return (
    <div className="markets-available">
      <div className="markets-available-content">
        <div className="title">10 markets available</div>
        <Card className="markets-table">
          <div className="title-table">All markets</div>
          <Table
            columns={columns}
            dataSource={markets?.markets}
            pagination={false}
            className="table-market"
            style={{ minHeight: '450px' }}
          />
          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <Pagination
              onChange={onChangePage}
              total={total}
              pageSize={5}
              current={current}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  const {
    getGovernanceStrike,
    getDecimals,
    getInterateModel,
    getGovernance,
    getGovernanceStrikeWithParam
  } = accountActionCreators;

  return bindActionCreators(
    {
      getGovernanceStrike,
      getInterateModel,
      getDecimals,
      getGovernance,
      getGovernanceStrikeWithParam
    },
    dispatch
  );
};
MarketsAvailable.propTypes = {
  getGovernanceStrikeWithParam: PropTypes.func.isRequired
};

MarketsAvailable.defaultProps = {};
export default compose(
  withRouter,
  connectAccount(null, mapDispatchToProps)
)(MarketsAvailable);
