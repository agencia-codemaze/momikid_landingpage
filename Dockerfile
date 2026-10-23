# Build do React (Vite), pré-renderização das páginas (HTML pronto para o Google) e entrega pelo nginx sem root, porta 8080.
FROM node:22-alpine AS build
# Endereço público do site: vai para canonical, sitemap.xml, robots.txt e og:url. Defina no Coolify (build argument).
ARG SITE_URL=https://momikid.com
ENV SITE_URL=$SITE_URL
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY index.html vite.config.js ./
COPY public ./public
COPY src ./src
COPY scripts ./scripts
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY security-headers.inc /etc/nginx/conf.d/security-headers.inc
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1
