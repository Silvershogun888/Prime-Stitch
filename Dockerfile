# Build stage
FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install --production

# better-sqlite3 needs some build tools if not available in binaries, 
# but node:slim usually doesn't have them. 
# However, better-sqlite3 often has prebuilt binaries for common platforms.

COPY --from=builder /app/dist ./dist
COPY server.js ./

EXPOSE 3001

CMD ["node", "server.js"]
