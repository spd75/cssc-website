import React from 'react';

type IconImageProps = {
    path: string;
    link: string;
};

export default class IconImage extends React.Component<IconImageProps, any> {
    constructor(props: IconImageProps) {
        super(props);

        this.state = {
            path: props.path,
            link: props.link
        };
    }

    imageStyle = () => {
        return {
            objectFit: 'contain'
        };
    };

    render = () => {
        const st = this.state;
        return <img src={st.path} />;
    };
}
