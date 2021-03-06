import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import UPLOAD from "@lugia/lugia-web/dist/upload/lugia.upload.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseUpload = require("./BaseUpload").default;
const FileListUpload = require("./FileListUpload").default;
const CustomUpload = require("./CustomUpload").default;
const PictureUpload = require("./PictureUpload").default;
const DisabledUpload = require("./DisabledUpload").default;

const { Link } = Anchor;
const { Row, Col } = Grid;

export default PageNavHoC(
  widgetrouter,
  class ComDemo extends React.Component {
    handleLinkClick = (e, href) => {
      if (href) {
        const name = href.slice(1);
        const anchorElement = document.getElementById(name);
        if (anchorElement) {
          anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
    };

    render() {
      const { next, prev, isMobile = false } = this.props;
      const span = isMobile ? 24 : 20;
      const style = isMobile ? {} : { paddingRight: "50px" };
      return (
        <Row>
          <Col span={span}>
            <div style={style}>
              <Title
                title={"上传"}
                subTitle={"Upload"}
                desc={"上传组件,可通过文件选择和拖拽上传"}
              />
              <Demo
                title={"按钮"}
                titleID={"upload-0"}
                code={
                  <code>{`import React from \'react\';\nimport { Upload, Theme } from \'@lugia/lugia-web\';\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n  }\n\n  render() {\n    const defaultProps = {\n      inputId: \'upload1\',\n      url: \'/upload\',\n      multiple: true,\n    };\n\n    return (\n      <div>\n        <Upload {...defaultProps} />\n      </div>\n    );\n  }\n}\n\nexport default UploadDemo;\n`}</code>
                }
                desc={"点击按钮上传"}
                demo={<BaseUpload />}
              ></Demo>
              <Demo
                title={"文件列表"}
                titleID={"upload-1"}
                code={
                  <code>{`import React from \'react\';\nimport { Upload, Theme } from \'@lugia/lugia-web\';\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n  }\n\n  render() {\n    const defaultProps8 = {\n      areaType: \'button\',\n      inputId: \'upload1\',\n      showFileList: true,\n      url: \'/upload\',\n      fileList: [\n        { id: 1, name: \'文件11111.jpg\', status: \'done\' },\n        { id: 2, name: \'文件666.doc\', status: \'fail\' }\n      ]\n    };\n    return (\n      <div>\n        <Upload {...defaultProps8} />\n      </div>\n    );\n  }\n}\n\nexport default UploadDemo;\n`}</code>
                }
                desc={"显示文件列表"}
                demo={<FileListUpload />}
              ></Demo>
              <Demo
                title={"多种风格"}
                titleID={"upload-2"}
                code={
                  <code>{`import React from \'react\';\nimport { Upload, Theme } from \'@lugia/lugia-web\';\nimport styled from \"styled-components\";\n\nconst Title = styled.div\`\n    margin: 10px 0;\n\`;\n\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n  }\n\n  render() {\n    const defaultProps1 = {\n      areaType: \'default\',\n      inputId: \'upload\',\n      url: \'/upload\',\n    };\n    const defaultProps2 = {\n      areaType: \'both\',\n      inputId: \'upload\',\n      url: \'/upload\',\n    };\n    const defaultProps3 = {\n      areaType: \'button\',\n      inputId: \'upload\',\n      url: \'/upload\',\n    };\n    const defaultProps4 = {\n      areaType: \'picture\',\n      inputId: \'upload4\',\n      url: \'/upload\',\n    };\n    const defaultProps5 = {\n      areaType: \'area\',\n      inputId: \'upload6\',\n      url: \'/upload\',\n    };\n\n    return (\n      <div>\n        <Title>默认上传</Title>\n        <Upload {...defaultProps1} />\n        <Title>带按钮的默认上传</Title>\n        <Upload {...defaultProps2} />\n        <Title>按钮上传</Title>\n        <Upload {...defaultProps3} />\n        <Title>图片上传</Title>\n        <Upload {...defaultProps4} />\n        <Title>区域上传</Title>\n        <Upload {...defaultProps5} />\n\n      </div>\n    );\n  }\n}\n\nexport default UploadDemo;\n`}</code>
                }
                desc={"多种风格上传,按钮,区域,图片等"}
                demo={<CustomUpload />}
              ></Demo>
              <Demo
                title={"图片"}
                titleID={"upload-3"}
                code={
                  <code>{`import React from \'react\';\nimport { Upload, Theme } from \'@lugia/lugia-web\';\nimport styled from \"styled-components\";\n\nconst Title = styled.div\`\n    margin: 10px 0;\n\`;\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n  }\n\n  render() {\n    const defaultProps1 = {\n      areaType: \'picture\',\n      inputId: \'upload1\',\n      size: \'small\',\n      url: \'/upload\',\n    };\n    const defaultProps2 = {\n      areaType: \'picture\',\n      inputId: \'upload2\',\n      url: \'/upload\',\n    };\n    const defaultProps3 = {\n      areaType: \'picture\',\n      inputId: \'upload3\',\n      size: \'large\',\n      multiple: true,\n      accept: \'image/*\',\n      url: \'/upload\',\n    };\n\n    return (\n      <div>\n        <Title>size：small</Title>\n        <Upload {...defaultProps1} />\n        <Title>size：default</Title>\n        <Upload {...defaultProps2} />\n        <Title>size：large</Title>\n        <Upload {...defaultProps3} />\n      </div>\n    );\n  }\n}\n\nexport default UploadDemo;\n`}</code>
                }
                desc={"多种图片尺寸上传"}
                demo={<PictureUpload />}
              ></Demo>
              <Demo
                title={"禁用"}
                titleID={"upload-4"}
                code={
                  <code>{`import React from \'react\';\nimport { Upload, Theme } from \'@lugia/lugia-web\';\nimport styled from \"styled-components\";\n\nconst Title = styled.div\`\n    margin: 10px 0;\n\`;\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n    this.state = {};\n  }\n\n  render() {\n    const defaultProps1 = {\n      areaType: \'default\',\n      inputId: \'upload\',\n      showFileList: true,\n      disabled: true,\n      url: \'/upload\',\n    };\n    const defaultProps2 = {\n      areaType: \'both\',\n      inputId: \'upload\',\n      showFileList: true,\n      disabled: true,\n      url: \'/upload\',\n    };\n    const defaultProps3 = {\n      areaType: \'button\',\n      inputId: \'upload2\',\n      showFileList: true,\n      disabled: true,\n      url: \'/upload\',\n\n    };\n    const defaultProps4 = {\n      areaType: \'area\',\n      inputId: \'upload3\',\n      disabled: true,\n      showFileList: true,\n      url: \'/upload\',\n    };\n    const defaultProps5 = {\n      areaType: \'picture\',\n      inputId: \'upload4\',\n      disabled: true,\n      showFileList: true,\n      url: \'/upload\',\n    };\n    return (\n      <div>\n        <Title>areaType: default</Title>\n        <Upload {...defaultProps1} />\n        <Title>areaType: both</Title>\n        <Upload {...defaultProps2} />\n        <Title>areaType: button</Title>\n        <Upload {...defaultProps3} />\n        <Title>areaType: area</Title>\n        <Upload {...defaultProps4} />\n        <Title>areaType: picture</Title>\n        <Upload {...defaultProps5} />\n      </div>\n    );\n  }\n\n}\n\nexport default UploadDemo;\n`}</code>
                }
                desc={"禁用上传功能"}
                demo={<DisabledUpload />}
              ></Demo>
              <EditTables dataSource={UPLOAD} />
              <FooterNav prev={prev} next={next} />
            </div>
          </Col>
          {!isMobile && (
            <Col span={4}>
              <Anchor
                slideType="line"
                onClick={this.handleLinkClick}
                useHref={false}
              >
                <Link title={"按钮"} href={"#upload-0"} />
                <Link title={"文件列表"} href={"#upload-1"} />
                <Link title={"多种风格"} href={"#upload-2"} />
                <Link title={"图片"} href={"#upload-3"} />
                <Link title={"禁用"} href={"#upload-4"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
