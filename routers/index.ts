import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.use((err: unknown, req: Request, res: Response, _next: NextFunction) => {
  const exception = err as Error;
  res.status(500).json({
    statusCode: 500,
    error:
      exception.name === "GenericError"
        ? exception.message
        : "Internal Server Error",
  });
});

export default router;
