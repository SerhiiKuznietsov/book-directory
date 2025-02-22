FROM node:22.14.0

WORKDIR /opt/app

ADD *.json .

RUN npm ci

ADD . .

EXPOSE 80

CMD [ "npm", "run", "start" ]