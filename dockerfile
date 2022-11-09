FROM node:16
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
RUN npm i pm2@latest
COPY . .
EXPOSE 3200
CMD ["pm2-runtime", "index.js"]