import { success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
const goodRequest = () =>
    success({
        title: 'Success! Request processed.',
        delay: 1000
    });
const notFound = () =>
    error({
        title: 'Something be wrong. Please enter another text!',
        delay: 1000
    })
export default {
    goodRequest,
    error: notFound
}