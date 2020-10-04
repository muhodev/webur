import React from 'react'
import { Layout, PostWidget, PostTopWidget, CommunityAboutWidget, NewPostWidget, Avatar, Box } from '../components'
import { posts } from "../api/"


function HomePage(props) {
    return (
        <Layout>
            <div className="mt-2 mb-2">
                <PostTopWidget />
                <div className="posts">

                    {
                        posts.map((post, index) => (
                            <PostWidget data={post} key={index} />
                        ))
                    }
                </div>
            </div>
            <div className="posts-sidebar__right mt-2 mb-2 mr-4">
                <NewPostWidget />
                <div className="mt-2 mb-2">
                    <CommunityAboutWidget />
                </div>
                <div className="widget mb-2">
                    <div className="widget__container">
                        <div className="f-weight--medium">
                            Etiketler
                        </div>
                        <div className="widget__tags">
                            <div className="widget__tag">
                                cpp
                            </div>
                            <div className="widget__tag">
                                genel
                            </div>
                            <div className="widget__tag">
                                frameworks
                            </div>
                            <div className="widget__tag">
                                cpp
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget__container">
                        <div className="f-weight--medium mb-1">
                            Profiller
                        </div>
                        <div className="text-secondary f-size--sm mb-4">
                            Kreatif içerik üreten profilleri keşfedin.
                        </div>
                        <div className="d-flex align-start mb-4">
                            <Avatar size="md" img="https://pbs.twimg.com/profile_images/1193093959435915264/yFPx32G7_400x400.jpg" />
                            <div className="author__content">
                                <div className="author">
                                    <div className="author__name">
                                        fka
                                </div>
                                    <div className="author__username ml-1">
                                        @f
                                </div>
                                </div>
                                <div className="word-break mt-1 f-size--sm">
                                    chief null maker. developer. loves javascript, etymology and flutes
                                </div>
                            </div>

                        </div>
                        <div className="d-flex align-start">
                            <Avatar size="md" img="https://pbs.twimg.com/profile_images/1028017044338434055/yzjp5rVU_400x400.jpg" />
                            <div className="author__content">
                                <div className="author">
                                    <div className="author__name">
                                        M.Atıf Ceylan
                                </div>
                                    <div className="author__username ml-1">
                                        @atifceylan
                                </div>
                                </div>
                                <div className="word-break mt-1 f-size--sm">
                                    Bugperest #Cloud #PostgreSQL #Scalability #Debian #PHP
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default HomePage