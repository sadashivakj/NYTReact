import React, { Component } from 'react'
import Header from './header.jsx'
import Body from './body.jsx'
import Footer from './footer.jsx'

class Root extends Component {
    constructor() {
        super()
        this.state = {
            searchActive: false,
            articles: ['there was a dog', 'there was a cat', 'there was a fish'],
            savedArticles: []
        }
        this.submitSearch = this.submitSearch.bind(this)
        this.activateSearch = this.activateSearch.bind(this)
        this.saveArticle = this.saveArticle.bind(this)
    }
    componentDidMount() {
        //database call
    }
    submitSearch(event) {
        event.preventDefault()
        var form = event.target
        var formData = new FormData(form)
        for (var entry of formData.entries()) {
            console.log(entry)
        }
        this.setState({searchActive: false})
    }
    activateSearch() {
        this.setState({searchActive: true})
    }
    saveArticle() {
        //database call
    }
    render() {
        var style = {
            container: {
                display: 'grid',
                gridTemplateRows: '2fr 17fr 1fr',
                gridTemplateColumns: '1fr',
                height: '100vh',
            }
        }
        return (
            <div style={style.container}>
                <Header />
                <Body
                    submitSearch={this.submitSearch}
                    activateSearch={this.activateSearch}
                    searchActive={this.state.searchActive}
                    articles={this.state.articles}
                />
                <Footer />
            </div>
        )
    }
}

export default Root