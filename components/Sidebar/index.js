import React from 'react'
import Link from "next/link"
import { sidebarItems } from "../../api"
import { Avatar } from '..'

function Sidebar(props) {
    return (
        <aside className="sidebar">
            <div className="sidebar__container">
                <Link href="/">
                    <a>
                        <div className="logo ">
                            webur.
                        </div>
                    </a>
                </Link>
                <div className="mt-4">

                    {
                        sidebarItems.map((item, index) => (
                            <div className={`sidebar__item ${item.title === "Ana Sayfa" ? "sidebar__item--active" : ""}`} key={index}>
                                <Link href={`/${item.slug}`}>
                                    <a className="sidebar__link d-flex align-center">
                                        {
                                            <div className="d-flex align-center text-secondary mr-2">
                                                {item.icon}
                                            </div>
                                        }
                                        {
                                            item.title
                                        }
                                    </a>
                                </Link>
                            </div>
                        ))
                    }
                    <div >
                        <div className="d-flex align-center">
                            <Avatar size="md" img="https://pbs.twimg.com/profile_images/1297468955540553728/ZiFCxzln_400x400.jpg" />
                            <div className="ml-2">
                                <div className="author__name f-size--sm">muho.dev</div>
                                <div className="text-secondary f-size--sm">@muho.dev</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </aside>
    )
}

export default Sidebar