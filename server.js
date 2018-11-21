import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "./src/App";

const PORT = process.env.PORT || 3000;

//converts all html in index.html to string
const html = fs.readFileSync("dist/index.html").toString();
//splits string around not rendered (doesn't include not rendered)
const parts = html.split("not rendered");

//set up express server
const app = express();

//someone makes request to /dist on server, look inside dist directory and serve statically
app.use("/dist", express.static("dist"));

//for every other request that doesn't hit /dist
app.use((req, res) => {
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
  res.end();
});

console.log(`listening on ${PORT}`);
app.listen(PORT);
