import { useParams } from 'react-router-dom';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글 {id}</h2>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Article;