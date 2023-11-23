module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx", ".cjs"] },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "import/extensions": [
      "error",
      {
        js: "ignorePackages",
        jsx: "ignorePackages",
        ts: "ignorePackages",
        tsx: "ignorePackages",
        json: "always",
      },
    ],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    // "arrow-body-style": ["error", "always"],
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: true },
    ],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "react/prop-types": 0,
    "react/require-default-props": "off",
  },
};
