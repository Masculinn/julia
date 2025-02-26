import { CSSProperties, SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

/** Redux Types Starts */

export type ThemeState = "light" | "dark";
export interface ClientTrackerProps {
  clientId?: string;
  step: number;
  loaded: boolean;
  logs: string[];
  action: ClientTrackerActions;
}

export type ClientTrackerActions =
  | "SET_CLIENT_ID"
  | "SET_STEP"
  | "SET_LOADED"
  | "SET_LOGS"
  | "RESET";

/** Redux Types Ends */

/** Components Types Starts*/

export interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: CSSProperties;
}
/** Components Types Ends*/
