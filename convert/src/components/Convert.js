import React, { useState } from "react";
import { message, Upload, Modal, Image } from "antd";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { InboxOutlined } from '@ant-design/icons';
import { Steps } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  {
    type: "divider",
  },
  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem(
    "Group",
    "grp",
    null,
    [getItem("Option 13", "13"), getItem("Option 14", "14")],
    "group"
  ),
];

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
function Convert() {
  const [fileList, setFileList] = useState([]);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    console.log(`file---------------`, file);
    console.log(`file.response.message------------`, file.response.message);

    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  function onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  }

  function onChange(info) {
    let newFileList = [...info.fileList];
    newFileList = newFileList.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  }
  const handleDownloadClick = (downloadLink) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", downloadLink, true);
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.responseType = "blob";
    xhr.onload = function () {
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement("a");
      tag.href = imageUrl;
      tag.download = downloadLink.lastIndexOf("/") + 1;
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    };
    xhr.send();
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 className="text-color">Chuyển <span>PNG</span> sang <span>JPG</span></h1>
      </div>
      <div style={{ display:"flex" }}>
        <div>
          <Menu
            // onClick={onClick}
            style={{
              width: 256,
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </div>
        <div
          className="uk-card uk-card-default uk-card-hover uk-card-body form-section"
          style={{ height: "auto !important" }}
        >
          <div className="uk-container uk-text-center">
            <div className="upload-container">
              <div className="upload-container-form">
                <Upload.Dragger
                  name="file"
                  multiple={true}
                  onChange={(e) => onChange(e)}
                  action="http://convert.getlinktraffic.space/convert.php"
                  data={{ to: "tinyPNG" }}
                  fileList={fileList}
                  showUploadList={{ showDownloadIcon: true }}
                  onPreview={handlePreview}
                  itemRender={(
                    originNode,
                    file,
                    fileList,
                    { preview, remove }
                  ) => {
                    const percent = file.percent;

                    if (percent !== 100) {
                      return (
                        <div className="ant-upload-list-item ant-upload-list-item-uploading">
                          <div className="ant-upload-list-item-thumbnail">
                            <span
                              role="img"
                              aria-label="loading"
                              className="anticon anticon-loading anticon-spin"
                            >
                              <svg
                                className="circular-loader"
                                viewBox="25 25 50 50"
                              >
                                <circle
                                  className="loader-path"
                                  cx="50"
                                  cy="50"
                                  r="20"
                                  fill="none"
                                  stroke="#70c542"
                                  strokeWidth="2"
                                />
                              </svg>{" "}
                            </span>
                          </div>
                          <span
                            className="ant-upload-list-item-name"
                            title={file.name}
                          >
                            {file.name}{" "}
                          </span>
                          <span className="ant-upload-list-item-actions picture">
                            <button
                              title="Remove file"
                              type="button"
                              className="ant-btn css-dev-only-do-not-override-1ck3jst ant-btn-text ant-btn-sm ant-btn-icon-only ant-upload-list-item-action"
                            >
                              <span className="ant-btn-icon">
                                <span
                                  role="img"
                                  aria-label="delete"
                                  className="anticon anticon-delete"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="delete"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                  </svg>
                                </span>
                              </span>
                            </button>
                          </span>
                          <div className="ant-upload-list-item-progress">
                            <div
                              className="ant-progress ant-progress-status-normal ant-progress-line css-dev-only-do-not-override-1ck3jst"
                              role="progressbar"
                              aria-valuenow="25"
                            >
                              <div
                                className="ant-progress-outer"
                                style={{ width: "100%", height: "2px" }}
                              >
                                <div className="ant-progress-inner">
                                  <div
                                    className="ant-progress-bg"
                                    style={{
                                      width: percent + "%",
                                      height: "2px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      let response = file.response?.data;
                      let sizeOld = "";
                      let sizeNew = "";
                      let percent = "";
                      let downloadLink = "";
                      if (response) {
                        response = JSON.parse(response);
                        sizeOld = response.oldSize;
                        sizeNew = response.newSize;
                        percent = response.percent;
                        downloadLink = file.response.message;
                      }
                      console.log(`downloadLink`, downloadLink);
                      console.log(`response`, response);
                      return (
                        <div className="ant-upload-list-item ant-upload-list-item-done">
                          <div className="col1">
                            <a
                              className="ant-upload-list-item-thumbnail"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => handlePreview(file)}
                            >
                              <img
                                src={file.thumbUrl}
                                alt={file.name}
                                className="ant-upload-list-item-image"
                              />
                            </a>
                            <span
                              className="ant-upload-list-item-name"
                              title={file.name}
                            >
                              {file.name}
                            </span>
                          </div>
                          <div className="col2">
                            <span
                              style={{ fontSize: "10px" }}
                              className="ant-upload-list-item-name"
                              title={sizeOld}
                            >
                              {sizeOld}
                            </span>
                            <span
                              style={{ fontSize: "15px", color: "#7EB631" }}
                              className="ant-upload-list-item-name"
                              title={sizeNew}
                            >
                              {sizeNew}
                            </span>
                            <span
                              className="ant-upload-list-item-name"
                              title={percent}
                            >
                              {percent}
                            </span>
                            <span className="ant-upload-list-item-actions picture">
                              <button
                                title="Download file"
                                type="button"
                                class="ant-btn css-dev-only-do-not-override-1ck3jst ant-btn-text ant-btn-sm ant-btn-icon-only ant-upload-list-item-action"
                                onClick={() =>
                                  handleDownloadClick(downloadLink)
                                }
                              >
                                <span class="ant-btn-icon">
                                  <span
                                    role="img"
                                    aria-label="download"
                                    tabindex="-1"
                                    class="anticon anticon-download"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      data-icon="download"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </button>
                              <button
                                title="Remove file"
                                type="button"
                                onClick={() => remove(file)}
                                className="ant-btn css-dev-only-do-not-override-1ck3jst ant-btn-text ant-btn-sm ant-btn-icon-only ant-upload-list-item-action"
                                style={{ marginLeft: "5px" }}
                              >
                                <span className="ant-btn-icon">
                                  <span
                                    role="img"
                                    aria-label="delete"
                                    className="anticon anticon-delete"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      data-icon="delete"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      );
                    }
                  }}
                  listType="picture"
                >
                   <div style={{ fontSize: 50, color: '#999' }}>
      <InboxOutlined />
    </div>
                  <p>Drag here</p>
                </Upload.Dragger>
                <Modal
                  open={previewOpen}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{
                      width: "100%",
                    }}
                    src={previewImage}
                  />
                </Modal>
                <div className="action-bottom">
                  <p className="uk-text-center"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="uk-section-xsmall uk-section-muted">
        <div className="uk-container ">
          <div className="uk-card uk-card-default uk-card-hover uk-text-center">
            <div className="uk-card-header">
              <h2>Làm cách nào để chuyển đổi xxxx sang aaas trực tuyến?</h2>
              <div>
                Hướng dẫn từng bước để chuyển đổi xxxxxxxxxxxx sang yyyyyyyyyyy
                miễn phí. Nó hoạt động trên PC (Windows, Mac, Linux) và thiết bị
                di động (iPhone, Android).
              </div>
            </div>
            <div className="uk-card-body uk-padding-small uk-padding-remove-top uk-margin-remove uk-flex uk-child-width-1-3@m content--how-to-convert__steps">
              <div className="step">
                <div className="uk-margin-remove-adjacent step--img">
                  {" "}
                  <svg className="uk-width-small"></svg>{" "}
                </div>
                <div className="step--title">
                  <h3 id="#step-1">Tải lên tệp xxxxxxxxxxxx</h3>
                </div>
                <div className="step--description">
                  Kéo và thả tệp xxxxxxxxxxxxxx của bạn vào khu vực tải lên.
                  Kích thước tệp tối đa là 100&nbsp;MB.
                </div>
              </div>
              <div className="step" id="step-2">
                <div className="uk-margin-remove-adjacent step--img">
                  {" "}
                  <svg className="uk-width-small"></svg>{" "}
                </div>
                <div className="step--title">
                  <h3>đổi xxxxxxxxxxxx sang yyyyyyyyyyyy</h3>
                </div>
                <div className="step--description">
                  Nhấp vào "Chuyển đổi" để thay đổi xxxxxxxxx thành yyyyyyyyyy.
                  Quá trình chuyển đổi thường mất vài giây.
                </div>
              </div>
              <div className="step">
                <div className="uk-margin-remove-adjacent step--img">
                  {" "}
                  <svg className="uk-width-small"></svg>{" "}
                </div>
                <div className="step--title">
                  <h3 id="#step-3">Tải xuống tệp xxxxxxxxxxxx</h3>
                </div>
                <div className="step--description">
                  Bây giờ bạn có thể tải xuống tệp xxxxxxxxxxxx. Liên kết tải
                  xuống chỉ hoạt động trên thiết bị của bạn.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section-xsmall uk-padding-remove">
        <div className="uk-container">
          <div className="uk-card uk-card-body ">
            <div className="uk-text-left uk-text-large">
              <h3 className="text-color"> Chuyển đổi PNG </h3>
            </div>
            <div className="uk-container uk-align-center uk-child-width-1-1@s uk-child-width-1-6@l r">
              <div className="uk-button">
                <div className="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-png-sang-tinypng/">
                    {" "}
                    PNG sang TINYPNG{" "}
                  </a>{" "}
                </div>
              </div>
              <div className="uk-button">
                <div className="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-png-sang-jpg/"> PNG sang JPG </a>{" "}
                </div>
              </div>
              <div className="uk-button">
                <div className="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-png-sang-jpeg/"> PNG sang JPEG </a>{" "}
                </div>
              </div>
              <div className="uk-button">
                <div className="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-png-sang-pdf/"> PNG sang PDF </a>{" "}
                </div>
              </div>
              <div className="uk-button">
                <div className="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-png-sang-ico/"> PNG sang ICO </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-container">
          <div className="uk-card uk-card-body ">
            <div className="uk-text-left uk-text-large">
              <h3 className="text-color"> Chuyển đổi JPG </h3>
            </div>
            <div className="uk-container uk-align-center uk-child-width-1-1@s uk-child-width-1-6@l r">
              <div className="uk-button">
                <div className="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-jpg-sang-tinypng/">
                    {" "}
                    JPG sang TINYPNG{" "}
                  </a>{" "}
                </div>
              </div>
              <div className="uk-button">
                <div className="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-jpg-sang-png/"> JPG sang PNG </a>{" "}
                </div>
              </div>
              <div className="uk-button">
                <div className="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-jpg-sang-pdf/"> JPG sang PDF </a>{" "}
                </div>
              </div>
              <div className="uk-button">
                <div className="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-jpg-sang-ico/"> JPG sang ICO </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-container">
          <div className="uk-card uk-card-body ">
            <div className="uk-text-left uk-text-large">
              <h3 className="text-color"> Chuyển đổi JPEG </h3>
            </div>
            <div className="uk-container uk-align-center uk-child-width-1-1@s uk-child-width-1-6@l r">
              <div className="uk-button">
                <div className="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-jpeg-sang-ico/"> JPEG sang PNG </a>{" "}
                </div>
              </div>
              <div className="uk-button">
                <div className="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-jpeg-sang-ico/"> JPEG sang PDF </a>{" "}
                </div>
              </div>
              <div className="uk-button">
                <div className="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-jpeg-sang-ico/"> JPEG sang ICO </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Convert;
