FROM node:18-alpine
WORKDIR /TO-MY-LOVE-FRONTEND/

COPY public/ /TO-MY-LOVE-FRONTEND/public
COPY src/ /TO-MY-LOVE-FRONTEND/src
COPY package.json /TO-MY-LOVE-FRONTEND/

RUN npm install

CMD ["npm", "start"]