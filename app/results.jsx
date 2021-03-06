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
            {props.articles.map(function(article, i) {
                console.log(article)
                return (
                    <div key={i} style={style.item}>
                        <span>{article.title}</span>
                        <button onClick={props.saveArticle(article)}>Save</button>
                    </div>
                )
            })}
        </div>

    )
}

export default Results
