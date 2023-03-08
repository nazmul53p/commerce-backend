# Use Node.js version 14 as the base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json files to the app directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the app directory
COPY . .

# Set the environment variables
ENV NODE_ENV=development
ENV PORT=8080

# DB
ENV DB_HOST=127.0.0.1
ENV DB_PORT=3307
ENV DB_USER=ecommerce
ENV DB_PASSWORD=1
ENV DB_DATABASE=ecommerce

# Expose the port
EXPOSE $PORT

# Start the NestJS application
CMD ["npm", "run", "start:dev"]