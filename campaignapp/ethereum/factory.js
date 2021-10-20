import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x61ca9E01B9850bFea7dd05c58b3d689Fe349D78A'
);

export default instance;