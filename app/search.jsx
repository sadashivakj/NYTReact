import React from 'react'

function Search (props) {
    var style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid black'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        }
    }
    if (!props.searchActive) {
        var form = (
            <form style={style.form} >
                <label>Topic<input onFocus={props.activateSearch} type="text" name="topic" value=""/></label>
                <label>Start Year<input onFocus={props.activateSearch} type="text" name="startYear" value="" /></label>
                <label>End Year<input onFocus={props.activateSearch} type="text" name="endYear" value="" /></label>
                <input type="submit" value="Search" />
            </form>
        )
    }
    else {
        var form = (
            <form style={style.form} onSubmit={props.submitSearch}>
                <label>Topic<input type="text" name="topic" /></label>
                <label>Start Year<input type="text" name="startYear" /></label>
                <label>End Year<input type="text" name="endYear" /></label>
                <input type="submit" value="Search" />
            </form>
        )
    }
    return (
         <div style={style.container}>
             <div>
                 <h3>Search</h3>
             </div>
             <div>
                {form}
             </div>
         </div>
    )
}

export default Search