import React from 'react'

function Saved (props) {
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
            <h3 style={style.heading}>Saved</h3>
            {props.savedArticles.map(function(article) {
                return (
                    <div key={article._id} style={style.item}>
                        <span>{article.title}</span>
                        <button onClick={props.deleteSavedArticle(article._id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Saved