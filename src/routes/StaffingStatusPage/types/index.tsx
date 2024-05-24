export interface SatkerData {
  dsp: number;
  rill: number;
  message?: string;
}

export interface Satker {
  satker: string;
  keterangan: SatkerData;
  POLRI: {
    jumlah: SatkerData;
    [key: string]: SatkerData | undefined;
  };
  "PNS POLRI": {
    jumlah: SatkerData;
    [key: string]: SatkerData | undefined;
  };
}

export interface TotalSatker {
  [key: string]: SatkerData | undefined;
}