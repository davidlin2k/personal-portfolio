import React from "react";

const YouTubeEmbed = (props) => {
    return (
        <div>
            <iframe
                width="100 vw"
                height="480"
                src={`https://www.youtube.com/embed/${props.embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="youtube-embed-iframe"
            />
        </div>
    );
};

export default YouTubeEmbed;