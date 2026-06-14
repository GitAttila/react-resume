# React + TypeScript + Vite

A personal resume app built with React, TypeScript, and Vite.

Uses [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) (Babel) for Fast Refresh.

## ESLint Configuration

This project uses type-aware lint rules for production-quality linting:

- Uses `plugin:@typescript-eslint/recommended-type-checked` for type-aware TypeScript linting
- Configured `parserOptions` with `project` references to `tsconfig.json` and `tsconfig.node.json`
- `eslint.config.js` is excluded from linting via the `ignores` list

### Note on `eslint-plugin-react`

[eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) is not currently installed because it does not yet support ESLint v10+ (peer dep requires `eslint@^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7`). React-specific linting is covered by `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` in the meantime.
