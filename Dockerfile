FROM node:12-alpine3.12 as build
WORKDIR /app
COPY package.json ./
COPY . .
RUN npm run build

FROM nginx:1.19.0-alpine AS prod-stage
COPY --from=build /app/build /usr/share/nginx/html
#Localhost
EXPOSE 80
CMD ["nginx","-g","daemon off;"]

#Heroku
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
