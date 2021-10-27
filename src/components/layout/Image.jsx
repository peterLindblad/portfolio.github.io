
const imageStyle = {
    maxWidth: "100%",
    objectFit: "cover",
    verticalAlign: "bottom",
};

export function Image({ src, alt="No Description", maxImageHeight = "" }) {

    let imageElement;
    if (maxImageHeight !== "") {
        let imageContainerStyle = 
        {
            maxHeight: maxImageHeight,
            overflow: "hidden",
        };
        imageElement = (
            <div style={imageContainerStyle}>
                <img src={src} alt={alt} style={imageStyle}/>
            </div>
        );
    }
    else
        imageElement = (<img src={src} alt={alt} style={imageStyle}/>);
    
    return ( <> {imageElement} </> );
}