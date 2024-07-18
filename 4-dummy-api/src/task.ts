import express, {Express, Request, Response} from "express";
import {HTTP_STATUSES, SETTINGS, User} from "./settings";
import axios from "axios";

export const app: Express = express();

app.listen(SETTINGS.PORT, (): void => {
    console.log(`APP started : ${SETTINGS.PORT}`);
})

app.get('/', async (req: Request, res: Response) => {
    const url = req.query.url as string;

    if (!url){
        res.status(HTTP_STATUSES.BAD_REQUEST).send('Please provide a URL');
        return;
    }
    try {
        const response = await axios.get(url);

        if (!response){
            res.sendStatus(HTTP_STATUSES.NOT_FOUND);
            return;
        }

        const { users } = response.data[0];

        res
            .status(HTTP_STATUSES.OK)
            .send(users);
    } catch (e: unknown) {
        console.error(e);
        res.sendStatus(HTTP_STATUSES.INTERNAL_SERVER_ERROR);
    }
})