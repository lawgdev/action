FROM node:17-alpine

COPY dist/lawg.js dist/lawg.js

CMD ["node", "/dist/lawg.js"]