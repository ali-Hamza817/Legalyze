# Frontend Dockerfile - React + Vite
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app/frontend

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app/frontend

# Install serve to run the application
RUN npm install -g serve

# Copy built files from builder stage
COPY --from=builder /app/frontend/dist ./dist

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Serve the application
CMD ["serve", "-s", "dist", "-l", "3000"]
