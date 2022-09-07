FROM node:16

RUN useradd -u 8877 builder
USER builder
