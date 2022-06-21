FROM node:current-alpine3.15 as stage-1

WORKDIR /chainbridge

RUN apk add git
RUN apk add alpine-sdk

RUN git clone https://github.com/ChainSafe/chainbridge-deploy &&  \
    cd chainbridge-deploy/cb-sol-cli &&  \
    yarn install &&  \
    make install
#
#FROM scratch AS export-stage
#COPY --from=stage-1 /chainbridge/chainbridge-deploy/cb-sol-cli/chainbridge-solidity/build/contracts/ /

ENTRYPOINT ["cb-sol-cli"]