module.exports = {
  apps: [
    {
      name: 'Amishon-Proxy',
      script: 'server/index.js'
    }
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-214-20-208.us-west-2.compute.amazonaws.com/',
      key: '~/.ssh/Amishon-Proxy.pem',
      ref: 'origin/master',
      repo: 'git@github.com:Amishon/Devin-Proxy.git',
      path: '/home/ubuntu',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
