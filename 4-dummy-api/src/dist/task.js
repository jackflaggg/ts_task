"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const settings_1 = require("./settings");
const axios_1 = __importDefault(require("axios"));
exports.app = (0, express_1.default)();
exports.app.listen(settings_1.SETTINGS.PORT, () => {
    console.log(`APP started : ${settings_1.SETTINGS.PORT}`);
});
exports.app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.query.url;
    // Сделал через query параметры, ибо не знал как хост и запрос присоединить
    if (!url) {
        res.status(settings_1.HTTP_STATUSES.BAD_REQUEST).send('Please provide a URL');
        return;
    }
    try {
        const response = yield axios_1.default.get(url);
        if (!response) {
            res.sendStatus(settings_1.HTTP_STATUSES.NOT_FOUND);
            return;
        }
        const { users } = response.data[0];
        console.log(typeof users[0]);
        res.status(settings_1.HTTP_STATUSES.OK).send(users[0]);
    }
    catch (e) {
        throw new Error();
    }
}));
