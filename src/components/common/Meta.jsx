import { useEffect } from 'react';

const Meta = ({ title, description }) => {
    useEffect(() => {
        // Store previous values to restore on unmount (optional, but good practice)
        const previousTitle = document.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');

        const previousDescription = metaDescription ? metaDescription.getAttribute('content') : '';
        const previousOgTitle = ogTitle ? ogTitle.getAttribute('content') : '';
        const previousOgDescription = ogDescription ? ogDescription.getAttribute('content') : '';

        if (title) {
            document.title = title;
            if (ogTitle) ogTitle.setAttribute('content', title);
        }
        
        if (description) {
            if (metaDescription) metaDescription.setAttribute('content', description);
            if (ogDescription) ogDescription.setAttribute('content', description);
        }

        // Cleanup: restore previous meta data when component unmounts
        return () => {
            document.title = previousTitle;
            if (metaDescription) metaDescription.setAttribute('content', previousDescription);
            if (ogTitle) ogTitle.setAttribute('content', previousOgTitle);
            if (ogDescription) ogDescription.setAttribute('content', previousOgDescription);
        };
    }, [title, description]);

    return null;
};

export default Meta;
