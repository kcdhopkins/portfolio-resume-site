FROM node:20-alpine
RUN mkdir -p /app
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
# ENV API_URL=http://api.myapp.com/
EXPOSE 3000
# CMD ["node", "server.tsx"]
CMD ["npm", "start"]