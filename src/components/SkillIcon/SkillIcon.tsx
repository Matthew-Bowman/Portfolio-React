import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import type { ImageAsset } from '../../data/images';

type Size = 'small' | 'medium' | 'large';

type SkillIconProps = {
    label: string;
    thumbnail: ImageAsset,
    size?: Size; // optional predefined size prop
};

const sizeMap: Record<Size, number> = {
    small: 48,
    medium: 64,
    large: 96,
};

const SkillIcon: React.FC<SkillIconProps> = ({ label, thumbnail, size = 'medium' }) => {
    const dimension = sizeMap[size];

    return (
        <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${label}`}>{label}</Tooltip>}
        >
            <img
                src={thumbnail.src}
                alt={thumbnail.alt}
                className="border rounded-3 p-2 shadow-sm"
                width={dimension}
                height={dimension}
            />
        </OverlayTrigger>
    );
};

export default SkillIcon;
