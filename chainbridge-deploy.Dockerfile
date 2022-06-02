FROM node:current-alpine3.15

WORKDIR /usr/src/app

RUN apk add git
RUN apk add alpine-sdk

RUN git clone https://github.com/ChainSafe/chainbridge-deploy &&  \
    cd chainbridge-deploy/cb-sol-cli &&  \
    yarn install &&  \
    make install

ENTRYPOINT ["cb-sol-cli"]