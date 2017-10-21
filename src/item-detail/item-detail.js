import React, {Component} from 'react';

import ItemInfo from './item-info';
import ItemHeader from './item-header';
import ItemLeftPanel from './item-left-panel';
import ItemDescription from './item-description';

import styled from 'styled-components';

const initState = { isEditable: false };

const ItemContainer = styled.div`
    border-left: 1px solid rgb(204,204,204);
    flex-shrink: 0;
    flex-basis: 39.9rem;
    display: flex;
`;

const ContentContainer = styled.div`
    flex-basis: 100%;
    padding: 1.5rem 1rem 1rem;
`;

const transformDatesToString = ({created, updated}) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const transformDate = (date) => `${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`;

    return {
        created: transformDate(created),
        updated: transformDate(updated),
    };
};

class ItemDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...initState,
            description: props.params.description
        };

        this.onChangeTypeOfContent = this.onChangeTypeOfContent.bind(this);
        this.onUpdateDescription = this.onUpdateDescription.bind(this);
        this.onSaveDescription = this.onSaveDescription.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            description: nextProps.params.description
        })
    }

    onChangeTypeOfContent(isEditable) {
        this.setState({isEditable})
    }

    onUpdateDescription(newDescription) {
        this.setState({
            description: newDescription
        })
    }

    onSaveDescription(newDescription){
        this.props.onChangeDescription(newDescription);
        this.setState({
            isEditable: false
        });
    }

    render() {
        const { onCloseItemDetails } = this.props;
        const { title, type, status, labels, dates, tooltip: { reporter, assignee } } = this.props.params;
        const { description } = this.state;

        return (
            <ItemContainer>
                <ItemLeftPanel/>
                <ContentContainer>
                    <ItemHeader title={title} type={type} onCloseItemDetails={onCloseItemDetails} />
                    <ItemDescription
                        description={description}
                        isEditable={this.state.isEditable}
                        onChangeTypeOfContent={this.onChangeTypeOfContent}
                        onChangeDescription={this.onUpdateDescription}
                        onBlurDescription={this.onSaveDescription} />
                    <ItemInfo
                        status={status}
                        labels={labels}
                        tooltip={{reporter, assignee}}
                        dates={transformDatesToString(dates)} />
                </ContentContainer>
            </ItemContainer>
        )
    }
}

export default ItemDetail;