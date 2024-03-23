FROM oven/bun:1 as base
WORKDIR /app

COPY package*.json ./
COPY bun.lockb ./

EXPOSE 3000

RUN bun install
COPY . .
RUN bun run build
CMD ["bun", "run", "start"]