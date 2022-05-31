FROM node:16-alpine

# Install packages for headless chrome
RUN apk update \
    && \
    apk add --no-cache nmap \
    && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories \
    && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories \
    && \
    apk update \
    && \
    apk add --no-cache \
        # Misc packages
        nano \
        # Headless Chrome packages
        chromium \
        harfbuzz \
        "freetype>2.8" \
        ttf-freefont \
        nss

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ENV CHROME_BIN /usr/bin/chromium-browser
ENV LIGHTHOUSE_CHROMIUM_PATH /usr/bin/chromium-browser

WORKDIR /app

# Start up the Vite dev server

CMD npm install \
    && \
    npm run dev
