FROM node:18-alpine
WORKDIR /ui
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine
COPY --from=0 /ui/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]