"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var OrdersHandler_1 = __importDefault(require("./handlers/OrdersHandler"));
var ProductsHandler_1 = __importDefault(require("./handlers/ProductsHandler"));
var UsersHandler_1 = __importDefault(require("./handlers/UsersHandler"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1["default"])();
var address = "0.0.0.0:3000";
app.use(body_parser_1["default"].json());
var corsOption = {
    optionsSuccessStatus: 200
};
app.use((0, cors_1["default"])(corsOption));
app.get("/", function (req, res) {
    res.send("Hello World!");
});
(0, OrdersHandler_1["default"])(app);
(0, ProductsHandler_1["default"])(app);
(0, UsersHandler_1["default"])(app);
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
exports["default"] = app;
