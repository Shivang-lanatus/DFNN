export interface LaunchEvent {
    eventName: string;
    timeProcessed: string;
    timeRemaining: string;
    location: string;
    responseRecommendation: string;
}

export interface EventDetail {
    eventName: string;
    launchSite: string;
    surpriseLaunch: string;
    eventTime: string;
    blueObjs: string;
    redObjs: string;
    periodOfInterest: string;
}

export interface Launch {
    id: number;
    Proximity: string;
    location: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

export interface LaunchEventsResponse extends ApiResponse<LaunchEvent[]> { }
export interface EventDetailResponse extends ApiResponse<EventDetail> { }
export interface LaunchesResponse extends ApiResponse<Launch[]> { } 