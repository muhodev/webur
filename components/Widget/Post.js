import React from 'react'
import { Avatar, Box } from '..'
import { Comment, Favorite, Bookmark, More, Article, Question, Group, BaseIcon, Share } from '../Icons'

function PostWidget({ data }) {
    return (
        <article className="widget">
            <div className="widget__container">
                <Box flex alignStart>
                    <div className="widget__avatar">
                        <Avatar size="md" img={data.author.avatar} />
                    </div>
                    <div className="widget__content">

                        <div className="widget__body">
                            <Box alignCenter spaceBetween flex>
                                <Box flex alignCenter>
                                    <BaseIcon>
                                        {
                                            data.type === "article" ? <Article /> :
                                                data.type === "group" ? <Group /> :
                                                    <Question />

                                        }
                                    </BaseIcon>
                                    <div className="author ml-1">
                                        <div className="author__username">
                                            {data.author.userName} · 23d
                                        </div>
                                    </div>
                                </Box>
                                <BaseIcon actionable>
                                    <More />
                                </BaseIcon>
                            </Box>
                            <div className="widget__title">
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
                            <ActionButton icon={<Share />} count={data.commentsCount} />
                            <ActionButton icon={<Bookmark />} />
                        </div>
                    </div>
                </Box>
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