const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = "WELCOME";
        this.textMessage = "Bienvenido pa!";
        this.colorTitle = "#03A9F4";
    }
};
