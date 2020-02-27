module.exports = {

    /**
     * Gets variables color
     * @param {object} variables The variable simplified
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
            formattedVariable = "colorUsernameBox";
        } else if(variable === "ashtag") {
            formattedVariable = "colorAshtag";
        } else if(variable === "discriminator") {
            formattedVariable = "colorDiscriminator";
        } else if(variable === "discriminator-box") {
            formattedVariable = "colorDiscriminatorBox";
        } else if(variable === "message") {
            formattedVariable = "colorMessage";
        } else if(variable === "message-box") {
            formattedVariable = "colorMessageBox";
        } else if(variable === "number") {
            formattedVariable = "colorNumber";
        } else if(variable === "background") {
            formattedVariable = "colorBackground";
        } else if(variable === "border") {
            formattedVariable = "colorBorder";
        } else {
            return null;
        }
      return formattedVariable;
    },

    /**
     * Gets variables opacity
     * @param {object} variables The variable simplified
     * @returns The variable formatted
     */
    getOpacityVariable(variables) {
        let formattedVariable = null,
        variable = variables.toLowerCase()
        if(variable === "username-box") {
            formattedVariable = "opacityUsernameBox";
        } else if(variable === "discriminator-box") {
            formattedVariable = "opacityDiscriminatorBox";
        } else if(variable === "message-box") {
            formattedVariable = "opacityMessageBox";
        } else if(variable === "border") {
            formattedVariable = "opacityBorder";
        } else {
            return null;
        }
      return formattedVariable;
    },

    /**
     * Gets variables text
     * @param {object} variables The variable simplified
     * @returns The variable formatted
     */
    getTextVariable(variables) {
        let formattedVariable = null,
        variable = variables.toLowerCase()
        if(variable === "title") {
            formattedVariable = "textTitle";
        } else if(variable === "message") {
            formattedVariable = "textMessage";
        } else if(variable === "number") {
            formattedVariable = "textNumber";
        } else {
            return null;
        }
      return formattedVariable;
    }




  };