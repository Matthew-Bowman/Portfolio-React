import { type FC, useState } from "react";
import type { ImageAsset } from "../../data/images";

type Size = "small" | "medium" | "large";

type SkillIconProps = {
  label: string;
  thumbnail: ImageAsset;
  size?: Size; // optional predefined size prop
};

const sizeMap: Record<Size, number> = {
  small: 48,
  medium: 64,
  large: 96,
};

const SkillIcon: FC<SkillIconProps> = ({
  label,
  thumbnail,
  size = "medium",
}) => {
  const dimension = sizeMap[size];
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      tabIndex={0} // make div focusable for accessibility
      aria-label={label}
    >
      <img
        src={thumbnail.src}
        alt={thumbnail.alt}
        className="border rounded-3xl p-2 shadow-sm"
        width={dimension}
        height={dimension}
      />
      {showTooltip && (
        <div
          role="tooltip"
          className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-3 py-1 text-sm text-white shadow-lg z-10"
        >
          {label}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default SkillIcon;
