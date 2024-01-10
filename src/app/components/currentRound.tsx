import { Button, Input, InputNumber, Row, Slider, Space, Table } from 'antd';
import style from '../styles/currentRound.module.css';
import { TrophyTwoTone } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import TableStyle from '../styles/table.module.css';
import {
  CaretUpOutlined,
  CaretDownOutlined,
  RiseOutlined,
} from '@ant-design/icons';
import { SliderMarks } from 'antd/es/slider';

interface DataType {
  key: string;
  name: string;
  point: number;
  multiplier: string;
}
const marks: SliderMarks = {
  1: '1x',
  2: '2x',
  3: '3x',
  4: '4x',
  5: '5x',
};

const CurrentRound = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Pointe',
      dataIndex: 'point',
      key: 'point',
    },
    {
      title: 'Multiplier',
      dataIndex: 'multiplier',
      key: 'multiplier',
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      point: 32,
      multiplier: '2.5',
    },
    {
      key: '2',
      name: 'Jim Green',
      point: 42,
      multiplier: '2.5',
    },
    {
      key: '3',
      name: 'Joe Black',
      point: 32,
      multiplier: '2.5',
    },
    {
      key: '3',
      name: 'Joe Black',
      point: 32,
      multiplier: '2.5',
    },
  ];
  return (
    <div className={style.currentRound}>
      <Space className={style.userInput}>
        <Input
          type="number"
          className={style.input}
          addonBefore={<CaretDownOutlined />}
          addonAfter={<CaretUpOutlined />}
          defaultValue={100}
        />
        <Input
          type="number"
          className={style.input}
          addonBefore={<CaretDownOutlined />}
          addonAfter={<CaretUpOutlined />}
          defaultValue={100}
        />
      </Space>
      <Button block type="primary" className="primer-button my-2">
        Start
      </Button>
      <h3 className="my-1">
        <TrophyTwoTone twoToneColor="#d96a61" />
        <span className="mx-1">Current Round</span>
      </h3>
      <Table
        columns={columns}
        rootClassName={TableStyle.table}
        dataSource={data}
        pagination={false}
      />
      <h3 className="my-3">
        <RiseOutlined style={{ color: '#d96a61' }} /> Speed
      </h3>
      <div className={style.sliderContainer}>
        <Slider
          marks={marks}
          min={1}
          max={5}
          defaultValue={1}
          step={null}
          className={style.slider}
        />
      </div>
    </div>
  );
};

export default CurrentRound;
