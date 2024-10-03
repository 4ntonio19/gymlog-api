# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.17.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Copy only the necessary files
COPY package-lock.json package.json ./
RUN npm install --only=production

# Copy the compiled application code
COPY dist ./dist

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "node", "dist/http/server.js" ]
