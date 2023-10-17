import { RequestType } from "type/v1/RequestType";
import prisma from "../../prismaClient";
import express from "express";

const isAdmin = async (
  req: RequestType,
  res: express.Response,
  next: express.NextFunction
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.userId,
    },
  });
  //   return error if is not permitted to access this endpoint
  if (user.isAdmin !== true) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  // allow request to proceed
  next();
};

export default isAdmin;
