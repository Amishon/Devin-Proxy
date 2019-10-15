module.exports = {
  apps: [{
    name: 'Amishon',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-222-133-50.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/Amishon.pem',
      ref: 'origin/master',
      repo: 'git@github.com:Amishon/Devin-Proxy.git',
      path: '/home/ubuntu/Amishon',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}