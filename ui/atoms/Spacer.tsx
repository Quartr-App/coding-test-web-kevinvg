type SpacerProps = {
  orientation?: "vertical" | "horizontal";
  size?: number;
};

export const Spacer = ({ orientation = "vertical", size = 1 }: SpacerProps) => (
  <div
    style={{ [orientation === "vertical" ? "height" : "width"]: size * 8 }}
  />
);
