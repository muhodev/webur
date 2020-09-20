import React from 'react'
import Link from "next/link"

const items = [
    { title: <Logo />, slug: "" },

    // TODO
    // icon olarak yapılacak

    // { title: "Makaleler", slug: "" }, 
    // { title: "Sorular", slug: "" },
    // { title: "Komünite", slug: "" },
]

function Header(props) {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__items">
                    {
                        items.map((item, index) => (
                            <HeaderItem key={index} item={item.title} slug={item.slug} />
                        ))
                    }
                </div>
            </div>
        </header>
    )
}


function HeaderItem(props) {
    return (
        <div className="header__item">
            <Link href={`/${props.slug}`}>
                <a>
                    {props.item}
                </a>
            </Link>
        </div>
    )
}

function Logo(props) {
    return (
        <h1 className="logo">
            weburus
        </h1>
    )
}

export default Header