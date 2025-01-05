export const classNames = (
  array: ({ [key: string]: string } | string | undefined)[]
) => array.join(" ").trim();
