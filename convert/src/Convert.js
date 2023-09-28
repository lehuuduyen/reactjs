import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Dragger } = Upload;
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
function Convert() {
  const props = {
    name: "file",
    multiple: true,

    action: "http://convert.getlinktraffic.space/convert.php",
    data: {
      to: "tinyPNG",
    },

    onChange(info) {
      console.log("====================================");
      console.log(info);
      console.log("====================================");
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-xxx",
      percent: 50,
      name: "image.png",
      status: "uploading",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-5",
      name: "image.png",
      status: "error",
    },
  ]);
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 class="text-color">Chuyển s sang a</h1>
      </div>
      <div
        class="uk-card uk-card-default uk-card-hover uk-card-body form-section"
        style={{ height: "auto !important" }}
      >
        <div class="uk-container uk-text-center">
          <div class="upload-container">
            <div class="upload-container-form">
              <Upload.Dragger
                {...props}
                itemRender={(originNode, file) => (
                  <div class="ant-upload-list-item ant-upload-list-item-done">
                    <a
                      className="ant-upload-list-item-thumbnail"
                      href="hhhhhhhhhhhhhhhhhh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="hhhhhhhhhhhhh"
                        alt="cam-trai-du-lich-ho-ba-be-kynghidongduong-000.jpg"
                        className="ant-upload-list-item-image"
                      />
                    </a>
                    <span
                      className="ant-upload-list-item-name"
                      title="cam-trai-du-lich-ho-ba-be-kynghidongduong-000.jpg"
                    >
                      cam-trai-du-lich-ho-ba-be-kynghidongduong-000.jpg
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
                            tabindex="-1"
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
                )}
                listType="picture"
                onPreview={handlePreview}
              >
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
              <div class="action-bottom">
                <p class="uk-text-center"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-section-xsmall uk-section-muted">
        <div class="uk-container ">
          <div class="uk-card uk-card-default uk-card-hover uk-text-center">
            <div class="uk-card-header">
              <h2>Làm cách nào để chuyển đổi xxxx sang aaas trực tuyến?</h2>
              <div>
                Hướng dẫn từng bước để chuyển đổi xxxxxxxxxxxx sang yyyyyyyyyyy
                miễn phí. Nó hoạt động trên PC (Windows, Mac, Linux) và thiết bị
                di động (iPhone, Android).
              </div>
            </div>
            <div class="uk-card-body uk-padding-small uk-padding-remove-top uk-margin-remove uk-flex uk-child-width-1-3@m content--how-to-convert__steps">
              <div class="step">
                <div class="uk-margin-remove-adjacent step--img">
                  {" "}
                  <svg class="uk-width-small"></svg>{" "}
                </div>
                <div class="step--title">
                  <h3 id="#step-1">Tải lên tệp xxxxxxxxxxxx</h3>
                </div>
                <div class="step--description">
                  Kéo và thả tệp xxxxxxxxxxxxxx của bạn vào khu vực tải lên.
                  Kích thước tệp tối đa là 100&nbsp;MB.
                </div>
              </div>
              <div class="step" id="step-2">
                <div class="uk-margin-remove-adjacent step--img">
                  {" "}
                  <svg class="uk-width-small"></svg>{" "}
                </div>
                <div class="step--title">
                  <h3>đổi xxxxxxxxxxxx sang yyyyyyyyyyyy</h3>
                </div>
                <div class="step--description">
                  Nhấp vào "Chuyển đổi" để thay đổi xxxxxxxxx thành yyyyyyyyyy.
                  Quá trình chuyển đổi thường mất vài giây.
                </div>
              </div>
              <div class="step">
                <div class="uk-margin-remove-adjacent step--img">
                  {" "}
                  <svg class="uk-width-small"></svg>{" "}
                </div>
                <div class="step--title">
                  <h3 id="#step-3">Tải xuống tệp xxxxxxxxxxxx</h3>
                </div>
                <div class="step--description">
                  Bây giờ bạn có thể tải xuống tệp xxxxxxxxxxxx. Liên kết tải
                  xuống chỉ hoạt động trên thiết bị của bạn.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-section-xsmall uk-padding-remove">
        <div class="uk-container">
          <div class="uk-card uk-card-body ">
            <div class="uk-text-left uk-text-large">
              <h3 class="text-color"> Chuyển đổi PNG </h3>
            </div>
            <div class="uk-container uk-align-center uk-child-width-1-1@s uk-child-width-1-6@l r">
              <div class="uk-button">
                <div class="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-png-sang-tinypng/">
                    {" "}
                    PNG sang TINYPNG{" "}
                  </a>{" "}
                </div>
              </div>
              <div class="uk-button">
                <div class="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-png-sang-jpg/"> PNG sang JPG </a>{" "}
                </div>
              </div>
              <div class="uk-button">
                <div class="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-png-sang-jpeg/"> PNG sang JPEG </a>{" "}
                </div>
              </div>
              <div class="uk-button">
                <div class="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-png-sang-pdf/"> PNG sang PDF </a>{" "}
                </div>
              </div>
              <div class="uk-button">
                <div class="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-png-sang-ico/"> PNG sang ICO </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-container">
          <div class="uk-card uk-card-body ">
            <div class="uk-text-left uk-text-large">
              <h3 class="text-color"> Chuyển đổi JPG </h3>
            </div>
            <div class="uk-container uk-align-center uk-child-width-1-1@s uk-child-width-1-6@l r">
              <div class="uk-button">
                <div class="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-jpg-sang-tinypng/">
                    {" "}
                    JPG sang TINYPNG{" "}
                  </a>{" "}
                </div>
              </div>
              <div class="uk-button">
                <div class="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-jpg-sang-png/"> JPG sang PNG </a>{" "}
                </div>
              </div>
              <div class="uk-button">
                <div class="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-jpg-sang-pdf/"> JPG sang PDF </a>{" "}
                </div>
              </div>
              <div class="uk-button">
                <div class="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-jpg-sang-ico/"> JPG sang ICO </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-container">
          <div class="uk-card uk-card-body ">
            <div class="uk-text-left uk-text-large">
              <h3 class="text-color"> Chuyển đổi JPEG </h3>
            </div>
            <div class="uk-container uk-align-center uk-child-width-1-1@s uk-child-width-1-6@l r">
              <div class="uk-button">
                <div class="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-jpeg-sang-ico/"> JPEG sang PNG </a>{" "}
                </div>
              </div>
              <div class="uk-button">
                <div class="uk-text-center">
                  {" "}
                  <a href="/chuyen-doi-jpeg-sang-ico/"> JPEG sang PDF </a>{" "}
                </div>
              </div>
              <div class="uk-button">
                <div class="uk-text-center">
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
