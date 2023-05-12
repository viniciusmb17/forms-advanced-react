module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    // "eslint:recommended",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:react-hooks/recommended",
    "@rocketseat/eslint-config/react",
  ],
  plugins: ["react-refresh", "eslint-plugin-import-helpers"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          ["/^react/", "/^next/", "/@next/"],
          "/module/",
          "/^@shared/",
          "/^absolute/",
          "/^components/",
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
  },
};
