import { TaskTrackerPage } from '../view/pages/TaskTrackerPage.js';
import { NotFoundPage } from '../view/pages/NotFoundPage.js';
export const routes = { '/': TaskTrackerPage, '*': NotFoundPage };
