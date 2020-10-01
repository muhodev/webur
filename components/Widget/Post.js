import React from 'react'
import { Avatar } from '..'
import { Comment, Favorite, Bookmark, Share, More, Article, Question, Group, BaseIcon } from '../Icons'

function PostWidget({ data }) {
    return (
        <article className="widget">
            <div className="widget__container">
                <div className="d-flex align-start">
                    <div className="widget__avatar">
                        <Avatar size="md" img={data.author.avatar} />
                    </div>
                    <div className="widget__content">

                        <div className="widget__body">
                            <div className="widget__header d-flex align-center space-between">
                                <div className="d-flex align-center">
                                    <div className="mr-1 d-flex align-center icon--default">
                                        {
                                            data.type === "article" ? <Article /> :
                                                data.type === "group" ? <Group /> : <Question />

                                        }
                                    </div>
                                    <div className="author">
                                        <div className="author__username">
                                            {data.author.userName} · 23d
                                    </div>
                                    </div>
                                </div>
                                <BaseIcon actionable>
                                    <More />
                                </BaseIcon>
                            </div>
                            <div className="widget__title d-flex align-center">

                                <p>
                                    {data.title}
                                </p>
                            </div>

                            <div className="widget__text">
                                <p>
                                    {data.description}
                                </p>
                            </div>
                        </div>
                        {
                            data.cover && <div className="widget__cover"><img src={data.cover} alt="" /></div>
                        }

                        <div className="widget__actions text-secondary">
                            <ActionButton icon={<Favorite />} count={data.likesCount} />
                            <ActionButton icon={<Comment />} count={data.commentsCount} />
                            <ActionButton icon={<Share />} />
                            <ActionButton icon={<Bookmark />} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

function ActionButton(props) {
    return (
        <div>
            <button className="widget__action">
                <BaseIcon actionable>
                    {props.icon}
                </BaseIcon>
                {
                    props.count !== 0 &&
                    <div className="widget__action--count">
                        {props.count}
                    </div>
                }
            </button>
        </div>
    )
}

export default PostWidget