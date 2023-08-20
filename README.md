# Whois JS
This is a basic WHOIS web-based tool using either JavaScript or Node.js.

## Requirements
- NodeJS, Install using nvm: https://github.com/nvm-sh/nvm#installing-and-updating

### Installation

```
git clone https://github.com/iqbwl/whois-js
```
```
cd whois-js
npm install
npm install -g pm2
```
```
pm2 start server.js
```

Access whois via browser `https://localhost:3000`.

### PM2

```
pm2 list
```
```
pm2 stop <app_name>
```
```
pm2 delete <app_name>
```
