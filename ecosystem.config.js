module.exports = {
  apps : [{
    name: 'API',
    script: './bin/www',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    exec_mode: 'cluster_mode',
    instances: 4,
   // autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    error_file: "./logs/app-err.log",         // 错误日志文件
    out_file: "./logs/app-out.log",           // 正常日志文件
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
