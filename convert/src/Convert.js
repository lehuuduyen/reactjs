import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Modal, Image } from "antd";
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
  const [fileList, setFileList] = useState([]);


  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

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

//  function onDrop(e) {
//     console.log("Dropped files", e.dataTransfer.files);
//   }

  function onChange(info) {
    // const { status } = info.file;
    // console.log('-----1221ijkdnsjkandajk');
    // setFileList(info.fileList);
    // if (status !== "uploading") {
    //   // console.log(info.file, info.fileList);
    // }
    // if (status === "done") {
     
    //   message.success(`${info.file.name} file uploaded successfully.`);
    // } else if (status === "error") {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
    // console.log("====================================");
    // console.log(info);
    // console.log(fileList);
    // console.log("====================================");
     let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(newFileList);
  }

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
                name= "file"
                multiple={true}
                // onDrop={onDrop}
                onChange={(e)=>onChange(e)}
                action="http://convert.getlinktraffic.space/convert.php"
                data={{ to: 'tinyPNG' }}
                fileList={fileList}
              
                itemRender={(originNode, file) => { 
                  console.log('---------duyen',file.response,file) 
                  return (
                 originNode
                )}}
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
