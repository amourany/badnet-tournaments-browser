// @ts-check
import tseslint from 'typescript-eslint';

// plugins
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from "eslint-plugin-react-hooks";
import stylistic from '@stylistic/eslint-plugin';
import * as importPlugin from 'eslint-plugin-import';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import pluginJest from 'eslint-plugin-jest';

// config

const config = [
    {
        ignores: [
            '.eslintrc.js',
            '.github/*',
            '.husky/*',
            '.vscode/*',
            '.yarn/*',
            '*.config.js',
            '*.config.log',
            'dist/**',
            'node_modules/**',
            'package-lock.json',
            'package.json',
            'yarn.lock',
        ],
    },

    {
        // update this to match your test files
        files: ['**/*.spec.ts*', '**/*.test.ts*'],
        plugins: { jest: pluginJest },
    },
    // TypeScript/JavaScript configuration
    {
        files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            stylistic,
            import: importPlugin,
            'sort-keys-fix': sortKeysFix,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: '18.3.1',
            },
            'import/resolver': {
                typescript: {
                    project: './tsconfig.json'
                }
            }
        },
        rules: {
            ...reactHooksPlugin.configs.recommended.rules,
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    'argsIgnorePattern': '^_',
                    'ignoreRestSiblings': true,
                    'varsIgnorePattern': '^_',
                },
            ],
            'arrow-body-style': 'error',
            'no-console': 'warn',
            'no-trailing-spaces': 'error',
            'prefer-arrow-callback': ['error', {
                allowNamedFunctions: true,
            }],
            'react/button-has-type': 'error',
            'react/destructuring-assignment': [
                'error',
                'always',
                {
                    destructureInSignature: 'always',
                },
            ],
            'react/display-name': 'error',
            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                },
            ],
            'react/jsx-fragments': 'error',
            'react/jsx-key': [
                'error',
                {
                    checkFragmentShorthand: true,
                    checkKeyMustBeforeSpread: true,
                    warnOnDuplicates: true,
                },
            ],
            'react/jsx-max-depth': [
                'error',
                {
                    max: 5,
                },
            ],
            'react/jsx-no-leaked-render': [
                'error',
                {
                    validStrategies: [
                        'ternary',
                    ],
                },
            ],
            'react/jsx-no-script-url': 'error',
            'react/jsx-pascal-case': 'error',
            'react/jsx-sort-props': 'error',
            'react/jsx-uses-react': 'off',
            'react/no-children-prop': 'error',
            'react/no-danger': 'error',
            'react/no-danger-with-children': 'error',
            'react/no-typos': 'error',
            'react/no-unstable-nested-components': [
                'error',
                {
                    allowAsProps: true,
                },
            ],
            'react/no-unused-prop-types': 'error',
            'react/prefer-stateless-function': 'error',
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/self-closing-comp': 'error',
            'semi': 'error',
            'sort-imports': ['error', {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
                allowSeparatedGroups: true,
            }],
            'sort-keys': ['error', 'asc', {
                caseSensitive: false,
                minKeys: 2,
                natural: true,
            }],
            'sort-keys-fix/sort-keys-fix': 'error',
            'stylistic/array-bracket-newline': ['error', {
                'minItems': 1,
                'multiline': true,
            }],
            'stylistic/array-element-newline': ['error', {
                'minItems': 1,
                'multiline': true,
            }],
            'stylistic/comma-dangle': [
                'error',
                'always-multiline',
            ],
            'stylistic/indent': ['error', 'tab'],
            'stylistic/jsx-first-prop-new-line': 'error',
            'stylistic/jsx-max-props-per-line': 'error',
            'stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
            'stylistic/jsx-one-expression-per-line': [
                'error',
                {
                    allow: 'single-child',
                },
            ],
            'stylistic/object-curly-spacing': ['error', 'always'],
            'stylistic/object-property-newline': [
                'error',
                {
                    'allowAllPropertiesOnSameLine': false,
                },
            ],
            'stylistic/quote-props': ['error', 'consistent', {
                keywords: true,
            }],
            'stylistic/quotes': [2, 'single'],
            'stylistic/semi': 'error',
        }
    },
];

export { config, config as default };
