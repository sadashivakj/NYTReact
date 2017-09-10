import React from 'react'

function Header (props) {
    var style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid black',
        },
        TitleH1: {
            textDecoration : "underline",
        }
    }
    return (
        <div style={style.container}>
            <h1 style={style.TitleH1}> New York Times Article Scrubber </h1>
            <h3> Search for and annotate articles of interest! </h3>
        </div>
    )
}

export default Header