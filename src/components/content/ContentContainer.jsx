
const mainContainerStyle = {
    display: "flex",
    width: "100%",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
};

const innerContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    maxWidth: "1200px",
};

export default function ContentContainer()
{
    return (
        <main style={mainContainerStyle}>
            <div style={innerContainerStyle}>
                <h2>Headline</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim tincidunt eros. Phasellus auctor lorem in vulputate luctus. Vestibulum rhoncus facilisis magna, at viverra magna feugiat vel. In sagittis libero id pretium egestas. Quisque mi metus, bibendum sed lorem ut, egestas porta orci. Sed interdum egestas enim varius pellentesque. Duis pellentesque ut ligula et suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac neque et augue pellentesque sagittis. 
                </p>
            </div>
        </main>
    );
}