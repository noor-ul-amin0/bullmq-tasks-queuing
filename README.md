# BullMQ with Express and TypeScript

This project demonstrates the use of BullMQ with an Express server and TypeScript. BullMQ is a fast and robust queue system built on top of Redis, designed to provide exactly once queue semantics, easy horizontal scaling, consistency, and high performance.

## Requirements

- Node.js
- Redis installed on your local machine

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.

## Usage

- Run `npm run build` to compile the TypeScript code.
- Run `npm start` to start the server.
- Run `npm run dev` to start the server in development mode with nodemon.

## Dependencies

This project uses the following dependencies:

- `express`: Web framework for Node.js
- `bullmq`: Redis-based queue system
- `@bull-board/express`: UI for BullMQ
- `typescript`: TypeScript compiler
- `ts-node`: TypeScript execution environment for Node.js
- `nodemon`: Monitor for changes in source and automatically restart the server
