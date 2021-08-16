const typescript = require('@rollup/plugin-typescript')
const commonjs = require('@rollup/plugin-commonjs')
const {
  babel,
} = require('@rollup/plugin-babel')
const pkg = require('./package.json')

const common = {
  external: [
    'polished',
  ],
}

module.exports = [
  {
    ...common,
    input: './src/index.ts',
    output: {
      file: pkg.main,
      format: 'cjs',
    },
    plugins: [
      typescript(),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        extensions: [
          '.ts',
          '.tsx',
        ],
        presets: [[
          '@bugfixes', {
            useRuntimeESModules: false,
          },
        ]],
      }),
    ],
  },
  {
    ...common,
    input: './src/index.ts',
    output: {
      file: pkg.module,
      format: 'es',
    },
    plugins: [
      typescript(),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        extensions: [
          '.ts',
          '.tsx',
        ],
        presets: [[
          '@bugfixes', {
            useRuntimeESModules: true,
          },
        ]],
      }),
    ],
  },
]
