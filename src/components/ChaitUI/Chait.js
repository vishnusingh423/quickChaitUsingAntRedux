import { Card, Col, Input, Row, Statistic, Button, Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { useRequest } from 'umi';
import { FC, useState } from 'react';
import { Gauge, WordCloud, Liquid, RingProgress } from '@ant-design/charts';
import type { WordCloudData } from '@antv/g2plot/esm/plots/word-cloud/layer';

import { GridContent } from '@ant-design/pro-layout';
import numeral from 'numeral';
import Map from './components/Map';
import ActiveChart from './components/ActiveChart';
import { queryTags } from './service';
import styles from './style.less';

const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
const AddedElement = ({ data2 }) => <p>hiii {data2}</p>;

const Monitor: FC = () => {
  const { loading, data } = useRequest(queryTags);
  const [count, setCount] = useState(0); // Name it however you wish

  const [data1, setData] = useState([]);
  const [data2, setData2] = useState('');

  const funCall = (e) => {
    console.log(e);
    const getCurrent = [...data1, data2];

    setData(getCurrent);
  };
  const callOnchange = (e) => {
    const data3 = e.target.value;

    setData2(data3);
  };
  const wordCloudData: WordCloudData[] = (data?.list || []).map((item) => {
    return {
      id: +Date.now(),
      word: item.name,
      weight: item.value,
    };
  });

  return (
    <GridContent style={{ backgroundColor: 'white' }}>
      <>
        <Row gutter={24}>
          <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card bordered={false} style={{ backgroundColor: '#F3F7FA' }}>
              <div className={styles.mapChart}>
                {/* <Map /> */}
                {data1.map((dataEach, index) => {
                  return (
                    <Row>
                      {/* <Col span={24}>{data1[index]}</Col> */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <div style={{ display: 'flex', marginLeft: 640, flexDirection: 'row' }}>
                          <div style={{ marginTop: 8 }}>
                            <div
                              style={{
                                backgroundColor: '#1A233C',
                                borderRadius: 4,
                                color: 'white',
                                paddingTop: 10,
                                paddingLeft: 5,
                                paddingRight: 5,
                                marginRight: 4,
                                fontSize: 9,
                                height: 33,
                              }}
                            >
                              {data1[index]}
                            </div>
                            <div style={{ fontSize: 8 }}>9h ago</div>
                          </div>

                          <div>
                            <span>
                              <Badge
                                dot
                                color="green"
                                style={{ marginRight: 14 }}
                                offset={[10, 30]}
                              >
                                <Avatar
                                  shape="circle"
                                  size="large"
                                  icon={<UserOutlined />}
                                  src="https://joeschmoe.io/api/v1/random"
                                />
                              </Badge>
                            </span>
                          </div>
                        </div>

                        <div style={{ display: 'flex' }}>
                          <div>
                            <span>
                              <Badge
                                dot
                                color="green"
                                style={{ marginRight: 14 }}
                                offset={[10, 30]}
                              >
                                <Avatar
                                  shape="circle"
                                  size="large"
                                  icon={<UserOutlined />}
                                  src="https://joeschmoe.io/api/v1/random"
                                />
                              </Badge>
                            </span>
                          </div>
                          <div style={{ marginTop: 8, marginLeft: 4 }}>
                            <div
                              style={{
                                backgroundColor: 'white',
                                borderRadius: 4,
                                color: 'black',
                                paddingTop: 10,
                                paddingLeft: 5,
                                paddingRight: 5,
                                marginRight: 4,
                                fontSize: 9,
                                height: 33,
                                borderWidth: 13,
                                border: 4,
                                boxShadow: 'inherit',
                              }}
                            >
                              {data1[index]}
                            </div>
                            <div style={{ fontSize: 8 }}>9h ago</div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  );
                })}
              </div>
              <Input.Group compact>
                <Input
                  style={{
                    width: 'calc(100% - 200px)',
                  }}
                  defaultValue="https://ant.design"
                  onChange={(e) => callOnchange(e)}
                />
                <Button onClick={(e) => funCall(e)} type="primary">
                  Submit
                </Button>
              </Input.Group>
            </Card>
          </Col>
          <Col xl={6} lg={24} md={24} sm={24} xs={24}>
            <Card
              title="活动情况预测"
              style={{ marginBottom: 24, height: 133, backgroundColor: '#F5F7FB' }}
              bordered={false}
            ></Card>
            <Card
              title="券核效率"
              style={{ marginBottom: 24 }}
              bodyStyle={{ textAlign: 'center', backgroundColor: '#F5F7FB' }}
              bordered={false}
            >
              <Gauge
                height={180}
                min={0}
                max={100}
                forceFit
                value={87}
                range={[0, 25, 50, 75, 100]}
                statistic={{
                  visible: true,
                  text: '优',
                  color: '#30bf78',
                }}
              />
            </Card>

            <Card
              title="活动情况预测"
              style={{ marginBottom: 24, height: 133, backgroundColor: '#F5F7FB' }}
              bordered={false}
            ></Card>
          </Col>
        </Row>
      </>
    </GridContent>
  );
};

export default Monitor;

