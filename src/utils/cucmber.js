module.exports = {
    default: {
        require: ['src/tests/step-definitions/*.ts'], // Path to step definitions
        format: ['pretty'], // Output format
        paths: ['src/tests/features/*.feature'], // Path to feature files
        publishQuiet: true, // Disable publishing to the Cucumber Reports service
    },
};