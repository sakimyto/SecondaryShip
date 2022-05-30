import { InjectedConnector } from '@web3-react/injected-connector';
import { ethers } from 'ethers';

export const injected = new InjectedConnector({});

export const getLibrary = (provider: any) => {
  return new ethers.providers.Web3Provider(provider);
};
