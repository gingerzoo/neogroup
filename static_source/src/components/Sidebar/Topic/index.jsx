import './style.scss';
import '../../../common/sidebar.scss';
import React from 'react';
import SimpleGroupCard from '../../Card/SimpleGroup';
import TopicCard from '../../Card/Topic';

function TopicSidebar (props) {
    const {group, last_topics} = props;
    return (
        <div className='sidebar'>
            <div className='sidebar-group'>
                <SimpleGroupCard {...group} />
            </div >
            <span className='sidebar-title'>正在发生</span>
            <div className='sidebar-topics'>
                {
                    last_topics ? last_topics.map((topic) => <TopicCard {...topic} />) : '暂时无事发生，去看看别的组吧'
                }
            </div>
        </div >
    );
}


export default TopicSidebar;
