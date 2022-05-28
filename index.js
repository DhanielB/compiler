const express = require("express");
const { exec } = require("child_process");
const timeout = require("connect-timeout");

const app = express();

app.use(timeout('50000000000000s'))
app.use(express.json());
app.post("/commands", (req, res) => {
  const { commands } = req.body;

  if (commands) {
    exec(commands.join(" && "), (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }

      if (stderr) {
        console.error(err);
        return;
      }

      res.send(stdout);
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening at 3000");
}); 
