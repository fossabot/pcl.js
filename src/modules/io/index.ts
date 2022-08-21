function loadPCDFile(filename: string): PointCloud {
  return pcl.Module['io.loadPCDFile'](filename);
}

// function savePCDFile() {}
// function savePCDFileASCII(filename: string, cloud: any) {}
// function savePCDFileBinary(filename: string, cloud: any) {}
// function savePCDFileBinaryCompressed(filename: string, cloud: any) {}

export default {
  loadPCDFile,
  // savePCDFile,
  // savePCDFileASCII,
  // savePCDFileBinary,
  // savePCDFileBinaryCompressed,
};
