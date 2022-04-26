FROM node:slim
EXPOSE 3000
COPY app.js /app/
COPY package.json /app/
WORKDIR /app/
RUN ["npm","install"]
CMD ["node", "./app.js"]
