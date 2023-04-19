const express = require("express"); //runs the server
const cors = require("cors");     //runs the server in any other origin
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
        const r = await axios.put(
            'https://api.chatengine.io./users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "d298aeac-3643-4060-bdf1-b9d43b400528" } }
        );
        return res.status(r.status).json(r.data);
      } catch (e)  {
        return res.status(e.response.status).json(e.response.data);
  } 
});

app.listen(3001);