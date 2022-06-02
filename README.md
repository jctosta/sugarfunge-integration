# SugarFunge Integration API (WIP)

## Rust App

### Software requirements

- Install [Rust](https://www.rust-lang.org/). Using [Rustup](https://rustup.rs/)
Run the following in your terminal, then follow the onscreen instructions:
```
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Usage

- Clone the repository.
```bash
$ git clone git@github.com:SugarFunge/sugarfunge-integration.git
```

- Compile the hardhat contracts to generate the ABI json files:

```bash
# Navigate to hardhat root directory
$ cd crates/truffle
# Install hardhat dependencies
$ yarn install
# Compile the contracts
$ yarn build
```

- Copy the environment file as **.env** and make the changes based on your needs
```bash
$ cp .env.example .env
```

- Start the API
```bash
# Normal run
$ cargo run
# Auto-reload
$ cargo watch -x 'run --bin sugarfunge-integration'
```

## Swagger API Documentation, Prometheus Server and Chainbridge Solidity

### Software requirements

- Install [Docker](https://docs.docker.com/engine/install/ubuntu)

- Install [Docker-Compose](https://docs.docker.com/compose/install)

### Usage

- Copy the environment file as **.env** and make the changes based on your needs (Optional if you already configured the API above)
```bash
$ cp .env.example .env
```

- Start the docker-compose file ([Access Swagger UI](http://localhost:7000)) ([Access Prometheus Server](http://localhost:9090) ([Ganache-cli RPC URL](http://localhost:8545)))
```bash
$ docker-compose up -d
```

This will spin up a local blockchain network based on ganache-cli and deploy all chainbridge contracts to the local chain.

You can check get the chainbridge contract addresses by using the logs feature of docker compose:

```bash
docker compose logs chainbridge-deploy
```

- Stop the docker-compose file
```bash
$ docker-compose down
```

## Environment configuration

- Default environment file: **.env**
- Example environment file: **.env.example**

| Variable Name     | Description                                 |
|-------------------|---------------------------------------------|
| RUST_LOG          | Rust log level                              |
| RUST_BACKTRACE    | Show Rust backtrace (0 or 1)                |
| LISTEN_URL        | API Listen URL                              |
| WEB3_NODE_URL     | HTTP RPC node URL                           |
| USE_LOCAL_CHAIN   | True == ganache-cli / False == infura       |
| INFURA_PROJECT_ID | Infura Project ID                           |
| PRIVATE_KEY       | Private Key used to interact with contracts |
| CHAIN_ID          | Chain ID (Default: 3 / Ropsten testnet)     |
| MORALIS_BASE_URL  | Moralis API base URL                        |
| MORALIS_API_KEY   | Moralis API Key                             |
| SWAGGER_JSON      | Swagger json file path inside the container |
