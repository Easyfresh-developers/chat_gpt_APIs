import express from "express";
import pkg from "dotenv";
pkg.config();
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
app.use(bodyParser.json());
app.use(cors());
import { ChatGPTAPI } from "chatgpt";
const chatGPTToken = process.env.CHAT_GPT_TOKEN;

// require("dotenv").config();

const api = new ChatGPTAPI({
  apiKey: chatGPTToken,
});
// const utils = require("./utils/utils");
// async function getResponseFromAIv2(msg) {
//   // msg = req.query.message;
//   // new moodule added
//   lastMesage = await getLatestChatCPTMessage();
// }
app.get("/", async (req, res) => {
  // var conversationId = req.query.conversationId;
  // var parentId = req.query.parentId;
  // var message = req.query.message;

  // console.log("being sent:C " + conversationId);
  // console.log("being sent:P" + parentId);

  // let response = await api.sendMessage(message, {
  //   conversationId: conversationId,
  //   parentMessageId: parentId,
  // });

  // console.log(response);
  // console.log(response.text);
  // console.log("being received:C " + response.conversationId);
  // console.log("being received:P" + response.id);

  // // await updateLastChatGPTMessage(response.id, response.conversationId);
  // // return response.text;
  res.send({
    status: true,
    // message: response.text,
    // conversationId: response.conversationId,
    // parentId: response.id,
  });
});
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
//renamed once and for all
// module.exports = app;

export default app;
