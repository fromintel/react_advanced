import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config!.resolve!.modules!.unshift(paths.src);
  config!.resolve!.extensions!.push('ts', 'tsx');

  const rules = config.module!.rules as RuleSetRule[];
  config.module!.rules = rules.map((rule) => (
    /svg/.test(rule.test as string)
      ? { ...rule, exclude: /\.svg$/i }
      : rule
  ));

  config!.module!.rules.push(buildSvgLoader());
  config!.module!.rules.push(buildCssLoader(true));
  config!.plugins!.push(
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(false),
      _API_: JSON.stringify(''),
      _PROJECT_: JSON.stringify('storybook'),
    }),
  );

  return config;
};
