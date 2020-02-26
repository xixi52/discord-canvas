module.exports = {

    /**
     * Gets variables color
     * @param {object} variable The variable simplified
     * @returns The variable formatted
     */
    getColorVariable(variables) {
        let formattedVariable = null,
        variable = variables.toLowerCase()
        if(variable === "title") {
            formattedVariable = "colorTitle";
        } else if(variable === "title-border") {
            formattedVariable = "colorTitleBorder";
        } else if(variable === "avatar") {
            formattedVariable = "colorAvatar";
        } else if(variable === "username") {
            formattedVariable = "colorUsername";
        } else if(variable === "username-box") {
            formattedVariable = "colorBoxUsername";
        } else if(variable === "ashtag") {
            formattedVariable = "colorAshtag";
        } else if(variable === "discriminator") {
            formattedVariable = "colorDiscriminator";
        } else if(variable === "discriminator-box") {
            formattedVariable = "colorBoxDiscriminator";
        } else if(variable === "message") {
            formattedVariable = "colorMessage";
        } else if(variable === "message-box") {
            formattedVariable = "colorBoxMessage";
        } else if(variable === "number") {
            formattedVariable = "colorNumber";
        } else if(variable === "background") {
            formattedVariable = "backgroundColor";
        } else if(variable === "border") {
            formattedVariable = "colorBorder";
        } else {
            return null;
        }
      return formattedVariable;
    },

    /**
     * Gets variables opacity
     * @param {object} variable The variable simplified
     * @returns The variable formatted
     */
    getOpacityVariable(variables) {
        let formattedVariable = null,
        variable = variables.toLowerCase()
        if(variable === "username") {
            formattedVariable = "opacityBoxUsername";
        } else if(variable === "discriminator") {
            formattedVariable = "opacityBoxDiscriminator";
        } else if(variable === "message") {
            formattedVariable = "opacityBoxMessage";
        } else if(variable === "border") {
            formattedVariable = "opacityBorder";
        } else {
            return null;
        }
      return formattedVariable;
    },

    /**
     * Gets variables text
     * @param {object} variable The variable simplified
     * @returns The variable formatted
     */
    getTextVariable(variables) {
        let formattedVariable = null,
        variable = variables.toLowerCase()
        if(variable === "title") {
            formattedVariable = "title";
        } else if(variable === "message") {
            formattedVariable = "message";
        } else {
            return null;
        }
      return formattedVariable;
    }




  };