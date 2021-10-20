import React, { useState, useEffect } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

const RequestNew = (props) => {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [recipient, setRecipient] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage('');

    const campaign = Campaign(props.address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(
        description, 
        web3.utils.toWei(value, 'ether'),
        recipient
      ).send({ from: accounts[0] });

      Router.pushRoute(`/campaigns/${prps.address}/requests`);
    } catch(error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  }

  return (
    <Layout>
      <Link route={`/campaigns/${props.address}/requests`}>
        <a>Back</a>
      </Link>
      <h3>Create a request</h3>
      <Form error={!!errorMessage} onSubmit={onSubmit}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={description}
            onChange={event => {
              setDescription(event.target.value)
            }}
          ></Input>
        </Form.Field>
        <Form.Field>
          <label>Value in Ether</label>
          <Input
            value={value}
            onChange={event => {
              setValue(event.target.value)
            }}
          ></Input>
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input
            value={recipient}
            onChange={event => {
              setRecipient(event.target.value)
            }}
          ></Input>
        </Form.Field>

        <Message error header="Oops!" content={errorMessage}></Message>
        <Button primary loading={loading}>Create!</Button>
      </Form>
    </Layout>
  );
};

RequestNew.getInitialProps = async (props) => {
  const { address } = props.query;
  return { address };
}

export default RequestNew;