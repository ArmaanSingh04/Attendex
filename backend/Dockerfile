FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY . .

ENV MONGO_URL=mongodb+srv://admin:S8O7ITTUDfXHf2F4@attendex.qis1mds.mongodb.net/
ENV JWT_SECRET=PIsHAtchoL

RUN npm run build
EXPOSE 8000

CMD ["npm" , "run" , "prod"]