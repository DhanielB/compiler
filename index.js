const express = require("express");
const { exec } = require("child_process");

const app = express();

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

app.listen(8080, () => {
  console.log("Listening at 8080");
}); 
