import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import config from "./config";
import connectDB from "./loaders/db";
import routes from "./routes";

// DB 연결하기
connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS 설정
app.use(cors());

//라우터 분리
app.use(routes);

type ErrorType = {
  message: string;
  status: number;
};

// 모든 에러에 대한 핸들링
app.use(function (
  err: ErrorType,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app
  .listen(config.port, () => {
    console.log(`
    ################################################
          🛡️  Server listening on port 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
