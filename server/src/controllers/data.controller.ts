import { Request, Response } from 'express';
import { launchEvents, eventDetails, launches } from '../mock/mockData.js';
import { ApiResponse, LaunchEvent, EventDetail, Launch } from '../types/index.js';

export const getEvents = async (_req: Request, res: Response<ApiResponse<Launch[]>>): Promise<void> => {
    try {
        res.json({
            success: true,
            data: launches,
            message: 'Launches fetched successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch launches'
        });
    }
};

export const getEventById = async (req: Request<{ id: string }>, res: Response<ApiResponse<LaunchEvent[]>>): Promise<void> => {
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
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch launch events'
        });
    }
};


export const getEventDetails = async (req: Request<{ eventName: string }>, res: Response<ApiResponse<EventDetail>>): Promise<void> => {
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
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch event details'
        });
    }
}; 