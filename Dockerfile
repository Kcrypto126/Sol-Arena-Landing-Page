FROM node:20
RUN mkdir /app
COPY package.json /app/
WORKDIR /app
COPY . ./

ENV NEXT_PUBLIC_APP_URL=https://testlanding.solarena.io

RUN npm install
RUN npm run build
EXPOSE 4000
CMD ["npm", "run","start"]