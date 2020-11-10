

# # Add the following line 
# ENV CI=true

# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY ./ ./

# CMD ["npm", "start"]


# FROM node:15.1.0-alpine3.12
FROM node:14.14.0-alpine

WORKDIR /src
# Expose the port 3000
# EXPOSE 3000
# Set the default command to run when a container starts
CMD ["npm", "start"]
# Install app dependencies
COPY package.json /src
RUN npm install --prefer-offline --no-audit
# Copy your code in the docker image
COPY . /src