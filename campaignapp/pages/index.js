import React, { useState, useEffect } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

const CampaignIndex = ({ campaigns }) => {

  const renderCampaigns = () => {
    const items = campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View campaign</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <div>
        <h3>Open campaigns</h3>
        <Link route="/campaigns/new">
          <a>
            <Button
              content="Create campaign"
              icon="add circle"
              primary={true}
              floated="right"
            ></Button>
          </a>
        </Link>
        { renderCampaigns() }
      </div>
    </Layout>
  )
};

CampaignIndex.getInitialProps = async (ctx) => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
}

export default CampaignIndex;