import { ChevronRight } from "./icons/ChevronRight";

export type IconBaseProps = {
  width?: number;
  height?: number;
};

type IconName = "chevron-right";

type IconProps = IconBaseProps & {
  name: IconName;
};

export const Icon = ({ name, height = 24, width = 24 }: IconProps) => {
  const IconComponent = iconsByName[name];
  return <IconComponent width={width} height={height} />;
};

const iconsByName: {
  [key in IconName]: (props: IconBaseProps) => JSX.Element;
} = {
  "chevron-right": ChevronRight,
};
