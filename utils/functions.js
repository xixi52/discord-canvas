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
    }


  };
