import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  const envFound = dotenv.config();
  if (envFound.error) {
    console.log(process.env);
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
  }
}

export default {
  port: parseInt(process.env.PORT as string, 10) as number,
  mongoURI: process.env.MONGODB_URI as string,
};
