//https://developers.google.com/apps-script/reference/drive/drive-app

function getFolderByName(name, parent=DriveApp.getRootFolder()) {
  var folders = parent.searchFolders('title="'+name+'"');
  while (folders.hasNext()) {
    return folders.next();
  }
}

function addFolder(name, parent=DriveApp.getRootFolder()){
  var folder = getFolderByName(name, parent);
  if(folder==undefined)
    folder = parent.createFolder(name);
  
  return folder;
}

function getFileByName(name, folder) {
  var files = folder.searchFiles('title="'+name+'"');
  while (files.hasNext()) {
    return files.next();
  }
}

function addFile(path, folder){
  var blob = UrlFetchApp.fetch(path).getBlob();
  var file = getFileByName(blob.getName(), folder);
  
  if(file==undefined){
    return folder.createFile(blob);
  }
  else
    return file;
}
