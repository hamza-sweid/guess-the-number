import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import style from '../styles/ranking.module.css';
import { BarChartOutlined } from '@ant-design/icons';
import TableStyle from '../styles/table.module.css';
import { useSelector } from 'react-redux';
import { PlayersInterface } from '../interfaces/app';

const columns: ColumnsType<PlayersInterface> = [
  {
    title: 'No.',
    dataIndex: 'key',
    key: 'key',
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

const Ranking = () => {
  const isGameInitialized = useSelector(
    (state: any) => state.app?.isGameInitialized
  );
  const ranking = useSelector((state: any) => state.app?.ranking);

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
        dataSource={isGameInitialized ? ranking : []}
        pagination={false}
      />
    </div>
  );
};

export default Ranking;
