//Configuration File
//Below is a sample CRACO configuration file. Your final config file will be much shorter than this sample. See example CRACO configurations in Recipes.

//Some sections have a mode property. When this is available there are 2 possible values:

//extends: the provided configuration will extends the CRA settings (default mode)
//file: the CRA settings will be reset and you will provide an official configuration file for the plugin (postcss, eslint) that will supersede any settings.
const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");

module.exports = {
  
};