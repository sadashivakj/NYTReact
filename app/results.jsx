import React from 'react'

function Results (props) {
    var style = {
        container: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            border: '2px solid black',
            gridGap: '20px',
            padding: '20px 10px'
        },
        heading: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        item: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            border: '2px solid black'
        }
    }
    return (
        <div style={style.container}>
            <h3 style={style.heading}>Results</h3>
            {props.articles.map(function(article) {
                return (
                    <div style={style.item}>
                        <span>{article}</span>
                        <button>Save</button>
                    </div>
                )
            })}
        </div>

    )
}

export default Results
