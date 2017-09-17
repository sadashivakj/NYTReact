import React from 'react'
import Search from './search.jsx'
import Results from './results.jsx'
import Saved from './saved.jsx'

function Body (props) {
    var style = {
        container: {
            display: 'grid',
            gridTemplateRows: 'repeat(3, 1fr)',
            gridGap: '20px',
            padding: '10px 50px',
            border: '2px solid black',
        }
    }
    return (
        <div style={style.container}>
            <Search
                submitSearch={props.submitSearch}
                searchActive={props.searchActive}
                activateSearch={props.activateSearch}
            />
            <Results 
                articles={props.articles}
                saveArticle={props.saveArticle}
            />
            <Saved 
                savedArticles={props.savedArticles}
                deleteSavedArticle={props.deleteSavedArticle}
            />
        </div>
    )
}

export default Body