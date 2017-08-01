'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 生成视图
 */
const RenderClientPage = exports.RenderClientPage = env => {
  if (env === 'development') {
    return `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, user-scalable=no">
                <title>画报测试页面</title>
                <style>
                  body{
                    margin:0px;
                    padding:0px;
                  }
                </style>
              </head>
              <body>
                <div id="app"></div>
                <script src="/devClient.bundle.js"></script>
              </body>
            </html>`;
  }
  return `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, user-scalable=no">
              <title>画报</title>
              <style>
                body{
                  margin:0px;
                  padding:0px;
                }
              </style>
            </head>
            <body>
              <div id="app"></div>
              <script src="/common/common-manifest.js"></script>                
              <script src="/common/common-reactlib.js"></script>        
              <script src="/client/bundle-client.js"></script>
            </body>
        </html>`;
};

const RenderManagePage = exports.RenderManagePage = env => {
  if (env === 'development') {
    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, user-scalable=no">
          <title>画报后台测试页面</title>
          <style>
            body{
                margin:0px;
                padding:0px;
            }
          </style>
        </head>
        <body>
          <div id="app"></div>
          <script src="/devClient.bundle.js"></script>
        </body>
      </html>`;
  }
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,user-scalable=no">
        <title>画报后台</title>
        <style>
          body{
              margin:0px;
              padding:0px;
          }
        </style>
      </head>
      <body>
        <div id="app"></div>
        <script src="/devClient.bundle.js"></script>
      </body>
    </html>`;
};
//# sourceMappingURL=view.js.map