import { Router } from 'express';
import { getEvents, getEventById, getEventDetails } from '../controllers/data.controller.js';

const router = Router();

router.get('/events', getEvents);

router.get('/events/:id/events', getEventById);

router.get('/events/:id/events/:eventName', getEventDetails);

export default router;
