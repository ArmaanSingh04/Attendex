FROM node:20-alpine

WORKDIR /app

ARG MONGO_URL
ARG JWT_SECRET
ARG CLIENT_URL

COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY . .

ENV MONGO_URL=${MONGO_URL}
ENV JWT_SECRET=${JWT_SECRET}
ENV CLIENT_URL=${CLIENT_URL}

RUN npm run build
EXPOSE 8000

CMD ["npm" , "run" , "prod"]