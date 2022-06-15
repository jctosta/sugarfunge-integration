FROM alpine:3.12

# Installing OS essentials

RUN apk add alpine-sdk

# Installing nodejs and yarn

RUN apk --no-cache add nodejs yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

# Setting up the docker env
WORKDIR /sf-deploy
COPY crates/truffle/ /sf-deploy/

# Adding truffle npx and installing contract dependencies
RUN yarn global add truffle npx
RUN yarn install



ENTRYPOINT ["yarn"]