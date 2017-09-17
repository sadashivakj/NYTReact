import React, { Component } from 'react'
import Header from './header.jsx'
import Body from './body.jsx'
import Footer from './footer.jsx'

class Root extends Component {
    constructor() {
        super()
        this.state = {
            searchActive: false,
            articles: [],
            savedArticles: []
        }
        this.submitSearch = this.submitSearch.bind(this)
        this.activateSearch = this.activateSearch.bind(this)
        this.saveArticle = this.saveArticle.bind(this)
        this.deleteSavedArticle = this.deleteSavedArticle.bind(this)
    }
    componentDidMount() {
        //database call
        fetch('/saved').then(function(data) {
            return data.json()
        }).then(function(data) {
            this.setState({savedArticles: this.state.savedArticles.concat(data)})
            console.log(this.state.savedArticles)
        }.bind(this))

        /* 
            axios.get('/saved', function(data) {
                this.setState({savedArticles: this.state.savedArticles.concat(data)})
            })
        */
    }
    submitSearch(event) {
        event.preventDefault()
        this.setState({searchActive: false})
        var url = new URL('https://api.nytimes.com/svc/search/v2/articlesearch.json')
        var form = event.target
        var formData = new FormData(form)
        url.searchParams.append('api-key', '87578ffc554043d1a0deb92ba48818f1')
        for (var entry of formData.entries()) {
            if (entry[0].includes('date')) {
                url.searchParams.append(entry[0], `${entry[1]}0101`)
            }
            url.searchParams.append(...entry)
        }
        console.log(url.toString())
        fetch(url).then(function(data) {
            return data.json()
        }).then(function(data) {
            var newState = data.response.docs.map(function(article) {
                return {
                    title: article.headline.main,
                    url: article.web_url,
                    date: article.pub_date,
                }
            })
            this.setState({articles: newState})
        }.bind(this))
    }
    activateSearch() {
        this.setState({searchActive: true})
    }
    saveArticle(article) {
        return function(event) {
            event.preventDefault()
            var header = new Headers()
            header.append('Content-Type', 'application/json')
            fetch('/save', { 
                headers: header,
                method: 'post', 
                body: JSON.stringify(article)
            }).then(function(res) {
                return res.json()
            }).then(function(res) {
                if (res.failed) {
                    console.log(res)
                } else {
                    console.log(res)
                    this.setState({
                        savedArticles: this.state.savedArticles.concat(res),
                        articles: this.state.articles.filter(x => x.title != article.title)
                    })
                }
            }.bind(this))
        }.bind(this)
        //database call
    }
    deleteSavedArticle(id) {
        return function(event) {
            event.preventDefault()
            var newState = this.state.savedArticles.filter(function(article) {
                return article._id != id
            })
            console.log(newState.length)
            var header = new Headers()
            header.append('Content-Type', 'application/json')
            fetch('/delete', { 
                method: 'post', 
                body: JSON.stringify({_id: id}),
                headers: header
            }).then(x => x.json()).then(function(res) {
                if (res.deleted) {
                    this.setState({savedArticles: newState})   
                }
                else {
                    console.log(res)
                }
            }.bind(this))
        }.bind(this)
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
                    savedArticles={this.state.savedArticles}
                    articles={this.state.articles}
                    deleteSavedArticle={this.deleteSavedArticle}
                    saveArticle={this.saveArticle}
                />
                <Footer />
            </div>
        )
    }
}

export default Root