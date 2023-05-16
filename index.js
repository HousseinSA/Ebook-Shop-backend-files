import express from "express"
import json_server from "json-server"
import auth from "json-server-auth"
const server = express()
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})

const router = json_server.router("./Data/db.json")
server.use("/api", router)
server.db = router.db

const middlewares = json_server.defaults()
const rules = auth.rewriter({
  products: 444,
  featured_products: 444,
  orderes: 600,
  users: 600,
})
server.use(rules)
server.use(auth)
server.use(middlewares)
server.use(router)
server.listen(8000)
