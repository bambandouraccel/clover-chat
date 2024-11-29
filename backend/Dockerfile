FROM node:18

WORKDIR /app

# Copier uniquement les fichiers nécessaires pour l'installation des dépendances
COPY package*.json ./

RUN npm install --production

# Copier le reste des fichiers
COPY . .

# Exposer le port utilisé par l'application
EXPOSE 4000

CMD ["node", "index.js"]