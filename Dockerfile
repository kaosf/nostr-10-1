FROM node:22-alpine
ENV TZ=UTC
COPY ["archives/", "/archives/"]
COPY ["crontab", "/var/spool/cron/crontabs/root"]
COPY ["package.json", "package-lock.json", "/"]
ENV NODE_ENV=production
RUN npm i --silent
COPY ["index.js", "/index.js"]
CMD ["crond", "-f", "-d", "8"]
