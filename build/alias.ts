import { getPath } from "../src/utils/path";
export const createAlias = () => {
  return [
    // /@/xxx => src/xxx
    {
      find: /\/@\//,
      replacement: getPath("src") + "/"
    },
    // /#/xxx => types/xxx
    {
      find: /\/#\//,
      replacement: getPath("types") + "/"
    },
    // @/xxx => src/xxx
    {
      find: /@\//,
      replacement: getPath("src") + "/"
    },
    // #/xxx => types/xxx
    {
      find: /#\//,
      replacement: getPath("types") + "/"
    }
  ];
};
