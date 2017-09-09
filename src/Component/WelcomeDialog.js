import React from 'react'
import FancyBorder from './FancyBorder'
import SplitPane from './SplitPane'
import Contact from './Contact'
import ChatStatus from './ChatStatus'

function WelcomeDialog(props) {
    return (
        <div>
            <FancyBorder color="red">
                <div> I am bordered</div>
            </FancyBorder>

            <SplitPane left={<Contact list={['Ninan', 'Leo', 'Orion']}/>}
                       right={<ChatStatus online={['Leo']} offline={['Ninan', 'Orion']}/>}
            />
        </div>
    );
}

export default WelcomeDialog;


