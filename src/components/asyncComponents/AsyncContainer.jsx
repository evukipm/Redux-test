import React, {Component} from 'react';
import propTypes from 'prop-types';
import Spinner from '../Spinner';

export default class AsyncContainer extends Component {
    constructor () {
        super();
        this.state = {
            loading: true,
            error: false,
            item: []
        };
    }
    
    render () {
        let loaded = false;
        let error = false;
        const isArray = Array.isArray(this.props.data);
        if (isArray) {
            loaded = this.props.data.every((action) => !action.isFetching);
            error = this.props.data.every((action) => action.isError);
        } else {
            if (!this.props.data.isFetching && !this.props.data.isError) {
                loaded = true;
            } else if (this.props.data.isError) {
                error = true;
            }
        }
        if (!loaded) {
            return (
                <Spinner />
            );
        } else if (error) {
            return (
                <h1>Ha habido un problemilla</h1>
            );
        }
        else if (loaded && !error) {
            const { children } = this.props;

            // const childrenWithProps = React.Children.map(children, child =>
            //     React.cloneElement(child, { data: [...this.props.data] }));

            return <div>{children}</div>;
        }
    }
}
AsyncContainer.propTypes = {
    children: propTypes.element.isRequired,
    data: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.shape({
            isFetching: propTypes.bool.isRequired,
            isError: propTypes.bool.isRequired,
        })),
        propTypes.shape({
            isFetching: propTypes.bool.isRequired,
            isError: propTypes.bool.isRequired,
        })
    ])
};