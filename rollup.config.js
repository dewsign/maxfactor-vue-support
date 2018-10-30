import RollupPluginBabel from 'rollup-plugin-babel'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named',
    },
    external: [
        'vue',
        'axios',
    ],
    plugins: [
        RollupPluginBabel(),
    ],
}
