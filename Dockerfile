FROM node:12-alpine as builder

WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/ohmybank /usr/share/nginx/html
EXPOSE 80