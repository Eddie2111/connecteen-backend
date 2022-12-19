FROM node:16
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
RUN npm i pm2@latest
COPY prisma ./prisma/
COPY . .
EXPOSE 3200
CMD ["node", "index.js"]
RUN npx prisma generate