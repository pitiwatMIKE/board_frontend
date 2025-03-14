# ----- STAGE 1: Build Next.js -----
FROM node:22.14.0-alpine3.20

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

# ----- STAGE 2: Run Next.js Server -----
FROM node:22.14.0-alpine3.20

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000


CMD ["npm", "run", "start"]
