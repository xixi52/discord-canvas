module.exports = {

    /**
     * Gets variables and types
     * @param {object} prefix The type of variable
     * @param {object} variable The variable to change
     * @returns The variable formatted
     */
    formatVariable(prefix, variable){
        const formattedVariable = variable.toLowerCase()
        .split("-").map((word) => word.charAt(0).toUpperCase()+word.substr(1, word.length).toLowerCase()).join("");
        return prefix+formattedVariable;
    },
    
    applyText(canvas, text, defaultFontSize){
        const ctx = canvas.getContext("2d");
        do {
            ctx.font = `${(defaultFontSize -= 10)}px Bold`;
        } while (ctx.measureText(text).width > 600);
        return ctx.font;
    }

};
