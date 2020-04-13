import {NativeScrollEvent, NativeSyntheticEvent} from "react-native";

export interface PullToRefreshProps {
    isRefreshing: boolean;
    onRefresh: () => void;
    contentComponent: JSX.Element;
    pullAnimHeight: number;
    pullAnimYValues: {from: number, to: number};
    minPullDistance?: number;
    backgroundColor?: string;
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    onTriggerToRefresh?: (isRefresh: boolean) => void;
    isReachEnd?: boolean;
    toPosition?: number;
}

export const defaultMinPullDistance = 120;
export const defaultPTRBackgroundColor = "rgba(0,0,0,0)";
export const pullAnimatedBackgroundColor = "rgba(0,0,0,0)";
