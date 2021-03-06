FROM node:8

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN npm install && npm cache clean
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "express"]