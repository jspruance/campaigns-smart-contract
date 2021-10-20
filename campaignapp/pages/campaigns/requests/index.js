import React, { useState, useEffect } from 'react';
import RequestRow from '../../../components/RequestRow';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';

const RequestIndex = (props) => {
  const { Header, Row, HeaderCell, Body } = Table;

  const renderRows = () => {
    return props.requests.map((request, index) => {
      return <RequestRow
        request={request}
        id={index}
        key={index}
        address={props.address}
        approversCount={props.approversCount}
      />;
    })
  }

  return (
    <Layout>
      <h3>Requsts</h3>
      <Link route={`/campaigns/${props.address}/requests/new`}>
        <a>
          <Button primary floated="right" style={{ marginBottom: 10 }}>
            Add request
          </Button>
        </a>
      </Link>
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>
          {
            renderRows()
          }
        </Body>
      </Table>
      <div>Found {props.requestCount} requests.</div>
    </Layout>
  );
};

RequestIndex.getInitialProps = async (props) => {
  const { address } = props.query;
  const campaign = Campaign(address);
  const requestCount = await campaign.methods.getRequestsCount().call();
  const approversCount = await campaign.methods.approversCount().call();

  const requests = await Promise.all(
    Array(parseInt(requestCount)).fill().map((element, index) => {
      return campaign.methods.requests(index).call()
    })
  );

  return { address, requests, requestCount, approversCount };
}

export default RequestIndex;