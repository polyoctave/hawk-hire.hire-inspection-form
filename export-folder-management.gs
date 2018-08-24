function getExportFolder(sheet){
    var unitNumber = sheet.sheet.getRange(sheet.unitNumberCell).getValue();
    return getChildFolderByNameAndCreateIfNotExist(getChildFolderByNameAndCreateIfNotExist(EXPORT_DIR_ID, unitNumber).getId(), getSubfolderNameFromExportedSheet(sheet));
}

function getChildFolderByNameAndCreateIfNotExist(parentFolderId, childFolderName){
    var parentFolder = DriveApp.getFolderById(parentFolderId);
    var folders = parentFolder.getFoldersByName(childFolderName);
    if (folders.hasNext()){ // Return first child folder with specified name
        return folders.next();
    }
    return parentFolder.createFolder(childFolderName); // Create child folder with specified name and return it
}

function getSubfolderNameFromExportedSheet(sheet){
    switch (sheet.name) {
        case 'Pre delivery form':
            return 'Pre Hire Docs';
        case 'Post hire form':
            return 'Post Hire Docs';
        default:
            return 'If you see this, there is a bug in the script';
    }
}