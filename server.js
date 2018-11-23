import express from "express";
import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "./src/components/App/App";

const PORT = process.env.PORT || 3000;

//converts all html in index.html to string
const html = fs.readFileSync("dist/index.html").toString();
//splits string around not rendered (doesn't include not rendered)
const parts = html.split("not rendered");

//set up express servers
const app = express();

//someone makes request to /dist on server, look inside dist directory and serve statically
app.use("/dist", express.static("dist"));

//for every other request that doesn't hit /dist
app.use((req, res) => {
  //sends head and meta data, including css
  res.write(parts[0]);

  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  const stream = renderToNodeStream(reactMarkup);

  //connects stream pipe to res pipe; when stream finishes, still not done
  stream.pipe(
    res,
    { end: false }
  );

  //once finished, close stream
  stream.on("end", () => {
    res.write(parts[1]);
    res.end();
  });

  // res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
});

console.log(`listening on ${PORT}`);
app.listen(PORT);
