# Use an existing docker image as a base
FROM node:14.14.0-alpine

WORKDIR /app

# Download and install a depedency
# RUN apk add --update redis
COPY package.json ./
RUN npm install
COPY ./ ./

# Tell the image what todo when it starts as a container
# CMD ["redis-server"]
CMD ["npm", "start"]