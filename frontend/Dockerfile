# STAGE 1
FROM docker.io/node:18 as build-stage
WORKDIR /app

# Définir les variables d'environnement (modifiable dans OpenShift si nécessaire)
ENV VITE_SITE_TITLE="Origins Office Communication" \
    VITE_SITE_BRAND="Heritage" \
    VITE_BACKEND_URL=https://ooc-backend.apps.origins.heritage.africa \
    VITE_DEMO=false \
    VITE_SHOW_CREDITS=true

# Installer uniquement les dépendances nécessaires
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copier les sources et exécuter le build
COPY . .
RUN npm run build

# STAGE 2
FROM docker.io/nginxinc/nginx-unprivileged as serve-stage

# Configurer Nginx pour une application SPA
RUN sed -i 's/^ *index  index.html index.htm;/        try_files $uri $uri\/ \/index.html;/' /etc/nginx/conf.d/default.conf 

# Copier les fichiers générés depuis l'étape de build
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Métadonnées
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
