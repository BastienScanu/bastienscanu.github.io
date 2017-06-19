sudo npm run build
scp -r ./dist root@bastien-scanu.com:www
ssh root@bastien-scanu.com 'bash -s' < ssh_deploy.sh