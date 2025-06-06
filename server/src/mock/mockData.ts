import { LaunchEvent, EventDetail, Launch } from '../types/index.js';

export const launchEvents: { [key: number]: LaunchEvent[] } = {
    1: [
        { eventName: 'Pre-Launch Meeting', timeProcessed: '2 hours', timeRemaining: '0 hours', location: 'Conference Room A', responseRecommendation: 'Proceed' },
        { eventName: 'System Check', timeProcessed: '45 minutes', timeRemaining: '15 minutes', location: 'Server Room', responseRecommendation: 'Monitor' },
        { eventName: 'Final Review', timeProcessed: '0 minutes', timeRemaining: '3 hours', location: 'Main Hall', responseRecommendation: 'Prepare' },
        { eventName: 'Launch Ceremony', timeProcessed: '0 minutes', timeRemaining: '2 days', location: 'Auditorium', responseRecommendation: 'Schedule' },
        { eventName: 'Launch Analysis', timeProcessed: '0 minutes', timeRemaining: '3 days', location: 'Analysis Lab', responseRecommendation: 'Plan' },
        { eventName: 'Post-Launch', timeProcessed: '0 minutes', timeRemaining: '3 days', location: 'Analysis Lab', responseRecommendation: 'Plan' },
        { eventName: 'Launch', timeProcessed: '0 minutes', timeRemaining: '3 days', location: 'Analysis Lab', responseRecommendation: 'Plan' },
        { eventName: 'Analysis', timeProcessed: '0 minutes', timeRemaining: '3 days', location: 'Analysis Lab', responseRecommendation: 'Plan' },
    ],
    2: [
        { eventName: 'Planning Session', timeProcessed: '3 hours', timeRemaining: '0 hours', location: 'Meeting Room B', responseRecommendation: 'Complete' },
        { eventName: 'Resource Allocation', timeProcessed: '1 hour', timeRemaining: '2 hours', location: 'Office 201', responseRecommendation: 'Continue' },
        { eventName: 'Quality Assurance', timeProcessed: '0 minutes', timeRemaining: '4 hours', location: 'QA Lab', responseRecommendation: 'Initiate' },
        { eventName: 'Stakeholder Review', timeProcessed: '0 minutes', timeRemaining: '1 day', location: 'Boardroom', responseRecommendation: 'Prepare' },
        { eventName: 'Go-Live Event', timeProcessed: '0 minutes', timeRemaining: '3 days', location: 'Main Campus', responseRecommendation: 'Ready' },
    ],
    3: [
        { eventName: 'Initial Briefing', timeProcessed: '0 minutes', timeRemaining: '5 days', location: 'Conference Hall', responseRecommendation: 'Schedule' },
        { eventName: 'Technical Setup', timeProcessed: '0 minutes', timeRemaining: '6 days', location: 'Tech Center', responseRecommendation: 'Plan' },
        { eventName: 'Beta Testing', timeProcessed: '0 minutes', timeRemaining: '7 days', location: 'Testing Lab', responseRecommendation: 'Prepare' },
        { eventName: 'User Training', timeProcessed: '0 minutes', timeRemaining: '8 days', location: 'Training Room', responseRecommendation: 'Design' },
        { eventName: 'Launch Day', timeProcessed: '0 minutes', timeRemaining: '9 days', location: 'Main Venue', responseRecommendation: 'Coordinate' },
    ],
};

export const eventDetails: EventDetail[] = [
    {
        eventName: 'Pre-Launch Meeting',
        launchSite: 'Balkonur, RUS',
        surpriseLaunch: 'Yes',
        eventTime: '25-12-25',
        blueObjs: 'AMER-123',
        redObjs: 'Rocket Booster',
        periodOfInterest: 'POI Timestamp1-timestamp2'
    },
    {
        eventName: 'Domestic Launch',
        launchSite: 'Cape Canaveral, USA',
        surpriseLaunch: 'No',
        eventTime: '30-12-25',
        blueObjs: 'AMER-456',
        redObjs: 'Satellite',
        periodOfInterest: 'POI Timestamp3-timestamp4'
    }
];

export const launches: Launch[] = [
    { id: 1, Proximity: 'Concert', location: 'NYC' },
    { id: 2, Proximity: 'Conference', location: 'LA' },
]; 