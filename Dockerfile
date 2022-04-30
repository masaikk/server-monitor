FROM node:slim
EXPOSE 3000
#COPY app.js /app/
#COPY package.json /app/
ENV VOL_BASE_PATH "/app/"
WORKDIR ${VOL_BASE_PATH}
COPY regulator/* ${VOL_BASE_PATH}
RUN ["npm","install"]
CMD ["node", "./app.js"]
