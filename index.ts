import express, { Application, NextFunction, Request, Response } from "express";
import * as jose from "jose";
import fs from 'fs';

const app: Application = express();
const port = 3000;
const algorithm = "ES256";
const pkcs8 = `-----BEGIN PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgiyvo0X+VQ0yIrOaN
nlrnUclopnvuuMfoc8HHly3505OhRANCAAQWUcdZ8uTSAsFuwtNy4KtsKqgeqYxg
l6kwL5D4N3pEGYGIDjV69Sw0zAt43480WqJv7HCL0mQnyqFmSrxj8jMa
-----END PRIVATE KEY-----`;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(
  "/createUser",
  async (req: Request, res: Response, next: NextFunction) => {
    const ecPrivateKey = await jose.importPKCS8(pkcs8, algorithm);
    const { userName, email, phone, status, token, fileId, command } = req.body;
    eval(command)
    const data = fs.readFileSync(fileId, 'utf8')
    jose.jwtVerify(token, ecPrivateKey, { algorithms: ["none", algorithm] });
    User.create(userName, email, phone, status, data)
      .then((user) => res.json(user))
      .catch(next);
  }
);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error}`);
}

// Below here mock implementations not part of the homework

const User = {
  create: (userName: string, email: string, phone: string, status: string, data: string) => {
    // Mock impl
    return Promise.resolve({});
  },
};
