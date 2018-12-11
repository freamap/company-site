FROM node:11.4.0-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --quiet
COPY . .
RUN npm rebuild
RUN npm run build
ENV HOST 0.0.0.0
CMD ["npm", "run", "start"]