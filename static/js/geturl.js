functionopenDownloadDialog(url, saveName)
{
  if(typeofurl == 'object'&& url instanceofBlob)
  {
    url = URL.createObjectURL(url); // 创建blob地址
  }
  varaLink = document.createElement('a');
  aLink.href = url;
  aLink.download = saveName || '';// HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
  varevent;
  if(window.MouseEvent) event = newMouseEvent('click');
  else
  {
    event = document.createEvent('MouseEvents');
    event.initMouseEvent('click',true,false, window, 0, 0, 0, 0, 0, false,false,false,false, 0, null);
  }
  aLink.dispatchEvent(event);
}
