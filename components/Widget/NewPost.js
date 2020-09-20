import React from 'react'
import { Avatar, Widget, Flex } from '..'

function NewPostWidget(props) {
    return (
        <Widget>
            <Flex alignCenter>
                <Avatar
                    size="md"
                    img="https://pbs.twimg.com/profile_images/1297468955540553728/ZiFCxzln_400x400.jpg" />
                <p className="ml-2 text-secondary">
                    Yeni bir şey paylaşın...
                </p>
            </Flex>
        </Widget>
    )
}

export default NewPostWidget