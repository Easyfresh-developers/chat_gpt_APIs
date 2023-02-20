// import app from "./app.js";
import express from "express";
const app = express();
process.env.TZ = "Asia/Karachi";
import pkg from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
pkg.config();
app.use(bodyParser.json());
app.use(cors());
//resolving
// const port = 4000;

import { ChatGPTAPI } from "chatgpt";
const chatGPTToken = process.env.CHAT_GPT_TOKEN;

// require("dotenv").config();

const api = new ChatGPTAPI({
  apiKey: chatGPTToken,
});

app.get("/", (req, res) => {
  res.send("life iss life it is beautiful");
});
const port = process.env.PORT || 4000;
const server = app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);

app.get("/chatgptRespoonse", async (req, res) => {
  var conversationId = req.query.conversationId;
  var parentId = req.query.parentId;
  var message = req.query.message;

  console.log("being sent:C " + conversationId);
  console.log("being sent:P" + parentId);

  let response = await api.sendMessage(message, {
    conversationId: conversationId,
    parentMessageId: parentId,
  });

  console.log(response);
  console.log(response.text);
  console.log("being received:C " + response.conversationId);
  console.log("being received:P" + response.id);

  // // await updateLastChatGPTMessage(response.id, response.conversationId);
  // // return response.text;
  res.send({
    status: true,
    message: response.text,
    conversationId: response.conversationId,
    parentId: response.id,
  });
});

//new branch
// module.exports = server;
export default app;
