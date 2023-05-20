import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import todoRoutes from "./routes/todos";

const app = express();

// 제 3자 패키지에서 들어오는 요청들은 전부 파싱하는 미들웨어
app.use(json());

app.use("/todos", todoRoutes);

// err처리 메들웨어
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
