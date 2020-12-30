module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['functional'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:functional/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  reportUnusedDisableDirectives: true,
  rules: {
    '@typescript-eslint/array-type': ['warn', { default: 'array', readonly: 'array' }],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],

    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/strict-boolean-expressions': [
      'warn',
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
      },
    ],
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-body-style': ['warn', 'as-needed'],
    'array-callback-return': 'off',
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'functional/functional-parameters': [
      'error',
      {
        allowRestParameter: true,
        enforceParameterCount: false,
      },
    ],
    'functional/no-expression-statement': 'off', // ['error', { ignorePattern: ['^console\\.'] }],
    'functional/no-promise-reject': 'error',
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],

    'no-console': 'off',
    'no-empty-function': 'off',
    'no-inner-declarations': 'off',
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-multi-spaces': 'warn',
    'no-redeclare': 'off',
    'no-shadow': ['error', { builtinGlobals: true, hoist: 'functions' }],
    'no-undef': 'off',
    'no-unneeded-ternary': 'warn',
    'no-use-before-define': 'off',
    'no-useless-computed-key': 'warn',
    'no-useless-rename': 'warn',
    'object-shorthand': 'warn',
    'prettier/prettier': 'off',
    quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'react/display-name': 'off',
    'react/jsx-no-bind': [
      'warn',
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': ['warn', { component: true, html: true }],
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'space-in-parens': ['warn', 'never'],
    strict: 'warn',
  },
}