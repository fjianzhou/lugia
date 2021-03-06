import * as React from 'react';
import { Dropmenu, Theme, Menu } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const data = [];

for (let i = 0; i < 10; i++) {
  const title = '选项' + i;
  data.push({ value: title, text: title });
}

const Box = styled.div`
  display: inline-block;
  margin: 0 10px;
`;

const menu = <Menu data={data} />;

export default class extends React.Component<any, any> {
  render() {
    const defaultView = {
      [Widget.DropMenuButton]: { width: 120 },
      [Widget.DropMenu]: { width: 80 }
    };

    return (
      <div>
        <Theme config={defaultView}>
          <Box>
            <Dropmenu menus={menu}>
              <Dropmenu.Button type="basic" onClick={this.onClick}>
                Click me
              </Dropmenu.Button>
            </Dropmenu>
          </Box>

          <Box>
            <Dropmenu menus={menu}>
              <Dropmenu.Button divided={false}>Click me</Dropmenu.Button>
            </Dropmenu>
          </Box>

          <Box>
            <Dropmenu action={'hover'} menus={menu}>
              <Dropmenu.Button>Hover arrow</Dropmenu.Button>
            </Dropmenu>
          </Box>

          <Box>
            <Dropmenu action={'hover'} menus={menu}>
              <Dropmenu.Button type="primary" divided={false}>
                Hover me
              </Dropmenu.Button>
            </Dropmenu>
          </Box>

          <Box>
            <Dropmenu menus={menu}>
              <Dropmenu.Button type="primary">Click arrow</Dropmenu.Button>
            </Dropmenu>
          </Box>
        </Theme>
      </div>
    );
  }
}
