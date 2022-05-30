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
};

export default projectConfig;
