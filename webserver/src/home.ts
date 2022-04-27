import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.type("html");

    res.send(`
        <html>
            <head>
                <title>Lab Webserver</title>
            </head>
            <body>
                <h1>Este es un demo de servidor web</h1>
            </body>
        </html>
    `);
};