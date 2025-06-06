import { launchEvents, eventDetails, launches } from '../mock/mockData.js';
export const getEvents = async (_req, res) => {
    try {
        res.json({
            success: true,
            data: launches,
            message: 'Launches fetched successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch launches'
        });
    }
};
export const getEventById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const events = launchEvents[id];
        if (!events) {
            res.status(404).json({
                success: false,
                message: 'Launch events not found'
            });
            return;
        }
        res.json({
            success: true,
            data: events
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch launch events'
        });
    }
};
export const getEventDetails = async (req, res) => {
    try {
        const eventName = req.params.eventName;
        const event = eventDetails.find(e => e.eventName === eventName);
        if (!event) {
            res.status(404).json({
                success: false,
                message: 'Event not found'
            });
            return;
        }
        res.json({
            success: true,
            data: event
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch event details'
        });
    }
};
