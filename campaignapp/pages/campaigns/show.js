import React, { useState, useEffect } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/layout';
import ContributeForm from '../../components/ContributeForm';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';

const CampaignShow = (props) => {
  return (
    <Layout>
      <h3>Campaign show</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            {renderCards(props)}
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={props.address} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link route={`/campaigns/${props.address}/requests`}>
              <a>
                <Button primary>view requests</Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

CampaignShow.getInitialProps = async (props) => {
  const campaign = Campaign(props.query.address);
  const summary = await campaign.methods.getSummary().call();
  return {
    address: props.query.address,
    minimumContribution: summary[0],
    balance: summary[1],
    requestCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };
}

const renderCards = (props) => {
  const {
    balance,
    manager,
    minimumContribution,
    requestCount,
    approversCount
  } = props;

  const items = [
    {
      header: manager,
      meta: 'Address of manager',
      description: 'The manager created this campaign and can create requests to withdrawl funds.',
      style: { overflowWrap: 'break-word' }
    },
    {
      header: minimumContribution,
      meta: 'Minimum contribution (wei)',
      description: 'You must contribute at least this much wei to become an approver'
    },
    {
      header: requestCount,
      meta: 'Number of requests',
      description: 'A request tries to withdrawl funds from the account. Requests must be approved by approvers'
    },
    {
      header: approversCount,
      meta: 'Number of approvers',
      description: 'Number of people who have already donated to the campaign'
    },
    {
      header: web3.utils.fromWei(balance, 'ether'),
      meta: 'Campaign balance (ether)',
      description: 'The balance is how much money the campaign has left to spend'
    }
  ];

  return <Card.Group items={items} />

};

export default CampaignShow;