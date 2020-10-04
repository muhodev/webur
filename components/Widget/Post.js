import React from 'react'
import Link from "next/link"
import { AuthorTextUsername, Avatar, Box } from '..'
import { Comment, Favorite, Bookmark, More, Article, Question, Group, BaseIcon, Share } from '../Icons'

function PostWidget({ data }) {
    return (
        <article className="widget">
            <div className="widget__container" onClick={() => console.log("clicked")}>
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
                                    <div className="ml-1 text-color-secondary">
                                        <Box flex alignCenter>
                                            <AuthorTextUsername username={data.author.userName} />
                                            <span className="ml-1 mr-1">
                                                ·
                                            </span>
                                            <div>
                                                23d
                                            </div>
                                        </Box>
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

                            <div className="text-color-secondary">
                                <p>
                                    {data.description}
                                </p>
                            </div>
                        </div>
                        {
                            data.cover && <Link href="/posts/[id]/photos/[photoId]" as={`/posts/${data.slug}/photos/1`}>
                                <a>
                                    <div className="widget__cover">
                                        <img src={data.cover} alt="" />
                                    </div>
                                </a>
                            </Link>
                        }

                        <div className="widget__actions text-color-secondary">
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