FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install --production

# Copier le reste des fichiers sources
COPY . .

# Définir la variable d'environnement pour le port
ENV PORT=4000

# Exposer le port utilisé par l'application (facultatif pour OpenShift mais utile pour la documentation)
EXPOSE 4000

# Commande par défaut pour démarrer l'application
CMD ["npm", "start"]
