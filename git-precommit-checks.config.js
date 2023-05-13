module.exports = {
  display: {
    notifications: true,
    offendingContent: true,
    rulesSummary: false,
    shortStats: true,
    verbose: false,
  },
  ignore: [/\/dist\//],
  rules: [
    {
      message: 'Did you forget to complete some tasks?',
      nonBlocking: true,
      regex: /(?:FIXME|TODO)/,
    },
    {
      message: 'You have conflict markers present in your code',
      regex: /^[<>|=]{4,}/m,
    },
    {
      filter: /\.js|\.ts$/,
      message: '🤔 Hum ! Didn\'t you forget to delete "console.log(…)" ?',
      nonBlocking: true,
      regex: /^\s*console\.log/,
    },
  ],
};
