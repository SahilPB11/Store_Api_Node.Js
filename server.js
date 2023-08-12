import { connect } from "./db/connectdb.js";
import { app } from "./app.js";
const Port = process.env.Port;

const connectDb = async () => {
  try {
    await connect().then(() => {
      app.listen(Port, () => console.log(`Server is listening on ${Port}`));
    });
  } catch (err) {
    console.log(err.message);
  }
};
connectDb();
