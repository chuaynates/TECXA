import React, { Component } from 'react';
import Sidebar from './Sidebar';


class Blog extends Component {

    render() {
        return (
            <div className="center">
                <section id="content">

                    <h1 className="subheader">BLOG</h1>

                    <div className="blog-cardb altb">
                        <div className="meta">
                        </div>
                        <div className="description">
                            <h1>Cristian Huaynates</h1>
                            <h2>Diseño de Software</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                            <p className="read-more">
                                <a href="article.html">Leer más</a>
                            </p>
                        </div>
                    </div>

                    <div className="blog-cardb altb">
                        <div className="meta">
                        </div>
                        <div className="description">
                            <h1>Moisés Loarte</h1>
                            <h2>Diseño de Software</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                            <p className="read-more">
                                <a href="article.html">Leer más</a>
                            </p>
                        </div>
                    </div>
                    <div className="blog-cardb altb">
                        <div className="meta">
                        </div>
                        <div className="description">
                            <h1>Terry Laura</h1>
                            <h2>Aviónica y Aeronaútica</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                            <p className="read-more">
                                <a href="article.html">Leer más</a>
                            </p>
                        </div>
                    </div>

                </section>
                <Sidebar />
            </div>
           

        );
    }
}

export default Blog;