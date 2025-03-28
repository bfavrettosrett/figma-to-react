{
    /* <div style={{width: '100%', height: '100%', position: 'relative', overflow: 'hidden', borderRadius: 5, border: '1px #7B61FF solid'}}>
    <div data-property-1="Unchecked" style={{width: 368, left: 20, top: 20, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 24, height: 24, background: 'white', borderRadius: 8, outline: '1px #CCCCCC solid', outlineOffset: '-0.50px'}} />
        <div style={{color: '#414A78', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Unchecked<br/></div>
    </div>
    <div data-property-1="Checked" style={{width: 368, left: 20, top: 68, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 24, height: 24, background: 'white', borderRadius: 8, outline: '1px #CCCCCC solid', outlineOffset: '-0.50px'}} />
        <div style={{width: 24, height: 24, position: 'relative', overflow: 'hidden'}}>
            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}} />
            <div style={{width: 17.59, height: 13.41, left: 3.41, top: 5.59, position: 'absolute', background: '#161E46'}} />
        </div>
        <div style={{color: '#414A78', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Checked</div>
    </div>
</div> */
}

// // Unchecked<br/>
// color: '#414A78', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'
// ---
// // Checked
// color: '#414A78', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'

import React from "react";

export default function Checkbox() {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                borderRadius: 5,
                border: "1px #7B61FF solid",
            }}
        >
            <div
                data-property-1="Unchecked"
                style={{
                    width: 368,
                    left: 20,
                    top: 20,
                    position: "absolute",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "inline-flex",
                }}
            >
                <div
                    style={{
                        width: 24,
                        height: 24,
                        background: "white",
                        borderRadius: 8,
                        outline: "1px #CCCCCC solid",
                        outlineOffset: "-0.50px",
                    }}
                />
                <div
                    style={{
                        color: "#414A78",
                        fontSize: 14,
                        fontFamily: "Noto Sans",
                        fontWeight: "400",
                        lineHeight: 24,
                        wordWrap: "break-word",
                    }}
                >
                    Unchecked
                    <br />
                </div>
            </div>
            <div
                data-property-1="Checked"
                style={{
                    width: 368,
                    left: 20,
                    top: 68,
                    position: "absolute",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "inline-flex",
                }}
            >
                <div
                    style={{
                        width: 24,
                        height: 24,
                        background: "white",
                        borderRadius: 8,
                        outline: "1px #CCCCCC solid",
                        outlineOffset: "-0.50px",
                    }}
                />
                <div style={{ width: 24, height: 24, position: "relative", overflow: "hidden" }}>
                    <div style={{ width: 24, height: 24, left: 0, top: 0, position: "absolute" }} />
                    <div
                        style={{
                            width: 17.59,
                            height: 13.41,
                            left: 3.41,
                            top: 5.59,
                            position: "absolute",
                            background: "#161E46",
                        }}
                    />
                </div>
                <div
                    style={{
                        color: "#414A78",
                        fontSize: 14,
                        fontFamily: "Noto Sans",
                        fontWeight: "400",
                        lineHeight: 24,
                        wordWrap: "break-word",
                    }}
                >
                    Checked
                </div>
            </div>
        </div>
    );
}
