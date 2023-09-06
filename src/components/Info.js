import React from "react";

const infoBox = [

    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat.'
    }
]

function Info() {
    return (
        <React.Fragment>
            <div class="info-box">
                {infoBox.map((item, index) => (
                    <div key={index} class="info">
                        {item.text}
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}

export default Info;