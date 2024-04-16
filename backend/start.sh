# Kill services run on the port of the Database
sudo kill -9 $(sudo lsof -t -i:27017)

# Restart docker service
# docker compose up -d

# Start Backend server Dev
npm run start:dev
