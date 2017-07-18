/**
 * 生成视图
 */
export const RenderClientPage = (env) => {
  if (env === 'development') {
    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>画报测试页面</title>
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>画报</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="/client/client.bundle.js"></script>
      </body>
    </html>`;
};

export const RenderManagePage = (env) => {
  if (env === 'development') {
    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>画报后台测试页面</title>
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>画报后台</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="/devClient.bundle.js"></script>
      </body>
    </html>`;
};
