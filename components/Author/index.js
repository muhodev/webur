import React from 'react'
import Link from "next/link"

function AuthorTextUsername({ username }) {
    return (
        <div className="text-color-secondary">
            <Link href={`/users/${username}`}>
                <a>
                    {username}
                </a>
            </Link>
        </div>
    )
}

export default AuthorTextUsername