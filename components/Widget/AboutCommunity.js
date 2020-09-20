import React from 'react'
import { Avatar, Widget, Flex } from '..'
import { avatars } from "../../api"

function CommunityAboutWidget(props) {
    return (
        <Widget>
            <Flex alignCenter>
                <div className="f-weight--medium">
                    Topluluk Hakkında
                </div>
            </Flex>
            <p className="mt-2 text-secondary f-size--sm">
                Üretmenin tutkusuna kapılan birkaç geliştiriciyiz.
            </p>
            <div className="mt-3">
                <Flex alignCenter>
                    <div className="community__avatars mr-2">
                        {
                            avatars.map((item, index) => (
                                <Avatar
                                    size="sm"
                                    key={index}
                                    img={item} />
                            ))
                        }
                    </div>
                    <div className="widget__top--author-count">
                        2.4b geliştirici
                    </div>
                </Flex>
            </div>
        </Widget>
    )
}

export default CommunityAboutWidget