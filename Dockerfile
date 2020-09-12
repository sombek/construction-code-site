FROM node:lts-alpine as builder

# make the 'application' folder the current working directory
WORKDIR /application

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies leaving out dev dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'application' folder)
COPY . .

# build app for production with minification
RUN npm run build

### STAGE 2: Setup ###

FROM nginx:1.14.1-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder application/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
