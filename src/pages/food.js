import { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

const importAll = (r) => r.keys().map(r);
var markdownFiles = importAll(require.context('posts/foodposts', false, /\.md$/));
var half_length = Math.ceil(markdownFiles.length / 2);    
markdownFiles = markdownFiles.slice(0,half_length).sort().reverse();

class Food extends Component {
    state = {
        posts: []
    }

    async componentDidMount() {
        const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
            .catch((err) => console.error(err));
        this.setState((state) => ({ ...state, posts }));
    }

    

    render() {
        const { posts } = this.state;
        return (
        <Fragment>
            <Helmet title="My Fat Ass Can't Stop Eating" />
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

export default Food;