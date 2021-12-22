export default {
    plugins: [
        {
            plugin: require("craco-alias"),
            options: {
                source: "tsconfig",
                baseUrl: "./src",
                tsConfigPath: "./tsconfig.paths.json"
            }
        }
    ]
};