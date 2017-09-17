import React from 'react'

function Search (props) {
    var style = {
        container: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr 7fr',
            border: '2px solid black'
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
        }
    }
    if (!props.searchActive) {
        var form = (
            <form style={style.form} >
                <label>Topic<input onFocus={props.activateSearch} type="text"  value=""/></label>
                <label>Start Year<input onFocus={props.activateSearch} type="text"  value="" /></label>
                <label>End Year<input onFocus={props.activateSearch} type="text"  value="" /></label>
                <input type="submit" value="Search" />
            </form>
        )
    }
    else {
        var form = (
            <form style={style.form} onSubmit={props.submitSearch}>
                <label>Topic<input type="text" name="q" /></label>
                <label>Start Year<input type="text" name="begin_date" /></label>
                <label>End Year<input type="text" name="end_date" /></label>
                <input type="submit" value="Search" />
            </form>
        )
    }
    return (
         <div style={style.container}>
             <h3 style={style.title}>Search</h3>
             {form}
         </div>
    )
}

export default Search



