FROM nginx:alpine

# Kopiowanie plików do kontenera
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY app.js /usr/share/nginx/html/app.js
COPY config.csv /usr/share/nginx/html/config.csv
COPY urls.json /usr/share/nginx/html/urls.json
COPY icons /usr/share/nginx/html/icons

EXPOSE 80
