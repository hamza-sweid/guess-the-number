import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import style from '../styles/ranking.module.css';
import { BarChartOutlined } from '@ant-design/icons';
import TableStyle from '../styles/table.module.css';

interface DataType {
  key: string;
  name: string;
  no: number;
  score: string;
}

const Ranking = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'No.',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      no: 32,
      score: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      no: 42,
      score: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      no: 32,
      score: 'Sidney No. 1 Lake Park',
    },
  ];

  return (
    <div className={style.ranking}>
      <div>
        <h3 className={style.header}>
          <BarChartOutlined style={{ color: '#d96a61' }} /> Ranking
        </h3>
      </div>
      <Table
        columns={columns}
        rootClassName={TableStyle.table}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};

export default Ranking;
