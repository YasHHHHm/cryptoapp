import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic} from 'antd';
import { Link } from 'react-router-dom';

import {cryptoApi}  from '../services/cryptoApi.js';

const {Title} = Typography;
export default function Homepage () {

  const{ data, isFetching } = cryptoApi;

  console.log(data);

  return (
    <>
    <Title level={2} className='heading'>Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic title="Total CryptoCurrencies" value={5} /></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={5} /></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={5} /></Col>
      <Col span={12}><Statistic title="Total Total 24h Volume" value={5} /></Col>
      <Col span={12}><Statistic title="Total Markets" value={5} /></Col>
    </Row>
    </>
  )
}


