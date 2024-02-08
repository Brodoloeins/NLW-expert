import fastify from "fastify";
import { z } from 'zod'
import { createPoll } from "./routes/createpoll";
import { getPoll } from "./routes/getpoll";
import { voteOnPoll } from "./routes/voteonpoll";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";
import { pollResults } from "./ws/poll-results";

const app = fastify()

app.register(cookie, {
    secret: 'Vasco',
    hook: 'onRequest',
    parseOptions: {}
})
app.register(websocket)


app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)
app.register(pollResults)


app.listen({port: 3333}).then(() => {
    console.log('Http server listening on port 3333')
})