import React from 'react'
import Link from "next/link"
import { sidebarItems } from "../../api"
import { Avatar } from '..'

function Sidebar(props) {
    return (
        <aside className="sidebar">
            <div className="sidebar__container">
                <div className="sidebar__item logo">
                    <Link href="/">
                        <a className="logo--text">
                            webur
                        </a>
                    </Link>
                </div>
                <div>

                    {
                        sidebarItems.map((item, index) =>
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
                        )
                    }
                </div>

            </div>
        </aside>
    )
}

export default Sidebar