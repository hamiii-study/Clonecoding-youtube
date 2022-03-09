import express from "express"; //node_modules에서 찾아줌!!
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 5000;

const app = express(); //server = application 만들기

const logger = morgan("dev");
app.use(logger);

//create router
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

//application listening
const handelListening = () =>
  console.log(`✔ Server listenting on port http://localhost:${PORT} 🎉`);

app.listen(PORT, handelListening);
