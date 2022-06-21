FROM ethereum/client-go:latest

COPY genesis.json /tmp
COPY keystore /tmp/keystore/
COPY password.txt /tmp

RUN rm -rf /root/.ethereum
RUN geth init /tmp/genesis.json --datadir /root/.ethereum
RUN rm -rf /root/.ethereum/keystore
RUN cp -r /tmp/keystore /root/.ethereum

ENTRYPOINT ["geth"]