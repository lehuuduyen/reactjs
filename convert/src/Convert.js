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
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
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
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
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
