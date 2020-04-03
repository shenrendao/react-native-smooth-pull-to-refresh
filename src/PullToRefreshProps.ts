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
export const defaultPTRBackgroundColor = "#f4f4f4";
export const pullAnimatedBackgroundColor = "#f4f4f4";
