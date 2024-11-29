FROM node:18

COPY package*.json .

RUN npm i

COPY . .

#ENV PORT=8080
ENV PORT=4000

CMD ["npm", "start"]

#EXPOSE 8080
EXPOSE 4000