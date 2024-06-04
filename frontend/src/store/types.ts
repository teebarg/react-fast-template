import { SVGProps } from "react";

// eslint-disable-next-line no-undef
type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

// TODO: needs a better typing for Recoil
type AtomEffectParams = {
    // eslint-disable-next-line
    [key: string]: any;
};

export type { AtomEffectParams, IconSvgProps };
