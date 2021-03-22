FROM node:14-slim

# Create and define the node_modules's cache directory.
WORKDIR /usr/src/cache

# Install the application's dependencies into the node_modules's cache directory.
COPY package.json ./
RUN yarn install

# Create and define the application's working directory.
WORKDIR /usr/src/app
