const projectConfig = {
  siteName: 'SecondaryShip',

  siteDomain:
    process.env.NEXT_PUBLIC_APP_ENV === 'production'
      ? 'secondaryship.xyz'
      : process.env.NEXT_PUBLIC_APP_ENV === 'staging'
      ? 'testnet.secondaryship.xyz'
      : 'localhost:3000',

  siteUrl:
    process.env.NEXT_PUBLIC_APP_ENV === 'production'
      ? 'https://secondaryship.xyz'
      : process.env.NEXT_PUBLIC_APP_ENV === 'staging'
      ? 'https://testnet.secondaryship.xyz'
      : 'http://localhost:3000',

  siteDescription: 'Secondary relation contract',

  ogImagePath: '/image/logo.png',

  twitterUsername: '@0xWonstar',

  twitterUrl: 'https://twitter.com/0xsakimyto',

  githubUrl: 'https://github.com/sakimyto/SecondaryShip',

  discordUrl: 'https://discord.gg/{}',

  chainId:
    process.env.NEXT_PUBLIC_APP_ENV === 'production'
      ? 137 // Matic(Poygon) Mainnet
      : process.env.NEXT_PUBLIC_APP_ENV === 'staging'
      ? 80001 // Matic Testnet Mumbai
      : 31337, // hardhat local network,

  networkName:
    process.env.NEXT_PUBLIC_APP_ENV === 'production'
      ? 'Matic(Poygon) Mainnet'
      : process.env.NEXT_PUBLIC_APP_ENV === 'staging'
      ? 'Matic Testnet Mumbai'
      : 'localhost',

  chainName:
    process.env.NEXT_PUBLIC_APP_ENV === 'production'
      ? 'MATIC'
      : process.env.NEXT_PUBLIC_APP_ENV === 'staging'
      ? 'MATIC'
      : 'ETH',

  rpcUrl:
    process.env.NEXT_PUBLIC_APP_ENV === 'production' || 'staging'
      ? process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL
      : 'http://localhost:8545',
};

export default projectConfig;
