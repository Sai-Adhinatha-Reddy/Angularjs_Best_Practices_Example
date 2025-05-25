# Base image
FROM node:18-slim

# Install dependencies needed for Chrome, Bower, and Git
RUN apt-get update && apt-get install -y \
    git \                         
    curl \
    gnupg \
    ca-certificates \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libgtk-3-0 \
    libasound2 \
    libnss3 \
    libxss1 \
    libxtst6 \
    fonts-liberation \
    xdg-utils \
    wget && \
    rm -rf /var/lib/apt/lists/*


# Install Chrome
RUN curl -fsSL https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /etc/apt/trusted.gpg.d/google.gpg && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && apt-get install -y google-chrome-stable && \
    rm -rf /var/lib/apt/lists/*

ENV CHROME_BIN=/usr/bin/google-chrome

# Create app directory
WORKDIR /usr/src/app

# Copy only npm-related files first
COPY package.json package-lock.json* ./

# Remove "postinstall" to avoid bower running prematurely
RUN sed -i '/postinstall/d' package.json

# Install npm dependencies
RUN npm install

# Install bower globally
RUN npm install -g bower

# Copy bower-related files and run bower install
COPY bower.json .bowerrc* ./
RUN bower install --allow-root

# Copy rest of the application
COPY . .

# Expose port (optional)
EXPOSE 8000

# Default command
CMD ["npm", "start", "test"]
