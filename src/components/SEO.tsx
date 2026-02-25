import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
    title: string;
    description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
    const location = useLocation();
    const siteUrl = "https://mobiltyrefitt.com";
    // Remove any trailing slashes and ensure only one slash between siteUrl and pathname
    const cleanPath = location.pathname === "/" ? "" : location.pathname;
    const canonicalUrl = `${siteUrl}${cleanPath}`;

    useEffect(() => {
        // Update document title
        document.title = title;

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description || "Mobile Tyre Fitt offers fast, reliable mobile tyre repair and replacement across the UK.");
        }

        // Manage canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute("href", canonicalUrl);

        // Update OG tags
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", canonicalUrl);

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", title);

    }, [title, description, canonicalUrl]);

    return null;
};

export default SEO;
