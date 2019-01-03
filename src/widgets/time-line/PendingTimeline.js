/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import styled from 'styled-components';
import { TimeLine, Theme, Button, Icon, tabs } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
const TimeLineItem = TimeLine.TimeLineItem;

const Wrapper = styled.div`
  text-align: left;
  margin-top: 50px;
  margin-left: 100px;
  display: inline-block;
`;
export default class PendingTimeline extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <p> 默认 幽灵节点样式 </p>
        <br />
        <TimeLine pending={true}>
          <TimeLineItem time="2018-01-01" description={'description111'} />
          <TimeLineItem time="2018-01-02" description={'description222'} />
          <TimeLineItem time="2018-01-03" description={'description333'} />
          <TimeLineItem time="2018-01-04" description={'description444'} />
          <TimeLineItem time="2018-01-05" description={'description555'} />
        </TimeLine>
        <p>自定义 幽灵节点内容为 Icon </p>
        <br />
        <TimeLine
          pending={true}
          pendingDot={<Icon iconClass={'lugia-icon-financial_abort'} />}
        >
          <TimeLineItem time="2018-01-01" description={'description111'} />
          <TimeLineItem time="2018-01-02" description={'description222'} />
          <TimeLineItem time="2018-01-03" description={'description333'} />
          <TimeLineItem time="2018-01-04" description={'description444'} />
          <TimeLineItem time="2018-01-05" description={'description555'} />
        </TimeLine>
      </Wrapper>
    );
  }
}
