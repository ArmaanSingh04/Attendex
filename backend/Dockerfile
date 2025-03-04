FROM node:20-alpine

WORKDIR /app

ARG MONGO_URL
ARG JWT_SECRET

COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY . .

ENV MONGO_URL=${MONGO_URL}
ENV JWT_SECRET=${JWT_SECRET}

RUN npm run build
EXPOSE 8000

CMD ["npm" , "run" , "prod"]