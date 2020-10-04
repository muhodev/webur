import React, { Fragment } from 'react'
import Head from "next/head"
import { Header, Sidebar } from '..'

function Layout(props) {
    return (
        <Fragment>
            <Head>
                <title>
                    {props.pageTitle || "webur"}
                </title>
            </Head>
            {/* <Header /> */}
            <main>
                <div className="layout__container">
                    <div className="layout__grid">
                        <div>
                            <Sidebar />
                        </div>

                        {
                            props.children
                        }
                    </div>
                </div>
            </main>

        </Fragment>
    )
}

export default Layout