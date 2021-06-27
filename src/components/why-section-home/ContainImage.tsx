import React from 'react';

type ContainImageProps = {};

export default class ContainImage extends React.Component<ContainImageProps, any> {
    props: ContainImageProps;

    constructor(props: ContainImageProps) {
        super(props);
        this.props = props;
    }

    render = () => {
        return <div></div>;
    };
}
