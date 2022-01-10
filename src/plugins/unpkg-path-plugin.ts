import * as esbuild from 'esbuild-wasm';
import axios from 'axios'

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log('onResolve', args);
        if (args.path === 'index.js') {
          return { path: args.path, namespace: 'a' };
        }

        if (args.path.includes('./') || args.path.includes('../')) {
          return {
            namespace: 'a',
            path: new URL(args.path, 'https://unpkg.com'+args.resolveDir+'/').href // string template?
          }
        }

        return {
          namespace: 'a',
          path: `https://unpkg.com/${args.path}`
        }
        // if (args.path === 'tiny-test-pkg') {
        //   return { path: 'https://unpkg.com/tiny-test-pkg@1.0.0/index.js', namespace: 'a' }
        // }
      });

      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log('onLoad', args);

        if (args.path === 'index.js') {
          return {
            loader: 'jsx',
            contents: `
              const message = require('nested-test-pkg');
              console.log(message);
            `,
          };
        }
        const { data, request } = await axios.get(args.path)
      
        return {
          loader: 'jsx',
          contents: data,
          resolveDir: new URL('./', request.responseURL).pathname
        }

      });
    },
  };
};