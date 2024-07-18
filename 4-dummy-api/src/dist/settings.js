"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_STATUSES = exports.SETTINGS = void 0;
var SETTINGS;
(function (SETTINGS) {
    SETTINGS["URL"] = "https://dummyjson.com/users";
    SETTINGS[SETTINGS["PORT"] = 4001] = "PORT";
})(SETTINGS || (exports.SETTINGS = SETTINGS = {}));
exports.HTTP_STATUSES = {
    BAD_REQUEST: 400,
    OK: 200,
    NOT_FOUND: 404
};
