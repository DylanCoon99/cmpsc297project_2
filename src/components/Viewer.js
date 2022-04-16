import React from "react";

export default function Viewer({ svgData }){
    //contains the svg display structure for the application
    
    //returns a JSX component for the SVG display
    return(
        <>
            <img
                src = {`data:image/svg+xml;utf8,${encodeURIComponent(svgData)}}`}
                alt = "SVG currently being displaye"
                style = {{
                    maxWidth: 420, //Stop the SVG from expanding
                }}
                
            />
        </>
    );
}
