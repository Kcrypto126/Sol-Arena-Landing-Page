export const sendEvent = (event: string, eventData: {}, eventCb: () => void = () => {}) => {
    window.dataLayer = window.dataLayer || [];
    (window.dataLayer as unknown[]).push({
        ...eventData,
        event,
        eventCallback: eventCb,
    });
};
