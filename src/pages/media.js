import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

const importAll = (r) => r.keys().map(r);
var markdownFiles = importAll(require.context('posts/mediaposts', false, /\.md$/))
  .reverse();
var half_length = Math.ceil(markdownFiles.length / 2);    
markdownFiles = markdownFiles.slice(0,half_length);

class Media extends Component {
    state = {
        posts: []
    }

    async componentDidMount() {
        const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
            .catch((err) => console.error(err));
        console.log(markdownFiles);

        this.setState((state) => ({ ...state, posts }));
    }

    

    render() {
        const { posts } = this.state;
        return (
        <Fragment>
            <Helmet title="The Gang Talks About Sports" />
            <section className="section">
                <div>
                {
                    posts.map((post, idx) => (
                        <div className="card" key={idx}>
                            <div className="card-content">
                                <div className="content">
                                    <ReactMarkdown children={post} />
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </section>
        </Fragment>
        );
    }
}

export default Media;