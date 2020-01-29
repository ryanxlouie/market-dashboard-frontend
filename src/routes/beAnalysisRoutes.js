import axios from 'axios';

const { ipAddress } = require('../lib/config');

export async function getGDPAnalysis() {
  let result = (await (axios.get(`${ipAddress}/beAnalysisRoutes/GDPAnalysis`))).data.data;
  return (result);
}