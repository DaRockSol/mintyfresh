const express = require('express')
const app = express()
const httpServer = require("http").createServer(app)
const {createProxyMiddleware} = require('http-proxy-middleware')

minthubHost = process.env.minthubHost || "localhost:8080"
mintrockHost = process.env.mintrockHost || "localhost:8282"
imageGenHost = process.env.imageGenHost || "localhost:8181"
allMintHost = process.env.allMintHost || "localhost:8383"

minthubUrl = "http://" + minthubHost + "/"
mintrockUrl = "http://" + mintrockHost + "/"
imageGenUrl = "http://" + imageGenHost + "/"
allMintUrl = "http://" + allMintHost + "/"

let mintHubProxy = createProxyMiddleware('/api/minthub/mintfunc/', {target: minthubUrl, changeOrigin: true})
let mintrockProxy = createProxyMiddleware('/api/mintymcmintface/', {target: mintrockUrl, changeOrigin: true})
let imageGenProxy = createProxyMiddleware('/api/imageFunc/', {target: imageGenUrl, changeOrigin: true})
let allMintProxy = createProxyMiddleware('/api/mintyfresh/', {target: allMintUrl, changeOrigin: true})

app.use(mintHubProxy)
app.use(mintrockProxy)
app.use(imageGenProxy)
app.use(allMintProxy)

httpServer.listen(8000, () => console.log("Do I detect a hint of minty freshness??? *COUGH*"));