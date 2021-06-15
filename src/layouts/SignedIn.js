import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="http://i.ibb.co/DpTY4QW/44644278-493172811161099-8205294702702886912-n.jpg" />
                <Dropdown pointing="top right" text="Kutay">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
