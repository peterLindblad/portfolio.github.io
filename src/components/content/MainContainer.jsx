
const mainContainerStyle = {
    display: "flex",
    width: "100%",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
};

export default function MainContainer({children})
{
    return (
        <main style={mainContainerStyle}>
            {children}
        </main>
    );
}