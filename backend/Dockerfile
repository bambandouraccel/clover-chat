FROM node:18

WORKDIR /app

# Copier uniquement les fichiers nécessaires pour l'installation des dépendances
COPY package*.json ./

RUN npm install --production
COPY . .
EXPOSE 4000

CMD ["node", "index.js"]

